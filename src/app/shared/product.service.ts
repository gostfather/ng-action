import { Injectable } from '@angular/core';

@Injectable() //可以把别的服务注入
export class ProductService {
  private products :Array<Product> = [
    new Product(1, "第1个商品", 1.99, 3.5, "是我的第1个ngapp创建的商品", ["电子产品", "软件类别"]),
    new Product(2, "第2个商品", 2.99, 4.5, "是我的第2个ngapp创建的商品", ["电子产品", "硬件类别"]),
    new Product(3, "第3个商品", 3.99, 2.5, "是我的第3个ngapp创建的商品", ["电子产品", "软件类别"]),
    new Product(4, "第4个商品", 4.99, 4.5, "是我的第4个ngapp创建的商品", ["电子产品"]),
    new Product(5, "第5个商品", 5.99, 4.5, "是我的第5个ngapp创建的商品", ["电子产品", "软件类别"]),
    new Product(6, "第6个商品", 6.99, 3.5, "是我的第6个ngapp创建的商品", ["图书产品"]),
  ];
  private comments: Comment[]= [
    new Comment(1, 1, "2017-01-04 12:2:23", "张山", 3 , "东西不错"),
    new Comment(2, 1, "2017-02-04 12:2:23", "11", 3.5 , "东西不错"),
    new Comment(3, 1, "2017-03-04 12:2:23", "22", 2 , "东西不错"),
    new Comment(4, 1, "2017-04-04 12:2:23", "33", 4 , "东西不错"),
    new Comment(5, 2, "2017-05-04 12:2:23", "44", 5 , "很好"),
    new Comment(6, 2, "2017-06-04 12:2:23", "55", 2 , "垃圾"),
    new Comment(7, 3, "2017-07-04 12:2:23", "66", 4 , "东西不错"),
    new Comment(8, 4, "2017-08-04 12:2:23", "77", 3.5 , "东西不错")    
    
  ]
  constructor() { }

  getProducts() : Array<Product>{
    return this.products;
  }
  getProduct(id: number) : Product {
    return this.products.find((product:Product)=> product.id == id);
  }
  getCommentsForProductId(id: number) : Comment[]{
    return this.comments.filter((comment :Comment)=> comment.productId == id);
  }
}
export class Product {
  constructor(
    public id :number,
    public title :string,
    public price :number,
    public rating :number,
    public desc :string,
    public categories :Array<string>
  ){
    
  }
}
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ){

  }
}