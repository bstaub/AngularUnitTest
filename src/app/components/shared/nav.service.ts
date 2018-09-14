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
      {name: 'web', title: 'Web'},
      {name: 'game', title: 'Game'},
      {name: 'content', title: 'Content'},

    ];
  }
  getNav(): Nav[] {
    return this.nav;
  }
  getNavCount(): number {
    return (100 / this.nav.length);
  }
}
