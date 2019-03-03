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
  }
}
