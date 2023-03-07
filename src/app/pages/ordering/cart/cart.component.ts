import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Cart} from "../../../models/cart";
import {HttpService} from "../../../services/http.service";
import {CartRow} from "../../../models/CartRow";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartSummary: CartRow[];

  @Input()
  totalPrice: string;

 }
