import { STATUS_GROUP } from './../enums/main';
import { CheckStatusBase } from './base';


export class OrcCheckStatus extends CheckStatusBase {

     public status = [
        //{ value: 'N', label: 'N: new', group: STATUS_GROUP.NEW},
        { value: 'A', label: 'A: assigned', group: STATUS_GROUP.ASSIGNED },
        { value: 'OC', label: 'OC: owner-check', group: STATUS_GROUP.DISPOSING },

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

    constructor() {
        super();
        this._setChangeStatusOptions()
        this._setRecommendationOption()
    }    

}

export class OrcFtrfCheckStatus extends CheckStatusBase {

    constructor() {
        super();
        this._setChangeStatusOptions()
        this._setRecommendationOption()
    }     

}

export class OrcFtrfF7CheckStatus extends OrcFtrfCheckStatus {

     public status = [
        { value: 'A', label: 'A: assigned', group: STATUS_GROUP.ASSIGNED },
        { value: 'OC', label: 'OC: owner-check', group: STATUS_GROUP.DISPOSING },

        { value: 'SD', label: 'SD: oc-sw-debug', group: STATUS_GROUP.DISPOSING},
        { value: 'RI', label: 'RI: oc-recipe-impr', group: STATUS_GROUP.DISPOSING},
        { value: 'ER', label: 'ER: oc-ext-recipe', group: STATUS_GROUP.DISPOSING },
        { value: 'OP', label: 'OP: oc-process', group:  STATUS_GROUP.DISPOSING},

        { value: 'MP', label: 'MP: manual-patch', group:  STATUS_GROUP.PATCHING},

        { value: 'PW', label: 'PW: passed-waive', group: STATUS_GROUP.PASS},
        { value: 'PT', label: 'PT: passed-weakpoint', group: STATUS_GROUP.PASS},
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

    constructor() {
        super();
        this._setChangeStatusOptions()
        this._setRecommendationOption()
    }      

}

export class OrcFtrfF1CheckStatus extends OrcFtrfF7CheckStatus {

}
