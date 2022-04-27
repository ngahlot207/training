import { LightningElement,api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class CarTileAura extends LightningElement {
    @api car;
    @api carSelectedId; 

    @wire(CurrentPageReference) pageRef;

    handleCarSelect(event){
        event.preventDefault();
        const carId= this.car.Id;
        console.log('carId'+carId);
        const carSelect =new CustomEvent('carselect',{detail:carId});
        this.dispatchEvent(carSelect);
        console.log('event dispatched');
        fireEvent(this.pageRef, 'carselect', this.car);
    }

    get isCarSelected(){
        if(this.car.Id === this.carSelectedId){
            return "tile selected";
        }
        return "tile";
    }
}