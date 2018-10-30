import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [
  { path: 'mu', loadChildren: './pages/music/music.module#MusicModule', data: { title: '音乐' } },
  { path: '', loadChildren: './pages/photo-wall/photo-wall.module#PhotoWallModule', data: { title: '照片墙' } },
  // { path: '', loadChildren: './pages/three-d/three-d.module#ThreeDModule', data: { title: '3D' } },
  // { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule', data: { title: '404' }}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
});
