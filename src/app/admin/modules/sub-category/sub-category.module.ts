import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category/sub-category.component';



@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule
  ],
  exports:[SubCategoryComponent]
})
export class SubCategoryModule { }
