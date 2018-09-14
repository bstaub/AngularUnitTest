import { Component, OnInit } from '@angular/core';
import {Content} from '../modules/Content';
import {ContentService} from '../shared/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public liste: Content[];
  constructor(private content: ContentService) { }

  ngOnInit() {
    this.liste = this.content.getListe();
  }
}
