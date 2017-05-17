import { Component} from '@angular/core';
import {OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Product} from "./product.model";
import {ProductService} from "./product.service";
import Observable = Rx.Observable;
import Process = NodeJS.Process;
import {Product} from "./product.model";
@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: [
        'product.component.css'
    ]
})
export class ProductComponent implements OnInit {

    constructor(private productService:ProductService) {
    }

    products:Observable<Product[]>;

    ngOnInit():void {
        this.getProducts();
    }

    getProducts() {
        this.productService.getList().subscribe(
            product => {
                this.products = product
            })
    }


}
