import { STATUS_GROUP } from './../enums/main';


export class CheckStatusBase {
    public changeStatusOptions: any = {};
    public recommendationOptions: any = {};
    public status = [
        { value: 'N', label: 'N: new', group: STATUS_GROUP.NEW},
        { value: 'A', label: 'A: assigned', group: STATUS_GROUP.ASSIGNED },
        { value: 'OC', label: 'OC: owner-check', group: STATUS_GROUP.DISPOSING },
        { value: 'SOA', label: 'SOA: stake-owner-action', group: STATUS_GROUP.SOA },
        { value: 'fST', label: 'fST: final-supportteam-comment', group: STATUS_GROUP.FST },
        { value: 'SD', label: 'SD: oc-sw-debug', group: STATUS_GROUP.DISPOSING},
        { value: 'RI', label: 'RI: oc-recipe-impr', group: STATUS_GROUP.DISPOSING},
        { value: 'ER', label: 'ER: oc-ext-recipe', group: STATUS_GROUP.DISPOSING },
        { value: 'OP', label: 'OP: oc-process', group:  STATUS_GROUP.DISPOSING},
        { value: 'MP', label: 'MP: manual-patch', group:  STATUS_GROUP.PATCHING},
        { value: 'PCF', label: 'PCF: passed-check-fail', group: STATUS_GROUP.PASS },
        { value: 'PW', label: 'PW: passed-waive', group: STATUS_GROUP.PASS},
        { value: 'PT', label: 'PT: passed-weakpoint', group: STATUS_GROUP.PASS},
        { value: 'PC', label: 'PC: passed-clean', group: STATUS_GROUP.PASS },
        { value: 'PP', label: 'PP: passed-patched', group: STATUS_GROUP.PASS},
        { value: 'PNR', label: 'PNR: passed-not-inspect-region', group: STATUS_GROUP.PASS },
        { value: 'PI', label: 'PI: passed-ignore', group: STATUS_GROUP.PASS },
        { value: 'FD', label: 'FD: fail-design', group: STATUS_GROUP.FAIL},
        { value: 'FR', label: 'FR: fail-recipe', group: STATUS_GROUP.FAIL },
        { value: 'FS', label: 'FS: fail-software', group: STATUS_GROUP.FAIL },
    ];


    public recommendations = [
        { value: 'PW', label: 'PW: passed-waive', group: STATUS_GROUP.PASS},
        { value: 'PC', label: 'PC: passed-clean', group: STATUS_GROUP.PASS },
        { value: 'PP', label: 'PP: passed-patched', group: STATUS_GROUP.PASS},
        { value: 'PT', label: 'PT: passed-weakpoint', group: STATUS_GROUP.PASS},
        { value: 'PI', label: 'PI: passed-ignore', group: STATUS_GROUP.PASS },
        { value: 'PNR', label: 'PNR: passed-not-inspect-region', group: STATUS_GROUP.PASS },
        { value: 'FD', label: 'FD: fail-design', group: STATUS_GROUP.FAIL},
        { value: 'FR', label: 'FR: fail-recipe', group: STATUS_GROUP.FAIL },    
        { value: 'FS', label: 'FS: fail-software', group: STATUS_GROUP.FAIL },
    ]    

    constructor(){
        this._setChangeStatusOptions()
        this._setRecommendationOption()
    }

    protected _setChangeStatusOptions() {
        this.changeStatusOptions = {};
        for ( const statusIndex in this.status) {
            if (this.status[statusIndex]) {
                const row = this.status[statusIndex];
                const group = this.status[statusIndex].group;
                if (group in this.changeStatusOptions) {
                    this.changeStatusOptions[group].push(row);
                } else {
                    this.changeStatusOptions[group] = [ row ];
                }
            }
        }
    }    

    protected _setRecommendationOption() {
        this.recommendationOptions = {};
        for ( const statusIndex in this.recommendations) {
            if (this.recommendations[statusIndex]) {
                const row = this.recommendations[statusIndex];
                const group = this.recommendations[statusIndex].group;
                if([STATUS_GROUP.PASS, STATUS_GROUP.FAIL].indexOf(group) != -1){
                    if (group in this.recommendationOptions) {
                        this.recommendationOptions[group].push(row);
                    } else {
                        this.recommendationOptions[group] = [ row ];
                    }
                }
            }
        }
    }

}
