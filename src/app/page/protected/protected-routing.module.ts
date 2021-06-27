import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from 'src/app/shared/guard/route.guard';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./transaction/transaction.module').then((m) => {
            return m.TransactionModule;
          }),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => {
            return m.ProfileModule;
          }),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
