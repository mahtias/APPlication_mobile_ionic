import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn : "root"
})

export class AlertService {

  message !: string;

  constructor(private toast : ToastController) {

  }

  setMessage(message : string ) {
    this.message = message;
    return this;
  }

  private getMessage(){
   return this.message;
  }

  buildError() {
   return this.build(this.getMessage(),'danger');
  }

  buildSuccess() {
    return this.build(this.getMessage(),'success');
  }

  buildWarning() {
    return  this.build(this.getMessage(),'warning');
  }

  private  async build(message : string , color : string ) {
    const alert = await this.toast.create({
      message ,
      color,
      duration : 3000,
      position : 'top'
    });
    return alert.present();
  }

}
