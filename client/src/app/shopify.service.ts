import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor(private http: HttpClient) { }

  getProdouct(): Observable<any> {
    return this.http.get(`https://be.serveo.net/get`,
      { responseType: 'text' });
  }
}
