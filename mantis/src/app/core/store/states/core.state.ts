import { User } from '../../models';


export interface SessionState {
    userSession: User;
    selectedGroup;
}
