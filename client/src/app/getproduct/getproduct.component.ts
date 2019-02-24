import { Component, OnInit } from '@angular/core';
import { ShopifyService } from "../shopify.service";

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  projects: [];
  constructor(private _shopify: ShopifyService) { }

  ngOnInit() {

    this.getProduct();
  }

  private getProduct() {

    return this._shopify.getProdouct().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }
}
