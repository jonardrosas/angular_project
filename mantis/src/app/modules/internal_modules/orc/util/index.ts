import { Type, Input } from '@angular/core';

export class AdSection {
    constructor(public component: Type<any>, public data: any) {}
}

export class ButtonCollapse {
    @Input() data;

    constructor(){
        if(!this.data){
            this.data = {}
        }
    }

    isCollapse(val){
        if (val) {
            return 'fas fa-caret-right';
        } else {
            return 'fas fa-caret-down';
        }
  }
}
