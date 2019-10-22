import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import * as orcModuleStore from './../../store';
import { MantisRecordModel } from './../../models';
import { APP_CONFIG } from './../../../../../configs';
import { JobreportSectionDirective } from './../../directives';
import { MantisDispositionManager, DispostionParameter, ReportSectionComponent } from './../../scripts';
import { DispoMangerService } from './../../services';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit, AfterViewInit {
    public reportSectionsComponents = ReportSectionComponent;
    public dispoManagerInstance: MantisDispositionManager;
    public dispoManagerInstanceSubject;
    public mantisId: number;
    public mantisRecord: MantisRecordModel;
    public loadingImg: string = APP_CONFIG.LOADING_IMG;
    public isSectionComponentLoaded: boolean = false;
    public checkFilter: {limit?: number; record?: number};
    @ViewChild(JobreportSectionDirective, {static: false}) adSection: JobreportSectionDirective;

    constructor(
        private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private store: Store<any>,
        private dispInstanceMangerService: DispoMangerService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
        setTimeout(()=> this.loadComponent(), 1500);
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            debugger;
            this.getObjectUsingStore(this.mantisId);
        });

    }

    loadMantisRecord() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                debugger;
                this.mantisRecord = data;
                if (data.id) {
                    const paramsIns: DispostionParameter = {
                        mantisRecord: this.mantisRecord,
                        modalService: this.modalService,
                    }
                    this.checkFilter = {};
                    this.checkFilter['limit'] = 1000;
                    this.checkFilter['record'] = this.mantisRecord.orc_record.id;
                    this.dispoManagerInstance = new MantisDispositionManager(paramsIns);
                    this.dispoManagerInstanceSubject = this.dispInstanceMangerService.dispoMangerSubject;
                    this.dispoManagerInstanceSubject.next(this.dispoManagerInstance);
                    this.store.dispatch(orcModuleStore.getMantisErrorSummaryAction({id: this.mantisRecord.bug_text.id}));

                    const loadAllCheckAction = this.dispoManagerInstance.dispositionInstance.checkTableStoreAction;
                    const loadIstCheckAction  = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedIstAction;
                    const loadSoaCheckAction = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedSoaAction;
            
                    this.store.dispatch(loadAllCheckAction(this.checkFilter));
                    this.store.dispatch(loadIstCheckAction(this.checkFilter));
                    this.store.dispatch(loadSoaCheckAction(this.checkFilter));     

                }
            },
        );
    }

    getObjectUsingStore(mantisId: number) {
        debugger;
        this.store.dispatch(orcModuleStore.getMantisObjectAction({id: mantisId}));
        this.store.dispatch(orcModuleStore.getMantisJobNotesAction({bug: this.mantisId}));
        this.store.dispatch(orcModuleStore.getMantisHistoryAction({bug: this.mantisId}));
        this.store.dispatch(orcModuleStore.getMantisAttachmentAction({ bug_id: this.mantisId }));
        this.store.dispatch(orcModuleStore.getIstGroupAction({status: 'iST'}));
        this.store.dispatch(orcModuleStore.getSOAGroupAction({status: 'SOA'}));
        this.loadMantisRecord();
    }

    loadComponent() {
        if(this.reportSectionsComponents.length > 0){
            for(let k in this.reportSectionsComponents){
                const componentInstance = this.reportSectionsComponents[k]
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentInstance.component);
                const viewContainerRef = this.adSection.viewContainerRef;
                const componentRef = viewContainerRef.createComponent(componentFactory);
                (componentRef.instance as any).data =  componentInstance.data;
                (componentRef.instance as any).dispoManagerInstance =  this.dispoManagerInstance;
                (componentRef.instance as any).mantisId =  this.mantisId;
            }        
        }
        this.isSectionComponentLoaded = true;
    }

}
