import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

declare var $:any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  productDt: any = [];
  products: any
  totalcartvalue = 0;
  conditionToDisaply = false
  orders = []
  sub_total:any=0;

  date= new Date();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.products = this._dataService.data;
  }

  addToCart(indexValue: any, propductId: any,price:any) {
    this.totalcartvalue += 1;
    let productDetailsIndivi = this.products[indexValue]
    console.log(productDetailsIndivi)
    console.log(this.totalcartvalue + "cart value dsgsg")
    let count = 1
    let push = true
    console.log(indexValue + "   " + propductId)
    if (this.products[indexValue].quantity == 0) {
      return
    }

    for (let ords of this._dataService.orders) {
      if (ords.indexVal == indexValue) {
        console.log("index value already")
        ords.quantity++;
        push = false
        this.conditionToDisaply = true
      }
    }
    let totalAmount=this.getQuantity(indexValue)*price;
    if (push) {
      this._dataService.orders.push({ "indexVal": indexValue, "quantity": count, "total":totalAmount })
      this.productDt.push(productDetailsIndivi);
      this.conditionToDisaply = true
    }
    this.products[indexValue].quantity--;
    let counte=0;
    for(let i=0; i<this.products.length; i++){
      let count_sub = this._dataService.orders[i];
     if(count_sub != undefined){
       let count1 = count_sub.quantity*productDetailsIndivi.price;
       counte = count1+counte;
       console.log(counte);
     }
     this.sub_total=counte;     
    }
    this._dataService.sendTotal(this.totalcartvalue);
  }

  removeProductFromProductList(i:any){
  this.productDt.splice(i,1);    
  }

  removeFromCart(indexValue: any, propductId: any) {
    this.totalcartvalue -= 1;
    this.products[indexValue].quantity++;
    for (let ord of this._dataService.orders) {
      if (ord.indexVal == indexValue) {
        ord.quantity -= 1
      }
    }
    this._dataService.sendTotal(this.totalcartvalue)
  }

  getQuantity(i: any) {
    for (let orders of this._dataService.orders) {
      if (orders.indexVal == i) {
        return orders.quantity
      }
    }
  }

  processSale(){
   $('#processModal').modal('show');
  }

  cancelSale(){
    this.productDt=[];
    this._dataService.orders=[];
    this.sub_total=0;
    this.totalcartvalue=0;
  }
}
