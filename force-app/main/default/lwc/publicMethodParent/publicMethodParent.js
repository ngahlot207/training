import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;

    checkboxSelectHandler(){
        const childComponent = this.template.querySelector('c-public-method-child');
        console.log('this.value>>'+this.value);
        const returnMessage= childComponent.selectCheckbox(this.value);
        console.log('return maessage '+ returnMessage);
    }
    onInputChangeHandler(event){
        this.value= event.target.value;
    }
}