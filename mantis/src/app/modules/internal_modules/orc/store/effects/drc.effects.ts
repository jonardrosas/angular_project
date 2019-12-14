import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DrcCheckService, DrcRecordService } from '../../services';
import * as storeActions from '../actions';


@Injectable()
export class DrcCheckEffects {

    constructor(
        private actions$: Actions,
        private drcCheckService: DrcCheckService,
        private drcRecordService: DrcRecordService,
    ) {}

    loadDrcRecordCheckFn = createEffect(() => this.actions$.pipe(
            ofType(storeActions.getDrcChecksAction),
            mergeMap(
                (payload: any) => this.drcCheckService.getQuerySet(
                    {
                        record: payload.record,
                        limit: 2000,
                    })
                .pipe(
                    map(
                        checks => storeActions.setOrcChecksAction({checks: checks.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

    loadDrcIstCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(storeActions.getDrciSTChecksAction),
        mergeMap(
            (payload: any) => this.drcRecordService.getAssignedChecks(payload.record)
            .pipe(
                map(
                    data => storeActions.setAssignedChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))    

    loadDrcSoaCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(storeActions.getDrcSoaChecksAction),
        mergeMap(
            (payload: any) => this.drcRecordService.getSoaChecks(payload.record)
            .pipe(
                map(
                    data => storeActions.setSoaChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))            

}





