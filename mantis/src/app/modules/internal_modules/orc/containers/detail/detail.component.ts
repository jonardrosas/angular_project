import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import * as orcModuleStore from './../../store';
import { MantisRecordModel } from './../../models';
import { APP_CONFIG } from './../../../../../configs';
import { JobreportSectionDirective } from './../../directives';
import { MantisDispositionManager, DispostionParameter } from './../../scripts';
import { ReportSectionComponent, ReportCheckDispostionPopups, reportStore } from './detail.component.configuration';
import { DispoMangerService } from './../../services';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
    public reportSectionsComponents = ReportSectionComponent;
    public reportCheckDispostionPopups = ReportCheckDispostionPopups;
    public dispoManagerInstance: MantisDispositionManager;
    public dispoManagerInstanceSubject;
    public mantisRecordSubscription: Subscription;
    public checkFilter;
    public mantisId: number;
    public mantisRecord: MantisRecordModel;
    public loadingImg: string = APP_CONFIG.LOADING_IMG;
    public isSectionComponentLoaded: boolean = false;
    @ViewChild(JobreportSectionDirective, {static: false}) adSection: JobreportSectionDirective;

    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<any>,
        private dispoService: DispoMangerService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
        setTimeout(()=> this.loadComponent(), 1500);
    }

    ngOnDestroy(){
        this.mantisRecordSubscription.unsubscribe()
        
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            this.getObjectUsingStore(this.mantisId);
        });

    }

    loadMantisRecord() {
        this.mantisRecordSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector))
        .subscribe(
            (data) => {
                this.mantisRecord = data;
                if (data.id) {
                    const paramsIns: DispostionParameter = {
                        mantisRecord: this.mantisRecord,
                        registeredCheckPopUps: ReportCheckDispostionPopups,
                        store: reportStore                         
                    }
                    this.store.dispatch(orcModuleStore.getMantisErrorSummaryAction({id: this.mantisRecord.bug_text.id}));
                    this.dispoManagerInstance = this.dispoService.initialized(paramsIns) 
                    this.dispoManagerInstanceSubject = this.dispoService.dispoMangerSubject;
                }
            },
        );
    }

    getObjectUsingStore(mantisId: number) {
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
