import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MantisRecordService } from './../../services';
import * as mantisRecordActions from './../actions/mantisrecord.actions';


@Injectable()
export class MantisRecordEffects {

    constructor(
        private actions$: Actions,
        private mantisRecordService: MantisRecordService
    ) {}

    loadMantisRecordFn = createEffect(() => this.actions$.pipe(
            ofType(mantisRecordActions.GET_MANTIS_OBJECT),
            mergeMap(
                (payload: any) => this.mantisRecordService.getObject(payload.id)
                .pipe(
                    map(
                        mantisobjects => mantisRecordActions.setMantisObjectAction({data: mantisobjects}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

    loadMantisRecordErroSummmaryEffect = createEffect(() => this.actions$.pipe(
            ofType(mantisRecordActions.GET_MANTIS_ERROR_SUMMARY),
            mergeMap(
                (payload: any) => this.mantisRecordService.getErrorSummary({id: payload.id})
                .pipe(
                    map(
                        summary => mantisRecordActions.setMantisErrorSummaryAction({description: summary.results[0].description}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

    loadMantisRecordJobNotesEffect = createEffect(() => this.actions$.pipe(
            ofType(mantisRecordActions.GET_MANTIS_JOB_NOTES),
            mergeMap(
                (payload: any) => this.mantisRecordService.getJobNotes({bug: payload.bug})
                .pipe(
                    map(
                        notes => mantisRecordActions.setMantisJobNotesAction({notes: notes.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

    loadMantisRecordAttachmentEffect = createEffect(() => this.actions$.pipe(
            ofType(mantisRecordActions.GET_MANTIS_ATTACHMENT),
            mergeMap(
                (payload: any) => this.mantisRecordService.getAttachmentSvs({bug_id: payload.bug_id})
                .pipe(
                    map(
                        data => mantisRecordActions.setMantisAttachmentAction({attachments: data.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );


    loadMantisRecordHisotryEffect = createEffect(() => this.actions$.pipe(
        ofType(mantisRecordActions.GET_MANTIS_HISTORY),
            mergeMap(
                (payload: any) => this.mantisRecordService.getHistorytSvs({bug: payload.bug})
                .pipe(
                    map(
                        data => mantisRecordActions.setMantisHistoryAction({histories: data.results}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );

}


