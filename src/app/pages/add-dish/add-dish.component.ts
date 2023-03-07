import {Component, OnInit} from '@angular/core';
import {Dish} from "../../models/dish";
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {Group} from "../../models/group";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit{
  model: Partial<Dish> = {};
  groups: Group[];

  constructor(private http:HttpService) {

  }

  ngOnInit() {
    this.http.getGroups().subscribe(groups => this.groups = groups);
    console.log("init getGroups");
  }

  send() {
    this.http.addDish(this.model as Dish).subscribe(dish => this.model = dish);
  }
}
