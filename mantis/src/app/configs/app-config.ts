import { environment } from './../../environments/environment';

export const APP_CONFIG = {
    BASE_URL: environment.api_url,
    MEDIA_URL: environment.media_url, 
    CSRF_COOKIE_NAME: "mantis3_token",
    CSRF_HEADER_NAME: "X-CSRFToken",
    TITLE: 'Mantis',  // page title
    APP_THEME: 'bootstrap',
    // APP_THEME: 'material',
    MAT_DEFAULT_NAVIGATION: 'material-sidenav',
    LOGO: 'assets/img/mantis4_logo.png',  //Brand Logo
    PAGENOTFOUND: 'assets/img/filenotfound404.jpg',
    DEFAULT_PROFILE_IMG: 'assets/img/default_profile.JPEG',
    // https://github.com/davesque/django-rest-framework-simplejwt
    JWT_ACCESS_TOKEN: 'access',
    JWT_REFRESH_TOKEN: 'refresh',
    AUTHORIZATION_TYPE: 'Bearer',

};


