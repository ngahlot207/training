import { LightningElement, api, track , wire} from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultControllerAura.getCars';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CarSearchResultAura extends LightningElement {

    @api carTypeId;
    @track cars;
    @track carSelectedId;

    @wire(getCars, {carTypeId: '$carTypeId' })
    wiredCars({data, error}){
        console.log('carTypeId:' + '$carTypeId');
        console.log('data>>'+data);
        if(data){
            console.log('data>>'+data);
            this.cars= data;
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }

    showToast(title, message, variant){
        const evt= new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    get carsFound(){
        console.log('num of cars'+this.cars);
        if(this.cars){
            return true;
        }
        return false;
    }

    carSelectHandler(event){
        const carId = event.detail;
        this.carSelectedId = carId;
    }
}