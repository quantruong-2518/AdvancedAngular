import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/homepage/homepage.module').then(m => m.HomepageModule),
  },
  {
    path: 'componentA',
    loadChildren: () =>
      import('./screens/component-a/component-a.module').then(
        m => m.ComponentAModule,
      ),
  },
  {
    path: 'componentB',
    loadChildren: () =>
      import('./screens/component-b/component-b.module').then(
        m => m.ComponentBModule,
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./screens/not-found/not-found.module').then(
        m => m.NotFoundModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
