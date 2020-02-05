import { environment } from './../../environments/environment';

export const APP_CONFIG = {
    BASE_URL: environment.api_url,
    MEDIA_URL: environment.media_url, 
    CSRF_COOKIE_NAME: "csrftoken",
    CSRF_HEADER_NAME: "X-CSRFToken",
    TITLE: 'Mantis',  // page title
    APP_THEME: 'bootstrap',
    // APP_THEME: 'material',
    MAT_DEFAULT_NAVIGATION: 'material-sidenav',
    LOGO: 'assets/img/poc/mantis4_poc.png',  //Brand Logo
    PAGENOTFOUND: 'assets/img/filenotfound404.jpg',
    LOADING_IMG: 'assets/img/loading.gif',
    DEFAULT_PROFILE_IMG: 'assets/img/default_profile.JPEG',
    // https://github.com/davesque/django-rest-framework-simplejwt
    JWT_ACCESS_TOKEN: 'access',
    JWT_REFRESH_TOKEN: 'refresh',
    AUTHORIZATION_TYPE: 'Bearer',
    ACL_GID_KEY: 'ACL_gid'
};


