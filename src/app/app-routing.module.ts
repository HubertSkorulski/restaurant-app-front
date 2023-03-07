import {RouterModule, Routes} from "@angular/router";
import {OrderingComponent} from "./pages/ordering/ordering.component";
import {NgModule} from "@angular/core";
import {AddDishComponent} from "./pages/add-dish/add-dish.component";
import {AddGroupComponent} from "./pages/add-group/add-group.component";
import {UpdateDishComponent} from "./pages/update-dish/update-dish.component";

const routes: Routes = [
  {path: '', redirectTo: '/order', pathMatch:'full'},
  {path: 'order', component: OrderingComponent  },
  {path: 'add-dish', component: AddDishComponent},
  {path: 'update-dish', component: UpdateDishComponent},
  {path: 'add-group', component: AddGroupComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
