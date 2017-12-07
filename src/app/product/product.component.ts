import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';

import "rxjs/Rx";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [{provide:ProvideService,useClass:AnathorProvideService}] 可以单独更改注入的服务
})
export class ProductComponent implements OnInit {
  products :Array<Product>;
  
  private keyword: string;
  private titleFilter: FormControl = new FormControl();//在dom的input输入中绑定formcontrol这个指令。在改变input值得时候就会往外发送valuechange这个事件。在外部订阅就可以

  constructor(
    private productService: ProductService
  ) { 
    this.titleFilter.valueChanges
      .debounceTime(500) // 在用户停止输入500ms后发射观察者是基于rxjs的
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


