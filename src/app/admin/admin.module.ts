import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { CategoryComponent } from './modules/category/category/category.component';
import { SubCategoryComponent } from './modules/sub-category/sub-category/sub-category.component';
import { OrdersComponent } from './modules/orders/orders/orders.component';
import { ItemsComponent } from './modules/items/items/items.component';
import { LoginComponent } from './modules/login/login/login.component';

@NgModule({
  declarations: [ AdminComponent,
                  HeaderComponent, 
                  FooterComponent, 
                  SidenavComponent, 
                  DashboardComponent, 
                  CategoryComponent, 
                  SubCategoryComponent, 
                  OrdersComponent,
                   ItemsComponent, 
                   LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class AdminModule { }
