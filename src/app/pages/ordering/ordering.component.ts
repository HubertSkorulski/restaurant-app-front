import { Component } from '@angular/core';
import {Cart} from "../../models/cart";
import {HttpService} from "../../services/http.service";
import {Observable, Subscription, timestamp} from "rxjs";
import {Dish} from "../../models/dish";
import {CartRow} from "../../models/CartRow";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent {

  cartFromBe: Observable<Cart>;
  dishes: Observable<Dish[]>;
  cartSummary: CartRow[];
  cartRows: CartRow[];
  cart:Cart;
  totalPrice : number;
  roundedTotalPrice: string;

  constructor(private http:HttpService) {
  }

  ngOnInit() {
    this.dishes = this.http.getDishes();
    this.cartFromBe = this.http.createCart();
    this.cartFromBe.subscribe(cart => {
      this.cart = cart;
    });
  }

  addDishToCart(dish:Dish) : void {
      this.totalPrice =0;
      this.http.addProductToCart(dish.name,this.cart,1).subscribe( cartRows => {
        this.countTotalPrice(cartRows);
      }
   );
   }

   countTotalPrice(cartRows: CartRow[]) {
     this.cartSummary = cartRows;
     cartRows.forEach(cartRow => {
       this.totalPrice = (this.totalPrice + cartRow.price);
     })
     this.roundedTotalPrice = this.totalPrice.toFixed(2);
   }
}
