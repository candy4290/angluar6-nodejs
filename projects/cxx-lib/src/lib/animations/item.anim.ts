import { trigger, state, transition, style, animate } from '@angular/animations';
export let item: any = trigger('item', [
    state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
    state('hover', style({transform: 'scale(1.8)'})),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out'))
]);
// , 'box-shadow': '3px 3px 5px 6px #ccc'
