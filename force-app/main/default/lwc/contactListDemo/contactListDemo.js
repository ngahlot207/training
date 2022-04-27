import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/contactAuraService.getContactList';

export default class ContactListDemo extends LightningElement {
    @track searchKey;
    @track contacts;
    @track error;
    @wire(getContactList,{
        name:'$searchKey'
    })
    wiredContact({error, data}){
        if(data){
            this.contacts = data;
        }
        if(error){
            this.error = error;
        }
    }

    handleChange(event){
        this.searchKey= event.target.value;
        console.log('contacts'+ this.contacts);
    }
}