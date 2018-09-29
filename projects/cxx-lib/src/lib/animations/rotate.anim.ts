import { AnimationTriggerMetadata, trigger, state, transition, animate, keyframes, style } from '@angular/animations';

export const rotateAnimm: AnimationTriggerMetadata = trigger('rotate', [
  state('front', style({ transform: 'rotateY(0deg)' })),
  state('back', style({ transform: 'rotateY(180deg)' })),
  transition('front => back', [
    animate(1000, keyframes([
      style({ opacity: 0, transform: 'rotateY(0deg)', offset: 0 }),
      style({ opacity: 1, transform: 'rotateY(90deg)', offset: 0.3 }),
      style({ opacity: 1, transform: 'rotateY(180deg)', offset: 1.0 })
    ]))
  ]),
  transition('back => front', [
    animate(1000, keyframes([
      style({ opacity: 1, transform: 'rotateY(180deg)', offset: 0 }),
      style({ opacity: 0, transform: 'rotateY(270deg)', offset: 0.3 }),
      style({ opacity: 1, transform: 'rotateY(360deg)', offset: 1.0 }),
    ]))
  ]),
]);
