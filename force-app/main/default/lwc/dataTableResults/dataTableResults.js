import { LightningElement, track, wire, api } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getAllContacts';
import getSelectedRecords from '@salesforce/apex/ContactManager.getSelectedRecords';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'Name', fieldName: 'Name', type:'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Account', fieldName: 'Account.Name',type:'text' },
    { label: 'Status', fieldName: 'Status__c',type:'boolean'}
];

export default class DataTableResults extends LightningElement {
    
    /*@wire(getAllContacts, {numberOfRowsToReturn : '$pageSize' ,numberOfRowsToSkip: '$rowsToSkip'})
    result({data,error}){
        if(data){
            this.results = data;
        }else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    };*/

    privatePageSize;
    privateRowsToSkip;
    firstTimeRun = false;
    selected;
    //@api rowsToSkip;
    @track results;
    @track columns = columns; 

    @api
    get rowsToSkip(){
        return this.privateRowsToSkip;
    }

    set rowsToSkip(value){
        console.log('In setting :value >>'+value);
        if(value){
            this.privateRowsToSkip = value;
        } else{
            this.privateRowsToSkip = '0';
        }
        
        console.log('In setting :this.privateRowsToSkip >>'+this.privateRowsToSkip);
         
    }

    @api 
    get pageSize(){
        return this.privatePageSize;
    }

    set pageSize(value){
        console.log('In setting: this.privatePageSize >>'+this.privatePageSize);
        console.log('In setting: value >>'+value);
        if(value){
            this.privatePageSize = value;
        } else{
            this.privatePageSize = '10';
        }
        console.log('In setting: this.privatePageSize >>'+this.privatePageSize);
        console.log('In setting: this.privatePageSize: checking this.firstTimeRun >>'+this.firstTimeRun);
        if(this.firstTimeRun){
            console.log('In this.getContacts() call>>');
            this.getContacts();
            console.log('Out this.getContacts() call>>');
        }
        
    }

    connectedCallback(){
        console.log('In connected call>>');
        this.firstTimeRun =true;
        console.log('In connected call: this.firstTimeRun >>'+this.firstTimeRun);
        this.getContacts();
        console.log('Out connected call>>');    
    }
    
    @api
    getContacts(){
        console.log('In getContacts() : this.privatePageSize >>'+this.privatePageSize);
        console.log('In getContacts() : this.privateRowsToSkip >>'+this.privateRowsToSkip);
        getAllContacts({numberOfRowsToReturn : parseInt(this.privatePageSize) ,numberOfRowsToSkip: parseInt(this.privateRowsToSkip)}).then((con) =>{
            this.results = con;
            console.log('datatable>>'+this.results);
        }).catch((error) =>{
            this.showToast('ERROR', error.body.message, 'error');
        })
    }

    getSelectedHandler(){
        var el = this.template.querySelector('lightning-datatable');
        this.selected = el.getSelectedRows();
        console.log('this.selected>>'+this.selected);
        this.disableStatus(this.selected);
    }

    disableStatus(selected){
        for(var i=0;i<selected.length; i++){
            console.log('get All selected >>'+selected[i].Id);
        }
        getSelectedRecords({conList: selected});
        const getSelectedEvent = new CustomEvent('selectedrows'); 
        this.dispatchEvent(getSelectedEvent);
    }

    showToast(title, message, variant){
        const evt= new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}