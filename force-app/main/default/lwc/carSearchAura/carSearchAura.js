import { LightningElement, track } from 'lwc';

export default class CarSearchAura extends LightningElement {
    @track carTypeId;

    carTypeSelectHandler(event){
        this.carTypeId= event.detail;
        console.log('cartypeid>>'+this.carTypeId);
    }

}