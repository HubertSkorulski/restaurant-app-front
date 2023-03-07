import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Dish} from "../models/dish";
import {Cart} from "../models/cart";
import {CartRow} from "../models/CartRow";
import {Group} from "../models/group";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:8080';
  private cartUrl = '/v1/cart/';
  private groupUrl = '/v1/group/';
  private dishUrl = '/v1/dish/';
  constructor(private httpClient: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.url + '/v1/dish/getDishes');
  }

  createCart(): Observable<Cart> {
    return this.httpClient.get<Cart>('http://localhost:8080/v1/cart/create');
  }

  addProductToCart(dishName: string, cart: Cart, quantity: number): Observable<CartRow[]> {
    let wholeUrl= this.url + this.cartUrl +'/addProduct/' + dishName + '/' + cart.id + '/' + quantity ;
    return this.httpClient.put<CartRow[]>(wholeUrl, cart);
  }

  getCartSummary(cartId: number): Observable<CartRow[]> {
    return this.httpClient.get<CartRow[]>(this.url + this.cartUrl + "summary/" + cartId);
  }

  addGroup(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(this.url + this.groupUrl, group);
  }

  addDish(dish: Dish): Observable<Dish> {
    return this.httpClient.post<Dish>(this.url + this.dishUrl, dish);

  }
  getGroups() : Observable<Group[]>{
    return this.httpClient.get<Group[]>(this.url + this.groupUrl);
  }


  updateDish(dish: Dish): Observable<Dish> {
    return this.httpClient.put<Dish>(this.url + this.dishUrl, dish).pipe(
      tap(console.log)
    );
  }
}
