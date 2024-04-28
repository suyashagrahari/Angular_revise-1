import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-login',
 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  userData:any = {}
  getFormDetails(data:NgForm){
    console.warn(data);
    this.userData = data;
  }

}
