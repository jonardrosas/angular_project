import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayContains'
})
export class ArrayContainsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let arr = args[1];
    return arr.includes(value);
  }

}
