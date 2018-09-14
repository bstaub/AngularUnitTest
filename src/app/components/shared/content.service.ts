import { Injectable } from '@angular/core';
import {Content} from '../modules/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  liste: Content[];
  constructor() {
    this.liste = [
      {id: 1, name: 'Bruno', beschreibung: 'Hallo Bruno'},
      {id: 2, name: 'Hans', beschreibung: 'Hallo Hans!'},
      {id: 3, name: 'Isabel', beschreibung: 'Hallo Isabel Eberling'},
    ];
  }
  getListe(): Content[] {
    return this.liste;
  }
}
