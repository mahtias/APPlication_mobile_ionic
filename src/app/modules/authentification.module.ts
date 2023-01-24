import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthentificationRoutingModule } from "../routes/authentification-routing-module/authentification-routing-module.module";



@NgModule({
  declarations : [],
  imports : [CommonModule,FormsModule,AuthentificationRoutingModule],
  exports : []
})

export class AuthentificationModule  {

}
