import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule, 
    NgbPopoverModule
  ],
  exports :[
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent
  ],
})
export class UserAuthModule { }
