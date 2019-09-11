export interface UpdateSessionObj{
	user_profile_img_url: string,
	status_code: number,
	name: string,
	user: string,
	ACL_techtype: string,
	version: number,
	title: string,
	user_permissions: string[],
	user_id: number,
	ACL_fab: number,
	ACL_gid: number,
	ACL_sub_group: string,
	ACL_permissions: string[],
	ACL_gname: string
}

export interface UpdateSessionResponse{
	response;
}

export interface NgDtSettings{
	className: string,
	field: string,
	title: string,
}

export interface TestInterFace{
	id: number,
	name: string
}