import { LightningElement,api,wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class FurnitureDemo extends LightningElement {
    @api furnitureinfo; 

    @wire(CurrentPageReference) pageReference;

    tileClickHandler(){

        fireEvent(this.pageReference, 'selectedtile', this.furnitureinfo);
    }
}