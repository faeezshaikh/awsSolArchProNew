import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'controlpanel.html'
})
export class ControlPanelPage {


  constructor(public nav:NavController) {
    console.log("Loaded ControlPanelComponent")
  }


}
