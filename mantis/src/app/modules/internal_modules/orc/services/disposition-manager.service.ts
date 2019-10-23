import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { MantisDispositionManager } from './../scripts/main';

@Injectable()
export class DispoMangerService {
    public dispoMangerSubject = new BehaviorSubject({} as MantisDispositionManager);
}
