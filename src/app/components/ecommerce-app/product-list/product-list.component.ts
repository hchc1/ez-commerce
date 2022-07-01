import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  productService : ProductService;

  constructor( productSrvc : ProductService) {

    this.productService = productSrvc;

  }

  ngOnInit(): void {

    this.products = this.productService.getProduct().subscribe((item => {
      this.products = item;
      console.log(this.products);
    }))
  }

}
