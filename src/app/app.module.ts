import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImagesComponent } from './view/images/images.component';
import { ViewModule } from './view/view.module';
import { HttpService } from './http.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ViewModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
     {path:'flickrImages',component:ImagesComponent},
     {path:'', redirectTo :'flickrImages',pathMatch:'full'},
     {path:'*',redirectTo :'flickrImages',pathMatch:'full'},
     {path:'**', redirectTo :'flickrImages',pathMatch:'full'}
    ])
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
