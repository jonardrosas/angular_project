import * as fromUserSessionState from './core.state';

export interface CoreModuleState {
    sessionState: fromUserSessionState.SessionState
}

export * from './core.state';