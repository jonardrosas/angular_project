import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MantisStage } from '../../models'
import * as mantisStageActions from '../actions/mantisstage.actions';


@Injectable()
export class MantisStageEffects {
    private stageInstance: MantisStage = new MantisStage();

    constructor(
        private actions$: Actions,
    ) {

    }

    loadMantisStagesFieldFn = createEffect(
        () => this.actions$.pipe(
            ofType(mantisStageActions.GET_MANTIS_STAGE),
            mergeMap(
                (payload: any) => this.stageInstance.objects.all({limit: 100})
                .pipe(
                    map(
                        data => mantisStageActions.setMantisStageAction({stages: data.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    )    


}