import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OrcCheckService, MantisRecordService, OrcRecordService } from '../../services';
import { OrcCheckModel} from './../../models/'
import * as orcRecordActions from '../actions/orcrecord.actions';


@Injectable()
export class OrcRecordEffects {
    private checkInstance: OrcCheckModel = new OrcCheckModel();

    constructor(
        private actions$: Actions,
        private orcCheckService: OrcCheckService,
        private mantisService: MantisRecordService,
        private orcRecordService: OrcRecordService,
    ) {

    }

    loadOrcRecordCheckFn = createEffect(() => this.actions$.pipe(
            ofType(orcRecordActions.GET_ORC_CHECK),
            mergeMap(
                (payload: any) => this.checkInstance.objects.filter(
                    {
                        record: payload.record,
                        limit: payload.limit,
                    })
                .pipe(
                    map(
                        //checks => orcRecordActions.setOrcChecksAction({checks: checks.results}),
                        checks => orcRecordActions.setOrcChecksAction({checks: checks}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

    
    loadOrcIstGroupsFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.GET_IST_GROUP_OPTION),
        mergeMap(
            (payload: any) => this.orcCheckService.getOrcIstGroup({status: payload.status})
            .pipe(
                map(
                    groups => orcRecordActions.setIstGroupAction({groups: groups.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))

    loadOrcSOAGroupsFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.GET_SOA_GROUP_OPTION),
        mergeMap(
            (payload: any) => this.mantisService.getGroups({status: payload.status})
            .pipe(
                map(
                    groups => orcRecordActions.setSOAGroupAction({groups: groups.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))

    loadDistinctOrcCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.GET_DISTINCT_CHECK_FIELDS),
        mergeMap(
            (payload: any) => this.orcRecordService.getDistinctFields(payload.record, {field: payload.fields})
            .pipe(
                map(
                    data => orcRecordActions.setDistinctFieldAction({data: data.data}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))

    loadIstCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.getiSTChecksAction),
        mergeMap(
            (payload: any) => this.orcRecordService.getIstChecks(payload.record, payload.group)
            .pipe(
                map(
                    data => orcRecordActions.setiSTChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))    

    loadSoaCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.getSoaChecksAction),
        mergeMap(
            (payload: any) => this.orcRecordService.getSoaChecks(payload.record)
            .pipe(
                map(
                    data => orcRecordActions.setSoaChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))        

}





