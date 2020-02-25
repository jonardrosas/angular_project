import { Pipe, PipeTransform } from '@angular/core';
import { MantisStage } from './../models';

@Pipe({
  name: 'toStageString'
})
export class ToStageStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
         return value
  }

}
