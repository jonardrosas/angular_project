import { OrcRecordModel } from './orcrecord.model';

export class MantisRecordModel {
	assignee: string;
	device: string;
	disposition_method: string;
	fab: string;
	gto_db: string;
	id: number;
	job_id: string;
	layer: string;
	mantis_id: number;
	mantis_stage;
	maskset: string;
	mrs_status: string;
	nm_exists_flag: boolean;
	nm_rules;
	operation: string;
	orc_check_status_map;
	orc_status_map;
	pcf_mask_lay: string;
	pdb_status: string;
	ptrf: string;
	review_path: string;
	run_history: number;
	sbldevice_piye: string;
	status: string;
	techtype: string;
	timestamp: number;
	checks;
	orc_record: OrcRecordModel;
	orc_record_id: number;
	bug_text_id: number;
}