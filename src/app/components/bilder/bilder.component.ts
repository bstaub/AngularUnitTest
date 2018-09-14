import { Component, OnInit } from '@angular/core';
import {Image} from '../modules/Image';
import {Images} from '../modules/mock-images';

@Component({
  selector: 'app-bilder',
  templateUrl: './bilder.component.html',
  styleUrls: ['./bilder.component.scss']
})
export class BilderComponent implements OnInit {

  public images: Image[] = Images;
  constructor() { }

  ngOnInit() {
  }

}
