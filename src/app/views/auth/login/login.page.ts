import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginPayload : {email : string , password : string } = {
    password : '',
    email    : '',
   }
   constructor(private appFacade : AppFacade , private router: Router) { }

   ngOnInit() {
   }

  async login(){
     const logs  = this.appFacade.verifyObj(this.loginPayload);
     if(logs.count > 0) {
       return this.displayErrors(logs.index as number[]);
     }
     const response = await this.appFacade.connectUser(this.loginPayload);
     if(response['password'] == this.loginPayload.password) {
        this.router.navigate(['/dash/index']);
        return this.appFacade.buildSuccess("bienvenue");
     }
     return this.appFacade.buildError("Mauvais mot de passe");
  }

   displayErrors(errorTable : number[]) {
     for(let index of errorTable) {
       this.appFacade.buildError(`veuillez renseigner votre ${Object.keys(this.loginPayload)[index]}`)
     }
   }

}
