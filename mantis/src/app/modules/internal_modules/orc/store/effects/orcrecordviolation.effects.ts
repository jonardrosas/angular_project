import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrcViolationModel } from '../../models'
import * as orcRecordViolationActions from '../actions/orcrecordviolation.actions';


@Injectable()
export class OrcRecordViolationEffects {
    private violationInstance: OrcViolationModel = new OrcViolationModel();

    constructor(
        private actions$: Actions,
    ) {

    }
    loadOrcViolationFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordViolationActions.getOrcRecordViolationsAction),
        mergeMap(
            (payload: any) => this.violationInstance.objects.filter({record_id: payload.record_id, limit: payload.limit})
            .pipe(
                map(
                    data => orcRecordViolationActions.setOrcRecordViolationsAction({violations: data}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))    

}