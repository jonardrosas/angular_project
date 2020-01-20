import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrcCheckModel, OrcCheckImage, OrcCheckImageInterface } from '../../models'
import * as orcRecordCheckActions from '../actions/orcrecordcheck.actions';
import * as mantisResolutionActions from '../actions/mantisresolution.actions';


@Injectable()
export class OrcRecordCheckEffects {
    private checkInstance: OrcCheckModel = new OrcCheckModel();
    private checkImageInstance: OrcCheckImage = new OrcCheckImage();

    constructor(
        private actions$: Actions,
    ) {

    }
    loadOrcCheckDetailFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordCheckActions.getOrcRecordCheckObject),
        mergeMap(
            (payload: any) => this.checkInstance.objects.get(payload.id)
            .pipe(
                map(
                    data => orcRecordCheckActions.setOrcRecordCheckObject({checkObject: data}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))    

    loadOrcCheckDetaiImagesFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordCheckActions.getOrcRecordCheckObjectImages),
        mergeMap(
            (payload: any) => this.checkImageInstance.objects.filter({check: payload.check})
            .pipe(
                map(
                    data => orcRecordCheckActions.setOrcRecordCheckObjectImages({checkImages: data}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))     

}