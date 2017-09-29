import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController) {

  }

  buttonAction(event) {
    var isError = true;
    if (isError) {
      this.generateError();
    }
    console.log(event);
  }

  generateError() {
    var errorMsg = "User generated error 2";
    throw errorMsg;
  }
}
