import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({providedIn: 'root'})
export class NgxDtTableService {

  constructor() { }

  filterConfig(self, col:any): void{
      if(col.filter && col.filter.type === 'default' && !col.filter.choices){
          col.filter.choices = [
                              {"value": 'istartswith', "name":"Starts With" },
                              {"value": 'iendswith', "name":"Ends With" },
                              {"value": 'icontains', "name":"Contains" },
                              {"value": 'iexact', "name":"Equal" },
                              {"value": 'in', "name":"In" }
                          ]
          col.filter.selected = col.filter.choices[2].value;
      }
      else if(col.filter && col.filter.type === 'date' && !col.filter.choices){
          col.filter.choices = [
                              {"value": 'gt', "name":"Greater than (>)" },
                              {"value": 'lt', "name":"Lesser than (<)" },
                              {"value": 'gte', "name":"Greater than or Equal (<=)" },
                              {"value": 'lte', "name":"Lesser than or Equal (<=)" },
                              {"value": 'iexact', "name":"Equal" }
                          ]
          col.filter.selected = col.filter.choices[1].value;
      }
      else if(col.filter && ['SELECT','MULTISELECT'].includes(col.filter.type.toUpperCase())){
          col.filter.selected = col.filter.defaultSelected;
      }
      if(self.hdrTpl){
        col.headerTemplate = self.hdrTpl;
      }
  }

  updateFilterValues(self, column): void {
        if(column.filter){
            let type = column.filter.type.toUpperCase();
            switch(type){
                case "DEFAULT":
                    for(let attr in self.filterObj){
                        if(attr.startsWith(column.prop)){
                           delete self.filterObj[attr];
                        }
                    }
                    let values = (column.filter.fieldValue)?column.filter.fieldValue.trim():column.filter.fieldValue;
                    self.filterObj[column.prop+'__'+column.filter.selected] = values;
                    column.filter.values = values;
                    break;
                case "DATE":
                    if(column.filter.fieldValue){
                        for(let attr in self.filterObj){
                            if(attr.startsWith(column.prop)){
                               delete self.filterObj[attr];
                            }
                        }
                        let values = (column.filter.outputFormat)? moment(column.filter.fieldValue).format(column.filter.outputFormat):column.filter.fieldValue;;
                        self.filterObj[column.prop+'__'+column.filter.selected] = values;
                        column.filter.values = values;
                    }
                    break;
                case "MULTISELECT":
                     if(column.filter.selected && column.filter.selected.length>0){
                        let values = column.filter.selected;
                        self.filterObj[`${column.prop}__in`] = values;
                        column.filter.values = values;
                     }
                     break;
                case "SELECT":
                    if(column.filter.selected){
                        let values = column.filter.selected;
                        self.filterObj[`${column.prop}__iexact`] = values;
                        column.filter.values = values;
                    }
                    break;
            }
        }
    }
}
