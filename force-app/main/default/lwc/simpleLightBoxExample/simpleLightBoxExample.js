import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import {loadStyle, loadScript} from 'lightning/platformResourceLoader';

export default class SimpleLightBoxExample extends LightningElement {

    slLoaded= false;    
    renderedCallback(){
        console.log('callback');
        //if(!this.slLoaded){
            console.log('Yes');
            Promise.all([
                loadStyle(this, SL+'/dist/simpleLightbox.css'),
                loadScript(this, SL+'/dist/simpleLightbox.js')
            ]).then(()=>{
               // slLoaded= true;
            }).catch((error)=>{
                console.error('could not initialize-', error);
            });
       // }
        
    }
    openGallery(){
        console.log('Yes in open gallery');
        SimpleLightbox.open({
            items : ['/resource/cars/luxury/mercedes_benz_gls.jpg','/resource/cars/van/maruti_suzuki_eeco.jpg']
        });
    }
}