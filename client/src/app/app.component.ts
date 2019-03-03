import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ShopifyService } from "../app/shopify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "client";
  sub = null;
  shop = null;

  constructor(private route: ActivatedRoute, private router: Router, private _shopify: ShopifyService) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.shop = params["shop"] || null;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  request() {
    return this._shopify.getProduct(this.shop).subscribe((data) => {
      console.log(data);
    });
  }
}
