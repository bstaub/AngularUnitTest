import { Injectable } from '@angular/core';
import {Nav} from '../modules/Nav';


@Injectable({
  providedIn: 'root'
})
export class NavService {
  nav: Nav[];
  constructor() {
    this.nav = [
      {name: '', title: 'Home'},
      {name: 'bilder', title: 'Bilder'},
      {name: 'content', title: 'Content'},

    ];
  }
  getNav(): Nav[] {
    return this.nav;
  }
}
