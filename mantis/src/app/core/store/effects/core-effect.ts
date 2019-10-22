import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService, LoginService } from './../../services';
import * as coreActions from './../actions';


@Injectable()
export class CoreEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthenticationService,
        private loginService: LoginService,
    ) {}

    loadCoreEffectFn = createEffect(() => this.actions$.pipe(
            ofType(coreActions.GET_USER_SESSION),
            mergeMap(
                (payload: any) => this.authService.getSession()
                .pipe(
                    map(
                        data => coreActions.setUserSessionAction({userSession: data}),
                        catchError(() => EMPTY)
                    )
                )
            )
        )
    );


}