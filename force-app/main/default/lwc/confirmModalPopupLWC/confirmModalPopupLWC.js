import { LightningElement, track, api } from 'lwc';

export default class ConfirmModalPopupLWC extends LightningElement {

    @track openModal = false;
    @api confirmmodal;
    @api deletetype;
    confirmMethod(){
        const confirmModalEvent= new CustomEvent('confirmmodalevent',{detail: {value : this.deletetype }, bubbles: true});
        this.dispatchEvent(confirmModalEvent);
        this.openModal= false;
    }

    closeModal(){
        this.openModal= false;
    }

    @api
    setModal(){
        this.openModal= this.confirmmodal;
    }
}