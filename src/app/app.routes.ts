import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './core/component/sidenav/sidenav.component';
import { ProfileComponent } from './core/component/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SignInComponent } from './core/component/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: '**',
    redirectTo: 'signIn',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
