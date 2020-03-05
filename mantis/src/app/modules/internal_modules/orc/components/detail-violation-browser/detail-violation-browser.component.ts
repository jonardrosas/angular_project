import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ButtonCollapse } from './../../util/';
import * as ENUMS from './../../../orc/scripts/';
import { OrcViolationCardModel } from './../../../orc/models/';
import { Subscription } from 'rxjs';
import * as orcModuleStore from './../../store';
import { DispoMangerService } from './../../services';

@Component({
  selector: 'app-detail-violation-browser',
  templateUrl: './detail-violation-browser.component.html',
  styleUrls: ['./detail-violation-browser.component.css']
})
export class DetailViolationBrowserComponent extends ButtonCollapse implements OnInit {
    container;
    mantisRecord;
    dispoManagerInstance;
    mainTabs = [
        {id: 'all_violations', title: 'All Violation'},
    ]
    vioGroupingOptions = [
        {id: 'All', title: 'No Group'},
        {id: 'name', title: 'By Check'},
        {id: 'status', title: 'By Status'},
        // {id: 'selection', title: 'By Selection'},
        {id: 'pdb_pid', title: 'By Pattern'},
    ]

    violationStat = {}
    violations: OrcViolationCardModel[] = [];
    private violationSubscription: Subscription;
    private mantisRecordSubscription: Subscription;
    violationGroup = {};
    violationSelection = {selected: [], unselected: []}


    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
        ) {
        super()
    }

    ngOnInit() {
        this.mantisRecordSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                this.dispoManagerInstance = this.dispoService.dispoManagerInstance;
                this.store.dispatch(this.dispoManagerInstance.storeManagerIns.violationsAction({record_id: this.mantisRecord.orc_record.id, limit: 1000}))
                this.getViolations()
            }
        )
    }

    getViolations(){
        this.violationSubscription = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.violationsSelector)).subscribe(
            (data) => {
                if(data.objects){
                    this.violations = data.objects;
                    this.groupByField('All')
                }
            }
        )        
    }

    groupByField(field){
        this.violationGroup = {}
        for (let vio of this.violations){
            const val = vio[field] ? vio[field]: field;
            if(val in this.violationGroup){
                this.violationGroup[val].push(vio)
            }else{
                this.violationGroup[val] = [vio]
            }
            if(this.violationSelection.unselected.indexOf(vio.id) == -1){
                this.violationSelection.unselected.push(vio.id)
            }
        }
    }

    selectAll(isSelect){
        for (let vio in this.violationGroup){
            for(let k in this.violationGroup[vio]){
                this.violationGroup[vio][k].isSelected = true
                this.violationSelection.selected.push(this.violationGroup[vio][k].id)
            }
        }
    }

    unSelectAll(isSelect){
        for (let vio in this.violationGroup){
            for(let k in this.violationGroup[vio]){
                this.violationGroup[vio][k].isSelected = false
                this.violationSelection.unselected.push(this.violationGroup[vio][k].id)
                this.violationSelection.selected = [];
            }
        }
    }    

    addSelection(vio){
        const unselect_index = this.violationSelection.unselected.indexOf(vio.id)
        const select_index = this.violationSelection.selected.indexOf(vio.id)
        if(vio.isSelected){
            if(unselect_index  > -1){
                this.violationSelection.unselected.splice(unselect_index, 1)
            }
            if(select_index == -1){
                this.violationSelection.selected.push(vio.id)
            }
        }else{
            if(select_index  > -1){
                this.violationSelection.selected.splice(select_index, 1)
            }
            if(unselect_index == -1){
                this.violationSelection.unselected.push(vio.id)
            }            
        }
    }


}
