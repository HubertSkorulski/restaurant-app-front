import {Component, OnInit} from '@angular/core';
import {Group} from "../../models/group";
import {Dish} from "../../models/dish";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit{
  model : Partial<Dish> = {};
  groups: Group[];
  dishes: Dish[];
  dish: Dish;
  emptyDish: Dish;


  constructor(private http:HttpService) {
  }


  ngOnInit() {
    this.http.getGroups().subscribe(groups => this.groups = groups);
    this.http.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  send() {
    console.log(this.dish);
    this.updateDish();
    this.http.updateDish(this.dish).subscribe(
      result => console.log(result),
      error => console.log(error));
    console.log(this.dish);
    this.dish = this.emptyDish;
    this.model = {};
  }

  updateDish() {
    if (this.model.name != null ) {
      this.dish.name = this.model.name;
    }

    if (this.model.price != null) {
      this.dish.price = this.model.price;
    }

    if (this.model.groupId != null) {
      this.dish.groupId = this.model.groupId;
    }
  }

}
