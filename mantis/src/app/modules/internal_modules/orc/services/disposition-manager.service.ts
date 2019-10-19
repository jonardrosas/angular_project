import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { DispostionParameter } from './../scripts/disposition';
import { MantisDispositionManager } from './../scripts';

@Injectable()
export class DispoMangerService {
    public dispoMangerSubject = new BehaviorSubject({} as MantisDispositionManager);
}
