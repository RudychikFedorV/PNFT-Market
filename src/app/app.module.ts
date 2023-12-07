import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthImgComponent } from './auth-img/auth-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthHeaderComponent,
    AuthFooterComponent,
    AuthFormComponent,
    AuthImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
