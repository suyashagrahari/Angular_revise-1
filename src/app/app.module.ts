import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { LoginComponent } from './user-auth/login/login.component';
import { SigninComponent } from './user-auth/signin/signin.component';
import { ForgetpasswordComponent } from './user-auth/forgetpassword/forgetpassword.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    MatButtonModule,
    MatCardModule
  ],

  exports : [
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
