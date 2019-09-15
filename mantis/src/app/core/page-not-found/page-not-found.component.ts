import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from './../../configs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
   public page_not_found = APP_CONFIG.PAGENOTFOUND;

  constructor() { }

  ngOnInit() {
  }

}
