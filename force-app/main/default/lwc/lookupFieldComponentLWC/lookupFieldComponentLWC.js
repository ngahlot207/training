import { LightningElement, api, track } from 'lwc';
import getAllRecords from '@salesforce/apex/ObjectManager.getRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LookupFieldComponentLWC extends LightningElement {

    @track searchKey;
    @track allRecords = [];
    @track recordId;
    @track selectedValue;
    @api objectName = 'Account'; //to reuse for other object change the object here
    @api iconName = 'standard:account'; //use the respective object icon
    @api searchField= 'Name'; // use the field for search

    inputTextHandler(event){
        this.searchKey= event.detail.value;
        console.log('searchKey>>'+this.searchKey);
        if(this.searchKey){
            this.getRecords();
        }
    }

    getRecords(){
        getAllRecords({searchKey : this.searchKey, objectName : this.objectName, searchField : this.searchField}).then((allRecords) =>{
            this.allRecords = allRecords;
            console.log('allRecords>>>'+this.allRecords[0]);
            for(let i=0;i<this.allRecords.length;i++){
                const rec = this.allRecords[i];
                this.allRecords[i].Name= rec[this.searchField];
            }
        }).catch((error)=>{
            this.showToast('ERROR',error.body.message, 'error');
        })
    }

    handleSelect(event){
        this.recordId = event.detail; //selected recordId
        this.selectedValue = this.allRecords.find(record=> record.Id === this.recordId); //selected record
        console.log('this.recordId>>>'+this.recordId);
        
    }

    handleRemove(){
        this.selectedValue = undefined;
        this.allRecords = undefined;
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}