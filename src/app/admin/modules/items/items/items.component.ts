import { Component, OnInit } from '@angular/core';
import { TsservicesService } from '../../../services/tsservices.service';
import { SubcatItem } from '../../../models/subcat-item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  listItems:SubcatItem[];
  constructor(private tsservicesService:TsservicesService) { }

 
  ngOnInit(): void {
    this.listItems = this.tsservicesService.getItems(); 
  }
  deleteItem(item){
    let confirmDel = confirm("Do u want delete this item ");
     if(confirmDel){
      const index: number = this.listItems.indexOf(item);
      this.listItems.splice(index, 1);
    }
 }

  editItem(){
  }
}
