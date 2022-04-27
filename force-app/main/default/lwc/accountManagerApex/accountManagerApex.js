import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';

export default class AccountManagerApex extends LightningElement {

    @wire(getAllAccounts)
    accounts;

    get responseReceived(){
        
        if(this.accounts){
            console.log('>>>>');
            return true;
        }
        console.log('<<<<');
        return false;
    }

}