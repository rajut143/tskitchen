import { Injectable } from '@angular/core';
import { SubcatItem } from '../models/subcat-item';

@Injectable({
  providedIn: 'root'
})
export class TsservicesService {
  items:SubcatItem[]=[
    new SubcatItem(1,"chiken-biryani",200),
    new SubcatItem(2,"chiken-biryani-handi",300),
    new SubcatItem(3,"chiken-biryani-full",400),
    new SubcatItem(4,"chiken-biryani-jambo",600),
  ]
  constructor() { }
  getItems():SubcatItem[]{
    return this.items;
  }
}
