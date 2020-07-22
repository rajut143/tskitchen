import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/modules/login/login/login.component';


const routes: Routes = [
                      { path : '', redirectTo:'login', pathMatch:'full'},
                      { path :'login', component:LoginComponent},
                      { path : '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
