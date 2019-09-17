import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit () {
      this.route.paramMap.subscribe(params => {
          this.getObject(params.get('id'));
      });    
  }

  getObject(id){
  }


}
