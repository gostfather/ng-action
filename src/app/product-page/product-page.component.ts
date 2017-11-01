import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from "@angular/router" ;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  private productId :number;
  constructor(
    private routerInfo :ActivatedRoute
  ) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params :Params)=>{
      this.productId = params["id"]
    })
    // this.productId = this.routerInfo.snapshot.params["id"];
  }

}
