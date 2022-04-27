import { LightningElement, track, api } from 'lwc';

export default class WebEditorHomeLWC extends LightningElement {
    @api componentsize;
    @api lwcrecordlist;
    @track compSize;
    @track lwcRecords;
    @track selectedRecord;
    @track newCompName;
    lowerCaseCompName;


    connectedCallback(){
        console.log('homeLWC>>');
        this.doInit();
    }
    @api
    doInit(){
        const initEvent= new CustomEvent('initevent');
        this.dispatchEvent(initEvent);
    }

    @api
    doCallback(){
        console.log('this.componentsize>>'+ this.componentsize);
        this.compSize = this.componentsize;
        this.lwcRecords = [];
        if(this.lwcrecordlist){
            this.lwcrecordlist.forEach(element=>{
                const lwcRecord={};
                lwcRecord.label= element.DeveloperName;
                lwcRecord.value= element.Id;
                this.lwcRecords.push(lwcRecord);
            });
        }
    }

    handleLwcRecordChange(event) {
        this.selectedRecord = event.detail.value;
        console.log('this.selectedRecord>>'+this.selectedRecord);
        this.viewCodeClick();
    }

    @api
    viewCodeClick(){
        if(this.selectedRecord){
            console.log('this.selectedRecord>>viewCodeClick'+this.selectedRecord);
            const selectedLWCRecordEvent = new CustomEvent('selectedlwcrecord',{ detail : {value: this.selectedRecord}, bubbles : true });
            this.dispatchEvent(selectedLWCRecordEvent);
        }
    }

    handleCompNameChange(event){
        this.newCompName= event.detail.value;
        console.log('this.newCompName>>'+this.newCompName);
    }

    createCompClick(){
        if(this.newCompName){
            console.log('this.newCompName>>'+this.newCompName);
            this.lowerCaseCompName= this.newCompName.charAt(0).toLowerCase() + this.newCompName.slice(1);
            const newCompNameEvent= new CustomEvent('compnamechange',{detail : {value: this.lowerCaseCompName}, bubbles : true});
            this.dispatchEvent(newCompNameEvent);
        }
    }
}