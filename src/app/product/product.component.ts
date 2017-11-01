import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [{provide:ProvideService,useClass:AnathorProvideService}] 可以单独更改注入的服务
})
export class ProductComponent implements OnInit {
  products :Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


