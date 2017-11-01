import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {Code404Component} from "./code404/code404.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: []
  },
  {
    path: 'product/:productId',
    component : ProductDetailComponent,
    children: []
  },
  {
    path: '**',
    component : Code404Component,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
