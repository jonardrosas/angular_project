import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MantisResolution } from '../../models'
import * as mantisResolutionActions from '../actions/mantisresolution.actions';


@Injectable()
export class MantisResolutionEffects {
    private resolutionInstance: MantisResolution = new MantisResolution();

    constructor(
        private actions$: Actions,
    ) {

    }

    loadMantisResolutionFieldFn = createEffect(
        () => this.actions$.pipe(
            ofType(mantisResolutionActions.GET_MANTIS_RESOLUTION),
            mergeMap(
                (payload: any) => this.resolutionInstance.objects.all({limit: 100})
                .pipe(
                    map(
                        data => mantisResolutionActions.setMantisResolutionAction({resolutions: data.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    )    


}