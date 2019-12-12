import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { OrcRecordService } from './../../../../services/';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { DomSanitizer } from "@angular/platform-browser";
import { SafeUrl } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Component({
    selector: 'app-check-upload-image',
    templateUrl: './check-upload-image.component.html',
    styleUrls: ['./check-upload-image.component.css'],
    host: {
        "(window:paste)": "handlePaste( $event )"
    },  
})

export class CheckUploadImageComponent implements OnInit {
    @Input() selectedData;
    public uploadImageForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Upload Image";
    public files: any[];
	public imageUrls: SafeUrl[];
    private lastObjectUrl: string;    
    private sanitizer: DomSanitizer;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        sanitizer: DomSanitizer,
        public orcRecordService: OrcRecordService,
        private http: HttpClient
    ) {
      this.files = [];
      this.sanitizer = sanitizer;
      this.imageUrls = [];
      this.lastObjectUrl = "";      
    }

    ngOnInit() {
        this.uploadImageForm = new FormGroup({
            image: new FormControl('', Validators.required),
        });
    }

    onSubmit() {
        const formData = new FormData();
        const selectedIds = this.selectedData.map( check => check.id )
        for (const file of this.files) {
            formData.append('checks', selectedIds);
            formData.append('check_image', file);
            formData.append('description', '...');
        }

        this.orcRecordService.addCheckImages(formData).subscribe(
            (data) => {
                debugger;
                if(data.status == 'success'){
                    this.alerts.push({type: 'success', message: data.msg});
                    setTimeout(
                        (data) => {
                            this.activeModal.close(data)
                        }, 2000
                    )
                }else{
                    this.alerts.push({type: 'danger', message: data.msg});
                }
            }
        )        
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }


    updateImageUrls(){
        this.imageUrls = [];
        for (let key in this.files){
            let file = this.files[key];
            this.lastObjectUrl = URL.createObjectURL(file);
            this.imageUrls.unshift(
                this.sanitizer.bypassSecurityTrustUrl( this.lastObjectUrl )
            );        
        }
    }

    onFileChanged(event: any) {
        Array.from(event.target.files).forEach(file => { 
            this.files.unshift(
                file
            )              
        });
        this.updateImageUrls()
    }

    public handlePaste( event: ClipboardEvent ) : void {    

		var pastedImage = this.getPastedImage( event );
		if ( ! pastedImage ) {
			return;
		}

		if ( this.lastObjectUrl ) {
			URL.revokeObjectURL( this.lastObjectUrl );
		}

		this.lastObjectUrl = URL.createObjectURL( pastedImage );
		this.imageUrls.unshift(
			this.sanitizer.bypassSecurityTrustUrl( this.lastObjectUrl )
        );
        debugger;
        this.files.unshift(
            pastedImage
        )

    }

	private getPastedImage( event: ClipboardEvent ) : File | null {
		if (
			event.clipboardData && 
			event.clipboardData.files && 
			event.clipboardData.files.length &&
			this.isImageFile( event.clipboardData.files[ 0 ] )
			) {
			return( event.clipboardData.files[ 0 ] );
		}
		return( null );
	}    

	private isImageFile( file: File ) : boolean {
		return( file.type.search( /^image\//i ) === 0 );
	}    

}


