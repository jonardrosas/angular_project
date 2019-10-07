import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from './../../services';
import * as userSesessionActions from './../actions';


@Injectable()
export class UserSessionEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthenticationService
    ) {}

    loadMantisRecordFn = createEffect(() => this.actions$.pipe(
            ofType(userSesessionActions.LOAD_USER_SESSION),
            mergeMap(
                (payload: any) => this.authService.getSession()
                .pipe(
                    map(
                        data => userSesessionActions.setUserAction({userInfo: data}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );
}