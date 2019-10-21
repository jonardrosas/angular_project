export interface User {
    ACL_permissions: any;
    user_permissions: any;
    title: string;
    ACL_gid: number;
    ACL_gname?: string;
    user: string;
    ACL_techtype?: string;
    user_profile_img_ur?: string;
    user_id: number;
    ACL_sub_group?: string;
    status_code: number;
    ACL_fab?: string;
    name: string;
}



export interface LoginCredentials  {
    username: string;
    password: string;
}