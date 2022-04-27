import { LightningElement, api } from 'lwc';

export default class LookupResultComponentLWC extends LightningElement {

    @api record;
    @api iconName;

    handleSelect(event){
        event.preventDefault();
        const selectedRow = new CustomEvent('select',{detail : this.record.Id});
        this.dispatchEvent(selectedRow);
    }
}