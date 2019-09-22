import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../../../core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public test;

  constructor(
      private authService: AuthenticationService,
  ) {}

  ngOnInit() {
  }

}
