import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface AuthUserInterface {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}

