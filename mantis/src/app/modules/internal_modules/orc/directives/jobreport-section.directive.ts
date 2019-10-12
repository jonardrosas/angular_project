import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appJobreportSection]'
})
export class JobreportSectionDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}
