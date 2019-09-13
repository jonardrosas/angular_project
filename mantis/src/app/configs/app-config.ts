import { environment } from './../../environments/environment';

export const APP_CONFIG = {
    BASE_URL: environment.api_url,
    MEDIA_URL: environment.media_url,
    CSRF_COOKIE_NAME: "mantis3_token",
    CSRF_HEADER_NAME: "X-CSRFToken",
    TITLE: 'Mantis',
    NAV_TYPE: 'boostrap',
    LOGO: 'assets/img/mantis4_logo.png',
};


