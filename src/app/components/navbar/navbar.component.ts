import { Component, OnInit } from '@angular/core';
import {NavService} from '../shared/nav.service';
import {Nav} from '../modules/Nav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public nav: Nav[];
  public navCount: number;
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.nav = this.navService.getNav();
    this.navCount = this.navService.getNavCount();
  }

}
