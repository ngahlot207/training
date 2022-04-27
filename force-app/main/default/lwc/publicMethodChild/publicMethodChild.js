import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['Red'];

    options = [
        { label: 'Red Marker', value: 'Red' },
        { label: 'Blue Marker', value: 'Blue' },
        { label: 'Green Marker', value: 'Green' },
        { label: 'Black Marker', value: 'Black' },
        { label: 'Yellow Marker', value: 'Yellow' },
    ];

    @api selectCheckbox(checkboxValue){
        const selectedCheckbox= this.options.find(element=>{return element.value === checkboxValue;})
        console.log('selectedCheckbox>>>'+selectedCheckbox);
        if(selectedCheckbox){
            console.log('selectedCheckbox.value>>>'+selectedCheckbox.value);
            this.value = selectedCheckbox.value;
            return "Successfully checked";
        }
        return "No checkbox found";
    }
}