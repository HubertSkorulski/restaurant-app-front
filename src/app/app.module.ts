import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DishesMenuComponent } from './pages/ordering/dishes-menu/dishes-menu.component';
import { CartComponent } from './pages/ordering/cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { OrderingComponent } from './pages/ordering/ordering.component';
import {AppRoutingModule} from "./app-routing.module";
import { AddDishComponent } from './pages/add-dish/add-dish.component';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { AddGroupComponent } from './pages/add-group/add-group.component';
import { UpdateDishComponent } from './pages/update-dish/update-dish.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesMenuComponent,
    CartComponent,
    MenuComponent,
    NavbarComponent,
    OrderingComponent,
    AddDishComponent,
    AddGroupComponent,
    UpdateDishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
