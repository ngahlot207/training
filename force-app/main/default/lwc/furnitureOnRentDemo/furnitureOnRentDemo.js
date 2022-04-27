import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';

export default class FurnitureOnRentDemo extends LightningElement {
    furnitureinfo=[
        {name:'Crystal chairs',type:'chair'},
        {name:'Poly tables',type:'table'},
        {name:'Wooden furnitures',type:'sofa'},
        {name:'Iron furnitures',type:'bed'}
    ];
}