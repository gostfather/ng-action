import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from "@angular/router" ;
import { Product, Comment, ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;
  private productId: number;
  private comments: Comment[];
  constructor(
    private routerInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params :Params)=>{
      this.productId = params["productId"] ;
    });
    this.product = this.productService.getProduct(this.productId);
    
    this.comments = this.productService.getCommentsForProductId(this.productId); 
  }

}
