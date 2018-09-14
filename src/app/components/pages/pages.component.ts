import { Component, OnInit } from '@angular/core';
import {NavService} from '../shared/nav.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private param: any;
  public pageBody: any;
  public pages: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavService,
    private title: Title
  ) { }

  ngOnInit() {
    this.pages = this.navService.getNav();
    this.route.params.subscribe( params => {
      this.param = params['page'];
      if (this.param === undefined) { // if no parameter...
        this.param = ''; // go to route homepage
        this.title.setTitle('Homepage');
      } else {
        // replcae - with '' and make all words uppercase
        this.title.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      }
    });
  }

}
