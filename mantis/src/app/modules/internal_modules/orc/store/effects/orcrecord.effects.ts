import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrcCheckService } from '../../services';
import * as orcRecordActions from '../actions/orcrecord.actions';
import { OrcCheckModel, OrcCheckInterface } from '../../models';


@Injectable()
export class OrcRecordEffects {

    constructor(
        private actions$: Actions,
        private orcCheckService: OrcCheckService
    ) {}

    loadOrcRecordCheckFn = createEffect(() => this.actions$.pipe(
            ofType(orcRecordActions.GET_ORC_CHECK),
            mergeMap(
                (payload: any) => this.orcCheckService.getQuerySet({record: payload.record})
                .pipe(
                    map(
                        checks => orcRecordActions.setOrcChecksAction({checks: checks.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );
}





