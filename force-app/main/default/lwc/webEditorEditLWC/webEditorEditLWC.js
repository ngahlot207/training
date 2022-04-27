import { LightningElement, track, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import CSS_FILE from '@salesforce/resourceUrl/customStylingCSS';

export default class WebEditorEditLWC extends LightningElement {
    @track lwcCode;
    @api selectedlwcrecord;
    @track lwcRecords;
    @track selectedTabValue;
    @track isSaved;
    @api lwcbundlerecordid;
    @track fileElementList;
    @track lwcCompName;
    @api
    doCallback(){
        console.log('this.selectedlwcrecord'+this.selectedlwcrecord);
        this.lwcCode= this.selectedlwcrecord;
        this.lwcRecords= [];
        this.lwcCode.forEach(element=>{
            const lwcRecord={};
            lwcRecord.id= element.Id;
            lwcRecord.filePath= element.FilePath;
            lwcRecord.fileName= element.FilePath.substring((element.FilePath.lastIndexOf('/')+1),(element.FilePath.length+1));
            lwcRecord.format= element.Format;
            lwcRecord.source= element.Source;
            lwcRecord.isSaved= true;
            lwcRecord.confirmModal= false;
            this.lwcRecords.push(lwcRecord);
            //console.log('element.filePath>>'+element.filePath);
            //console.log('element.source.asByteArray>>'+element.source.asByteArray);
        });
        var n = this.lwcRecords[0].filePath.indexOf("/");
        //console.log('n>>'+n);
        var n1 = this.lwcRecords[0].filePath.lastIndexOf("/");
        //console.log('n1>>'+n1);
        this.lwcCompName = this.lwcRecords[0].filePath.substring(n+1, n1);
        //console.log('this.selectedTabValue1>>'+this.lwcRecords[0].id);
        //this.selectedTabValue = this.lwcRecords[0].id;

        //this.template.querySelector('lightning-tabset').activeTabValue = this.lwcRecords[0].id;

    }

    tabChangeHandler(event){
       this.selectedTabValue = event.target.value;
       // console.log('this.selectedTabValue2>>'+event.target.value);
        //console.log('Inside>>');
        //this.template.querySelector('lightning-tabset').activeTabValue= this.lwcRecords[0].id;
    }

    editCompClick(event){
        //console.log('currentRecordId>>'+event.target.name);
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
            if(element.id == event.target.name){
                element.isSaved= false;
            }
        });
    }
    
    saveCompClick(event){
        //console.log('currentRecordId>>'+event.target.name);
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
            if(element.id == event.target.name){
                element.isSaved= true;
                const saveCompEvent = new CustomEvent('savecompevent',{detail : {value : element}, bubbles : true});
                this.dispatchEvent(saveCompEvent);
            }
        });
    }

    saveAllCompClick(){
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
                element.isSaved= true;
                const saveCompEvent = new CustomEvent('savecompevent',{detail : {value : element}, bubbles : true});
                this.dispatchEvent(saveCompEvent);
        });
    }

    cancelCompClick(event){
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
            if(element.id == event.target.name){
                element.isSaved= true;
                /*const saveCompEvent = new CustomEvent('savecompevent',{detail : {value : element}, bubbles : true});
                this.dispatchEvent(saveCompEvent);*/
            }
        });
    }

    cancelAllCompClick(){
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
                element.isSaved= true;
                //const saveCompEvent = new CustomEvent('savecompevent',{detail : {value : element}, bubbles : true});
                //this.dispatchEvent(saveCompEvent);
        });
    }

    addNewFileClick(){
        var readyToCreate = true;
        //console.log('this.lwcRecords[0].filePath>>'+this.lwcRecords[0].filePath);
        var n = this.lwcRecords[0].filePath.indexOf("/");
        //console.log('n>>'+n);
        var n1 = this.lwcRecords[0].filePath.lastIndexOf("/");
        //console.log('n1>>'+n1);
        this.lwcCompName = this.lwcRecords[0].filePath.substring(n+1, n1);
        //console.log('this.lwcCompName>>'+this.lwcCompName);
        this.lwcRecords.forEach(element=>{
            if(element.isSaved == false){
                readyToCreate= false;
            }
        });
        if(readyToCreate){
            this.fileElementList = [];
            const fileElement = {};
            fileElement.lightningComponentBundleId = this.lwcbundlerecordid;
            fileElement.openModal = true;
            fileElement.lwcCompName = this.lwcCompName;
            this.fileElementList.push(fileElement);
            console.log('in web editor edit page');
            const addFileEvent = new CustomEvent('addfileevent',{detail : {value : this.fileElementList}, bubbles : true});
            this.dispatchEvent(addFileEvent);

        } else{
            alert("Please save all the open files before creating a new file.");
        }
    }

    deleteFileCompClick(event){
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
            if(element.id == event.target.name){
                element.isSaved= true;
                element.confirmModal= true;
                const deleteFileCompEvent = new CustomEvent('deletefilecompevent',{detail : {value : element}, bubbles : true});
                this.dispatchEvent(deleteFileCompEvent);
            }
        });
    }

    deleteCompClick(){
        console.log('this.lwcbundlerecordid>>'+this.lwcbundlerecordid);
        const deleteCompEvent = new CustomEvent('deletecompevent',{detail : {value : this.lwcbundlerecordid}, bubbles : true});
        this.dispatchEvent(deleteCompEvent);
    }

    previewClick(){
        console.log('this.lwcbundlerecordid>>'+this.lwcCompName);
        const previewCompEvent = new CustomEvent('previewcompevent',{detail : {value : this.lwcCompName}, bubbles : true});
        this.dispatchEvent(previewCompEvent);
    }

    codeChangeHandler(event){
        //console.log('source>>'+event.detail.value);
        this.lwcRecords.forEach(element=>{
            //console.log('element.Id>>'+element.id);
            if(element.id == event.target.name){
                element.source= event.detail.value;
            }
        });
    }

    connectedCallback() {
        loadStyle(this, CSS_FILE)
        .then(() => {});
    }

    
}