
export const URLS = {
    // auth urls
    COOKIE_BASED_LOGIN_URL: '/accounts/login2/',
    COOKIE_BASED_LOGOUT_URL: '/accounts/logout2/',
    ACL_SESSION_URL: '/aclsessions/',
    COOKIE_BASED_GET_SESSION: '/user_accounts/session_update/',
    JWT_BASED_LOGIN_URL: '/accounts/login2/',
    JWT_BASED_LOGOUT_URL: '/accounts/logout2/',
    // JWT_BASED_LOGIN_URL: '/jwt_api/token/',
    JWT_BASED_GET_SESSION: '/user_accounts/get_session/',

    // ORC URL
    ORC_RECORD_URL: '/orc/api/v1/orc/',
    MANTIS_RECORD_URL: '/mantis/api/v1/mantis/',
    ORC_CHECK_URL: '/orc/api/v1/check/',
    CHECK_SUMMARY_URL: '/mantis/api/v1/mantiserrorstat/',
    JOB_NOTES_URL: '/orc/api/v1/notes/',
    JOB_ATTACHMENT_URL: '/orc/api/v1/attachments/',
    JOB_HISTORY_URL: '/mantis/api/v1/mantishistory/',

    // ORC ACTIONS
    ORC_CHECK_DISPOSE_URL: '/orc/disposecheck/',
    ORC_CHECK_RECOMMEND_URL: '/orc/recommendcheck/',
    ORC_CHECK_ADD_NOTES_URL: '/orc/addnotes/',
    ORC_CHECK_UPDATE_IMG_DESC_URL: '/orc/update_image_description/',
    ORC_CHECK_DEL_IMG_URL: '/orc/del_check_img/',
    //ORC_CHECK_IMAGES_URL: '/orc/addcheckimage/',
    ORC_CHECK_IMAGES_URL: '/mantis/check_image_upload/',

    // NEW DJANGO REST FRAMEWORK
    DRF_MANTIS_RECORD_URL: '/mantis/api/v2/mantis_record/',
    DRF_MANTIS_RESOLUTION_URL: '/mantis/api/v2/mantis_resolution/',
    DRF_MANTIS_STAGE_URL: '/mantis/api/v2/mantis_stage/',
    DRF_MANTIS_RECORD_LIST_URL: '/mantis/api/v2/mantis_record_worklist/',
    DRF_MANTIS_RECORD_TEXT_URL: '/mantis/api/v2/mantis_record_text/',
    DRF_MANTIS_RECORD_NOTE_URL: '/mantis/api/v2/mantis_record_note/',
    DRF_MANTIS_RECORD_ATTACHMENT_URL: '/mantis/api/v2/mantis_record_attachment/',
    DRF_MANTIS_RECORD_HISTORY_URL: '/mantis/api/v2/mantis_record_history/',
    DRF_ORC_RECORD_URL: '/mantis/api/v2/orc_record/',
    DRF_DRC_RECORD_URL: '/mantis/api/v2/drc_record/',
    DRF_ORC_RECORD_EXT_URL: '/mantis/api/v2/orc_record_ext/',
    DRF_ORC_RECORD_CHECK_URL: '/mantis/api/v2/orc_record_check/',
    DRF_ORC_RECORD_CHECKIMAGE_URL: '/mantis/api/v2/orc_check_image/',
    DRF_DRC_RECORD_CHECK_URL: '/mantis/api/v2/drc_record_check/',
    DRF_DRC_RECORD_CHECK_ASSESSMENT_URL: '/mantis/api/v2/orc_check_assessment/',
    DRF_AUTH_GROUP_PROFILE_URL: '/mantis/api/v2/auth_group_profile/',
    DRF_ORC_JOB_DISPOSE_URL: '/orc/multiplejobdispose/',
    DRF_AUTH_USER_URL: '/admin2/api/v1/group/?id=179',
    DRF_AUTH_USER_CURRENT_GRP_URL: '/mantis/api/v2/auth_current_groups/',
    DRF_JOB_ASSIGNMENT_URL: '/orc/jobassignment/',

};