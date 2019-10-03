
interface ChangeStatusInterface {
    checkStatus;
}

export class CheckStatusBase implements ChangeStatusInterface {
    public checkStatusGroup: object;
    public checkStatus = [
        { value: 'N', label: 'N: new', group: 'New' },
        { value: 'A', label: 'A: assigned', group: 'Assigned' },
        { value: 'OC', label: 'OC: owner-check', group: 'Disposing' },
        { value: 'SOA', label: 'SOA: stake-owner-action', group: 'EscalatedSOA' },
        { value: 'fST', label: 'fST: final-supportteam-comment', group: 'EscalatedfST' },
        { value: 'SD', label: 'SD: oc-sw-debug', group: 'Disposing' },
        { value: 'RI', label: 'RI: oc-recipe-impr', group: 'Disposing' },
        { value: 'ER', label: 'ER: oc-ext-recipe', group: 'Disposing' },
        { value: 'OP', label: 'OP: oc-process', group: 'Disposing' },
        { value: 'MP', label: 'MP: manual-patch', group: 'Patching' },
        { value: 'PCF', label: 'PCF: passed-check-fail', group: 'Pass' },
        { value: 'PW', label: 'PW: passed-waive', group: 'Pass' },
        { value: 'PT', label: 'PT: passed-weakpoint', group: 'Pass' },
        { value: 'PC', label: 'PC: passed-clean', group: 'Pass' },
        { value: 'PP', label: 'PP: passed-patched', group: 'Pass' },
        { value: 'PNR', label: 'PNR: passed-not-inspect-region', group: 'Pass' },
        { value: 'PI', label: 'PI: passed-ignore', group: 'Pass' },
        { value: 'FD', label: 'FD: fail-design', group: 'Fail' },
        { value: 'FR', label: 'FR: fail-recipe', group: 'Fail' },
        { value: 'FS', label: 'FS: fail-software', group: 'Fail' },
    ];

    private setGroupStatus() {
        this.checkStatusGroup = {};
        for ( const statusIndex in this.checkStatus) {
            if (this.checkStatus[statusIndex]) {
                const row = this.checkStatus[statusIndex];
                const group = this.checkStatus[statusIndex].group;
                if (group in this.checkStatusGroup) {
                    this.checkStatusGroup[group].push(row);
                } else {
                    this.checkStatusGroup[group] = [ row ];
                }
            }
        }
    }

    public getGroupStatus() {
        return this.checkStatusGroup;
    }

    constructor() {
        this.setGroupStatus();
    }


}






