import {
    LightningElement,
    api,
    wire,
    track
} from 'lwc';
import {
    getRecord,
    createRecord
} from "lightning/uiRecordApi";
import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';
const fieldArray = ['Account.Id', 'Account.Name', 'Account.Appointment_Set__c'];
export default class NewContactCreateForm extends LightningElement {
    @api recordId;
    @track accountId;
    @track contactFirstName;
    @track contactLastName;
    @track accountName;
    @track appointmentSet;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: fieldArray
    })
    result({
        data,
        error
    }) {
        if (data) {
            console.log('data.Name:' + data.fields.Name.value);
            console.log('data.Appointment_Set__c' + data.fields.Appointment_Set__c.value);
            this.accountId = data.fields.Id.value;
            this.accountName = data.fields.Name.value;
            const checkbox = this.template.querySelectorAll('[data-id="checkbox"]');
            console.log('checkbox>>' + checkbox);
            if (data.fields.Appointment_Set__c.value) {
                checkbox[0].checked = true;
            }
            this.appointmentSet = data.fields.Appointment_Set__c.value;
        } else if (error) {
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
    createContact(event) {
        event.preventDefault();
        const fields = {
            'FirstName': this.contactFirstName,
            'LastName': this.contactLastName,
            'AccountId': this.accountId,
            'Appointment_Set__c': this.appointmentSet
        };
        const recordInput = {
            apiName: 'Contact',
            fields
        };
        if (window.confirm("Do you really want to save it?")) {
            createRecord(recordInput).then(response => {
                console.log('Contact has been created:', response.id);
                const recordId = response.id;
                this.showToast('SUCCESS', 'Contact is created' + response.id, 'success');
                const closePopupEvent = new CustomEvent('closepopup', {
                    detail: {
                        recordId
                    }
                });
                this.dispatchEvent(closePopupEvent);
            }).catch(error => {
                this.showToast('ERROR', error.body.message, 'error');
                console.log('Error in creating Contact:', error.body.message);
            })
        }
    }
    contactFirstNameChangeHandler(event) {
        this.contactFirstName = event.target.value;
    }

    contactLastNameChangeHandler(event) {
        this.contactLastName = event.target.value;
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}