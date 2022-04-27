import { LightningElement, track, api } from 'lwc';

export default class WebEditorModalPopupLWC extends LightningElement {
    @api openmodallist;
    @track openmodel;
    @track newFileName='';
    @track formatTypes;
    @track selectedFormat;

    @api
    doCallback(){
        this.formatTypes = [{value: 'css', label: 'css'},{value: 'js', label: 'js'},{value: 'html', label: 'html'},{value: 'js-meta.xml', label: 'xml'}/*,{value: 'json', label: 'json'},{value: 'svg', label: 'svg'}*/];
        console.log('this.openmodallist.openModal>>'+this.openmodallist[0].openModal);
        this.openmodel = this.openmodallist[0].openModal;
    }

    handleFileNameChange(event){
        this.newFileName = event.detail.value;
    }
    
    handleFormatTypeChange(event){
        this.selectedFormat = event.detail.value;
    }

    openmodal() {
        this.openmodel = true
    }

    closeModal() {
        this.openmodel = false
    } 

    saveMethod() {
        //alert('save method invoked');
        const fileElement= {};
        //fileElement.fileName = this.newFileName;
        fileElement.lightningComponentBundleId = this.openmodallist[0].lightningComponentBundleId;
        console.log('fileElement.lightningComponentBundleId>>'+this.openmodallist[0].lightningComponentBundleId);
        console.log('this.openmodallist[0].lwcCompName>>'+this.openmodallist[0].lwcCompName);
        //var n = this.newFileName.indexOf(".");
        //var folderName = this.newFileName.substring(0, n);
        fileElement.filePath = 'lwc/'+this.openmodallist[0].lwcCompName+'/'+this.newFileName+'.'+this.selectedFormat;
        console.log('fileElement.filePath>>'+fileElement.filePath);
        //var ind = this.newFileName.length;
        //var format = this.newFileName.substring(n+1,ind);
        fileElement.format= this.selectedFormat;
        console.log('fileElement.format>>'+this.selectedFormat);
        const saveFilePopupEvent = new CustomEvent('savefilepopupevent',{detail: {value: fileElement}, bubbles :true });
        this.dispatchEvent(saveFilePopupEvent);
        this.closeModal();
    }
}