import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  show = false;
  version = '4.0';
  constructor() { }

  ngOnInit() {
      setTimeout(
        ()=> {
          this.show = true;
        }, 2000
      )
  }

}
