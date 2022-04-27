import { LightningElement, api, track } from 'lwc';
import getContactRecords from '@salesforce/apex/GetContactRecords.getContactRecords';

export default class ContactRelatedListComp extends LightningElement {
    @api recordId;
    @track contactList;
    @track isContacts;
    connectedCallback(){
        //console.log('URL>>>'+window.location.origin);
        getContactRecords({accountId: this.recordId}).
        then(data=>{
            data = JSON.parse(data);
            let size=0;
            if(data){
                
                this.contactList=[];
                data.forEach(element => {
                    const cont={};
                    cont.Name= element.Name;
                    cont.AccountName= element.Account.Name;
                    cont.AccountId= window.location.origin+'/'+element.AccountId;
                    cont.ContactId= window.location.origin+'/'+element.Id;
                    cont.Phone= element.Phone;
                    this.contactList.push(cont);
                });
            }
            size= this.contactList.length;
            if(size>0){
                this.isContacts= true;
            }else{
                this.isContacts= false;
            }
        });
    }
}