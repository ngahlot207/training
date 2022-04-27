import { LightningElement, track } from 'lwc';

export default class EBikesApp extends LightningElement {
    name= 'Electra X4';
    description= 'Bikes mojo';
    category= 'Mountain';
    material= 'Steel';
    price= '$2,400';
    pictureUrl= 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'

    @track
    ready =false;
    connectedCallback(){
        if(!this.ready){
            this.ready = true;
        }
        
    }
}