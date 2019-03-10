import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const routes: Routes = [
  { path: 'user', loadChildren: './pages/user/user.module#UserModule' },
  { path: 'mu', loadChildren: './pages/music/music.module#MusicModule', data: { title: '音乐' } },
  { path: 'ph', loadChildren: './pages/photo-wall/photo-wall.module#PhotoWallModule', data: { title: '照片墙' } },
  { path: '3d', loadChildren: './pages/three-d/three-d.module#ThreeDModule', data: { title: '3D' } },
  { path: 'cdk', loadChildren: './pages/cdk/cdk.module#CdkModule', data: { title: 'cdk' } },
  { path: 'editors', loadChildren: './pages/editors/editors.module#EditorsModule', data: { title: '编辑器' } },
  { path: '', redirectTo: 'editors', pathMatch: 'full'}
  // { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule', data: { title: '404' }}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0]
});
