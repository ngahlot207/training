import { LightningElement, api } from 'lwc';
// imported to show toast messages
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import postChatter from '@salesforce/apex/PostChatterLWCController.postChatter';

export default class FileUploadLWCdemo extends LightningElement {
    @api recordId;
    // accepted parameters
    
    get acceptedFormats() {
        return ['.pdf', '.png','.jpg','.jpeg','.mkv'];
    }
    cdIdArrays =[];
    handleUploadFinished(event) {
        let strFileNames = '';
        
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;

        for(let i = 0; i < uploadedFiles.length; i++) {
            strFileNames += uploadedFiles[i].name + ', ';
            this.cdIdArrays[i] = uploadedFiles[i].documentId;
        }
        //console.log('cd>>'+cdIdArrays[0]+' '+cdIdArrays[1]);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success!!',
                message: strFileNames + ' Files uploaded Successfully!!!',
                variant: 'success',
            }),
        );;
        const checkbox = this.template.querySelectorAll('[data-id="checkbox"]');
        if(checkbox[0].checked){
            this.doPostChatter();
        }     
    }

    doPostChatter(){
        postChatter({parentRecordId : this.recordId ,contendDocIdList: this.cdIdArrays}).then((con) =>{
            this.results = con;
            console.log('datatable>>'+this.results);
        }).catch((error) =>{
            this.showToast('ERROR', error.body.message, 'error');
        })
    }
}