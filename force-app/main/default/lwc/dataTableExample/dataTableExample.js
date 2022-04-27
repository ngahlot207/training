import { LightningElement, track, wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getAllContacts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'Name', fieldName: 'Name', type:'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Account', fieldName: 'Account.Name',type:'text' }
];


export default class DataTableExample extends LightningElement {
    @track results;
    @track columns = columns;
    @track pageSize =[{label:'20',value:'20'},{label:'40',value:'40'}];

    @wire(getAllContacts, {numberOfRowsToReturn : 20,numberOfRowsToSkip: 20})
    result({data,error}){
        if(data){
            this.results = data;
        }else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    };

    pageSizeChangeHandler(event){
        const pageSize = event.target.value;
        //console.log('>>target'+event.target.value);
        //console.log('>>detail'+event.detail.value);
        const pageSizeChangeEvent = new CustomEvent('pagesizeselect',{detail:pageSize, bubbles : true});
        this.dispatchEvent(pageSizeChangeEvent);
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