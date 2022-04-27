import { LightningElement, track, api } from 'lwc';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';

export default class CustomUtilityBar extends LightningElement {
    lead= [];
    @track leadName;
    @track leadStatus;
    channel = '/topic/LeadNotifications';
    @api
    connectedCallback(){
        let myComponent = this; // strange that sometimes 'this' behaves weirdly in connectedcallback.
        const messageCallback =function(response){
            myComponent.lead = response.data.sobject;
            myComponent.leadName= myComponent.lead.Name;
            myComponent.leadStatus = myComponent.lead.Status;
            console.log('myComponent.leadStatus>>'+myComponent.leadStatus);
            console.log('myComponent.leadName>>'+myComponent.leadName);
            const dispatchLeads = new CustomEvent('openutilitybar');
            console.log('dispatchLeads'+dispatchLeads);
            myComponent.dispatchEvent(dispatchLeads);
        };

        subscribe(this.channel,-1,messageCallback).then(response =>{
            
            console.log('Subscribed to channel ', response.channel);
        });

        
    }
}