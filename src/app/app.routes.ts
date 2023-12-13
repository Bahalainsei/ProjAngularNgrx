import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './core/component/sidenav/sidenav.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sidenav', pathMatch: 'full' },
  { path: 'sidenav', component:SidenavComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
