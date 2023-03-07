import { Component } from '@angular/core';
import {Cart} from "./models/cart";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'RESTAURANT';
  hidden: boolean = true;

  setHidden() {
    this.hidden = !this.hidden;
  }



}


