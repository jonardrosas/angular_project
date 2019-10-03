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

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}
