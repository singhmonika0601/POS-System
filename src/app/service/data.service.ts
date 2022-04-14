import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

public totalSubject = new Subject()
  orders:any=[]

  data:any = [
    {id:1,productName: "Computer", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-warning"},
    {id:2,productName: "Cavlar", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-success"},
    {id:3,productName: "Sweater", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    {id:4,productName: "Tie", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-info"},
    {id:5,productName: "Jacket", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-warning"},
    {id:6,productName: "Jacket Men", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-success"},
    {id:7,productName: "Grapes", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    {id:8,productName: "Strawberries", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-warning"},
    {id:9,productName: "Apple", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    {id:10,productName: "Orange", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-success"},
    {id:11,productName: "Kiwi", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-primary"},
    {id:12,productName: "Mouse", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    {id:13,productName: "Keyboard", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-primary"},
    {id:14,productName: "Headphone", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-success"},
    {id:15,productName: "Motherboard", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-warning"},
    {id:16,productName: "Notebook", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-primary"},
    {id:17,productName: "Computer Repair", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-success"},
    {id:18,productName: "Gift Folding", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    {id:19,productName: "clothing", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-warning"},
    {id:20,productName: "Nivea Pocket", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-primary"},
    {id:21,productName: "Nivea Pocket Bleu ", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-info"},
    {id:22,productName: "Chilli Hot Pizza", price: "200000", category:"Computers", description: "computer,keyboard,mouse", images:"bg-danger"},
    
 ];

 sendTotal(totalVal:any)

    { 
      
      
      this.totalSubject.next(totalVal)
    }
}