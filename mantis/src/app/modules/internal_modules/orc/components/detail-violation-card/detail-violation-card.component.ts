import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrcViolationCardModel } from './../../models/';
import { checkStatusMapping } from './../../scripts/common/status';
import { APP_CONFIG } from './../../../../../configs';

@Component({
  selector: 'app-detail-violation-card',
  templateUrl: './detail-violation-card.component.html',
  styleUrls: ['./detail-violation-card.component.css']
})
export class DetailViolationCardComponent implements OnInit {
    @Input() vio: OrcViolationCardModel;
    @Input() index;
    @Output() isSelected = new EventEmitter<any>();
    private selection: boolean = false;
    readonly statusMapping: any = checkStatusMapping;
    public media_url: string = APP_CONFIG.BASE_URL;

    constructor() { }

    ngOnInit() {
        if(!(this.vio.isSelected)){
          this.vio.isSelected = false; 
        }
        this.index += 1;
    }

    getBtnClass(value){
         return  this.statusMapping[value] ? this.statusMapping[value].btnClass : '';
    }    

    vioSelection(newVal){
        this.vio.isSelected = newVal;
        this.isSelected.emit(this.vio)
    }

    getThumbnailClass(){
        if(this.vio.isSelected){
          return "bg-info"
        }
    }

}
