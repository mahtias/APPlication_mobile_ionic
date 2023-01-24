import { AlertService } from './../services/utils/alert';
import { Injectable } from '@angular/core';
import { VerificationService } from '../services/data/verification.service';
import { FirebaseService } from '../services/api/firebaseService';
import { User } from '../interfaces/user';

@Injectable({
  providedIn : 'root'
})
export class AppFacade {

  constructor(private verificationService : VerificationService , private alertService : AlertService , private firebaseService : FirebaseService) {
  }

  // verification

  verifyField(field : string){
    return this.verificationService.verifyField(field);
  }
  verifyObj(obj : {}) {
    return this.verificationService.verifyObj(obj);
  }

  //alert
  buildError(message : string) {
    return this.alertService.setMessage(message).buildError()
  }

  buildSuccess(message : string) {
    return this.alertService.setMessage(message).buildSuccess();
  }

  buildWarning(message : string) {
    return this.alertService.setMessage(message).buildWarning();
  }

  // firebase

  addUser(user : User) {
    return this.firebaseService.addUser(user)
  }

  connectUser(loginPayload : {email :string , password : string}) {
    return this.firebaseService.connectUser(loginPayload);
  }

  listUser(){
    return this.firebaseService.listUser();
  }
}
