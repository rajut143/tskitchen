import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from './services/auth.guard';
import { CategoryComponent } from './modules/category/category/category.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { SubCategoryComponent } from './modules/sub-category/sub-category/sub-category.component';
import { ItemsComponent } from './modules/items/items/items.component';
import { OrdersComponent } from './modules/orders/orders/orders.component';

const routes: Routes = [
                          { path: '', redirectTo: 'admin', pathMatch:'full'},
                          { path:'admin', component:AdminComponent, canActivate : [AuthGuard],
                            children:[
                              { path: '', redirectTo: 'dashboard', pathMatch:'full'},
                              { path: 'dashboard',component:DashboardComponent },
                              { path: 'category',component:CategoryComponent },
                              { path: 'subcategory',component:SubCategoryComponent },
                              { path: 'items',component:ItemsComponent },
                              { path: 'orders',component:OrdersComponent },
                            ]
                        }
                      ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
