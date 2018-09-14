import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BilderComponent } from './components/bilder/bilder.component';
import {ContentService} from './components/shared/content.service';
import {NavService} from './components/shared/nav.service';
import { StartseiteComponent } from './components/startseite/startseite.component';
import { PagesComponent } from './components/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    NotfoundComponent,
    BilderComponent,
    StartseiteComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
