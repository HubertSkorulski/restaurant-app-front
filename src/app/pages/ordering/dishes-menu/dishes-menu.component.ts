import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import {Observable} from "rxjs";
import {HttpService} from "../../../services/http.service";
import {Dish} from "../../../models/dish";


@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.css']
})
export class DishesMenuComponent {


  @Input()
  dishes: Observable<Dish[]>;

  @Output()
  newEvent = new EventEmitter<Dish>();

  emitDish(dish: Dish) {
    this.newEvent.emit(dish);
  }
}
