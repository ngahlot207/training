import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv=false;
    @track cityList = ['Bengaluru','Delhi','Mumbai','Chennai','Kolkata'];
    doDisplayDiv(event){
        this.displayDiv= event.target.checked;
    }
}