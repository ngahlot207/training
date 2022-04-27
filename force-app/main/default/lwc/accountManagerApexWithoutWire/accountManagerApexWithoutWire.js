import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccounts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {

    @track numberOfAccounts;
    @track accounts;

    numberOfAccountsChangeHandler(event){
        console.log('numberOfAccounts'+event.target.value);
        this.numberOfAccounts = event.target.value;
    }
    doShowAccounts(){
        console.log('>>>>');
        getAllAccounts({numberOfAccounts:this.numberOfAccounts}).then(response =>{
            this.accounts= response;
            const toastEvent = new ShowToastEvent({
                title: 'Accounts Loaded',
                message: this.numberOfAccounts + ' Accounts fetched from server',
                variant: 'success',
            });
            this.dispatchEvent(toastEvent);
        }).catch(error =>{
            console.error('Error in getting the accounts',error.body.message);
            const toastEvent = new ShowToastEvent({
                title: 'Error',
                message: error.body.message,
                variant: 'error',
            });
            this.dispatchEvent(toastEvent);
        })
    }
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

}