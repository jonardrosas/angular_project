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
    @ViewChild(JobreportSectionDirective, {static: false}) adSection: JobreportSectionDirective;

    constructor(
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private store: Store<any>,
        private dispInstanceMangerService: DispoMangerService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngAfterViewInit() {
        setTimeout(()=> this.loadComponent(), 2000);
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            this.getObjectUsingStore(this.mantisId);
        });
    }

    loadMantisRecord() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                if (data.id) {
                    const paramsIns: DispostionParameter = {
                        mantisRecord: this.mantisRecord,
                        modalService: this.modalService,
                    }
                    this.dispoManagerInstance = new MantisDispositionManager(paramsIns);
                    this.dispoManagerInstanceSubject = this.dispInstanceMangerService.dispoMangerSubject;
                    this.dispoManagerInstanceSubject.next(this.dispoManagerInstance);
                }
            }
        );
    }

    getObjectUsingStore(mantisId: number) {
        this.store.dispatch(orcModuleStore.getMantisObjectAction({id: mantisId}));
        this.loadMantisRecord();
    }

    loadComponent() {
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

}
