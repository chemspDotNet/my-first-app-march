import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { NavigationComponent } from './navigation/navigation.component'
import { CustomModule } from './custom-module/custom.module';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
