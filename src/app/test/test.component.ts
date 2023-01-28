import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  productDialog?: boolean;

    products: Product[] |any[]=[];

    product?: Product;

    selectedProducts?: Product[];

    submitted?: boolean;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getProducts().then(data => this.products = data);
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    

    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    
    

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products!.length; i++) {
            if (this.products![i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
    getProducts() {
      return this.http.get<any>('assets/data/products.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
}



