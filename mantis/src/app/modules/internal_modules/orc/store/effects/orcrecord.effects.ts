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
                        status: payload.status
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

    loadAssignedCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.getAssignedChecksAction),
        mergeMap(
            (payload: any) => this.orcRecordService.getAssignedChecks(payload.record, payload.group, payload.status)
            .pipe(
                map(
                    data => orcRecordActions.setAssignedChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))    

    loadRecordCheckFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.getRecordChecksAction),
        mergeMap(
            (payload: any) => this.orcRecordService.getChecks(payload.record, payload.group, payload.status, payload.limit)
            .pipe(
                map(
                    data => orcRecordActions.setRecordChecksAction({checks: data.results}),
                    catchError(() => EMPTY)
                )
            )
        )
    ))     

    loadRecordCheckCountFieldFn = createEffect(() => this.actions$.pipe(
        ofType(orcRecordActions.getRecordChecksStatCountAction),
        mergeMap(
            (payload: any) => this.orcRecordService.getCheckStatCount(payload.record)
            .pipe(
                map(
                    data => orcRecordActions.setRecordChecksStatCountAction({checkStatCount: data.data}),
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





