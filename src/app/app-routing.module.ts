import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/public/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/public/public.module').then((m) => {
        return m.PublicModule;
      }),
  },
  {
    path: 'p',
    loadChildren: () =>
      import('./page/protected/protected.module').then((m) => {
        return m.ProtectedModule;
      }),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
