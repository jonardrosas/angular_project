/************************
Component Base Classes
*************************/

import { NgAlertInterface } from '../../../../../../../core/models';



export class AlertClass {
    public alerts: NgAlertInterface[] = [];

    setAlert(err, type = 'danger') {
        this.alerts.push({ type, message: err});
    }

    clearAlert() {
        this.alerts = [];
    }
}
