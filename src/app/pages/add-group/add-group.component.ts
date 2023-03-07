import { Component } from '@angular/core';
import {Group} from "../../models/group";
import {HttpService} from "../../services/http.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {
  model: Partial<Group> = {};

  constructor(private http:HttpService) {
  }
  send() {
    console.log("co jest");
    this.http.addGroup(this.model as Group).subscribe(group => this.model = group);
  }
}
