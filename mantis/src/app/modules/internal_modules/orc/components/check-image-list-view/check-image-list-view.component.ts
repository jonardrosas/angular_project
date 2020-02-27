import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CheckUploadImageComponent } from '../detail-check-list/components/check-upload-image/check-upload-image.component';
import { NgbActiveModal, NgbModal } from './../../../../../modules/third_party_modules/ng_bootstrap';
import { OrcRecordService } from './../../services';
import { OrcCheckImage, OrcCheckModel } from './../../models';
import { NgAlertInterface } from './../../../../../core';
import { BootstrapConfirmComponent } from './../../../../../shared/';
import { getOrcRecordCheckObject, getOrcRecordCheckObjectImages } from './../../store/actions/orcrecordcheck.actions';
import { getCheckDetail, getCheckDetailImages } from './../../store/selectors/orcrecordcheck.selectors';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-image-list-view',
  templateUrl: './check-image-list-view.component.html',
  styleUrls: ['./check-image-list-view.component.css']
})
export class CheckImageListViewComponent implements OnInit, OnDestroy {
    private _checkIns;
    @Output() refresh = new EventEmitter<any>();    
    public ruleDescMode = {};
    public ruleDescData = {}    
    public imageForm = {};
    public alerts: NgAlertInterface[] = [];    
    public checkImages = [];
    public checkModelInstance;
    checkImagesSubscription: Subscription;

    @Input()
      set checkIns(checkIns: OrcCheckModel) {
        this._checkIns = checkIns;
    }
    get checkIns() { return this._checkIns; }    


    constructor(
        public orcRecordService: OrcRecordService,
        private modalService: NgbModal,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.checkModelInstance = new OrcCheckImage()
        this.getCheckImages()
    }

    ngOnDestroy(){
        this.checkImagesSubscription.unsubscribe();
    }

    updateDescription(id){
        this.ruleDescMode[id] = 'edit'
    }

    getCheckImages(){
        this.checkImagesSubscription = this.checkModelInstance.objects.filter({check: this.checkIns.id}).subscribe(
            (data) => {
                this.checkImages = []
                if(data.length > 0){
                    for (let key in data){
                        let img = data[key];
                        this.checkImages.push(img)
                        this.imageForm[img.id] = new FormGroup({
                            image_id: new FormControl(''),
                            decription: new FormControl(''),
                        });
                        this.ruleDescMode[img.id] = 'read';
                        this.imageForm[img.id].controls.decription.setValue(img.description)
                        this.imageForm[img.id].controls.image_id.setValue(img.id)
                    }
                }
            },
            (err) => console.log(err),
        )        
    }    

    saveImgForm(id){
        this.orcRecordService.updateImageDescription(this.imageForm[id].value).subscribe(
            (data) => {
                if(data.status == 'success'){
                    this.alerts.push({type: 'success', message: data.msg});
                    this.getCheckImages()
                    setTimeout(
                        (data) => {
                            this.ruleDescMode[id] = 'read'
                        }
                    )
                }else{
                    this.alerts.push({type: 'danger', message: data.msg});
                }
            }
        )        
    }    

    deleteImgForm(id){
        const modalRef = this.modalService.open(BootstrapConfirmComponent)
        modalRef.componentInstance.data = {message: 'Are you sure?', type: 'info'}
        modalRef.result.then(
                (result) => {
                    this.orcRecordService.deleteImage({image_id: id}).subscribe(
                        (data) => {
                            if(data.status == 'success'){
                                this.alerts.push({type: 'success', message: data.msg});
                                this.getCheckImages()
                                setTimeout(
                                    (data) => {
                                        this.ruleDescMode[id] = 'read'
                                    }, 800
                                )
                            }else{
                                this.alerts.push({type: 'danger', message: data.msg});
                            }
                        }
                    )
                }, (reason) => {
                    console.log('Reason', reason);
                }
            )        
    }        

    addImage(){
        const modalRef = this.modalService.open(CheckUploadImageComponent)
        modalRef.componentInstance.selectedData = [this.checkIns]
        modalRef.result.then(
                (result) => {
                    this.getCheckImages()
                }, (reason) => {
                    console.log('Reason', reason);
                }
            )          

    }

}
