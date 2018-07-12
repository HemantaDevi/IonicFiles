import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToProfile(){
    console.log("This is magic..!!")
    this.navCtrl.push(ProfilePage)
  }

  callPhone(PhoneNumber:string){
    console.log("Calling Yaya..");
    window.location.href="tel: "+ encodeURIComponent(PhoneNumber);
  }

  sendMail(emailAddress:string){
    console.log("Mailing hema..");
    window.location.href="mailto: "+ encodeURIComponent(emailAddress);
  }

  sendSMS(sms:string){
    console.log("sending sms..");
    window.location.href="sms: "+ encodeURIComponent(sms);
  }

  GoToQuotesPage(){
    console.log("This is magic..!!")
    this.navCtrl.push(QuotesPage);
  }
}
