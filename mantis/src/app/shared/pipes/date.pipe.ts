import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDate'
})
export class UnixToDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
         if(value){
             let date =  new Date(value * 1000)
                 return date.toLocaleString()
         }
         return value
  }

}
