export class SubcatItem{
    public id:string;
    public itemName:string;
    public itemPrice:number;
    public itemImg:string;
    constructor(id,itemName,itemPrice,itemImg='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVkChVvPToZWGqcvLROJwSyMCOMAMZB5WLkA&usqp=CAU'){
        this.id = id;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemImg = itemImg;
    }
}