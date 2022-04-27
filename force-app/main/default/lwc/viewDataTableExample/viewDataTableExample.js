import { LightningElement, track, wire } from 'lwc';
//import getWrapperLis from '@salesforce/apex/SuperWrapperClass.getWrapperList';
import getAllContacts from '@salesforce/apex/ContactManager.getAllContacts';

const columns = [
    { label: 'Name', fieldName: 'Name', type:'text' },
];

export default class ViewDataTableExample extends LightningElement {

    @track columns = columns;

    //@wire(getWrapperLis,{lead:'00QN0000009cAP1MAM'}) wrappers;
    @wire(getAllContacts, {numberOfRowsToReturn : 20,numberOfRowsToSkip: 20}) wrappers;


}