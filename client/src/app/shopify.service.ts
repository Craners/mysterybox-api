import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private http: HttpClient) { }

  getProduct(shop) : Observable<any> {
    let params = new HttpParams().set('shop', shop);
    const url = `https://shopifybe.serveo.net/get/product`;
    return this.http.get(url, {params: params});
  }
}
