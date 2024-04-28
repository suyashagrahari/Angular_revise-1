import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  signinForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
  })
  SigninUser(){
    console.log(this.signinForm.value);
  }
}
