import { LightningElement, track, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/CarSearchFormAuraController.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CarSearchFormAura extends NavigationMixin(LightningElement) {
    @track carTypes;
    @track carTypeId;
    @wire(getCarTypes)
    wiredCarType({data, error}){
        if(data){
            this.carTypes = [{value:'',label:'All Types'}]
            data.forEach(element=>{
                const carType={};
                carType.label= element.Name;
                carType.value= element.Id;
                this.carTypes.push(carType);
            });
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
    handleCarTypeChange(event){
        this.carTypeId = event.detail.value;
        console.log('carTypeId>>>'+this.carTypeId);
        const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect',{detail : this.carTypeId, bubbles : true});
        this.dispatchEvent(carTypeSelectionChangeEvent);
    }
    createNewCarType(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Car_Type__c',
                actionName: 'new'
            }
        })
    }
    showToast(title, message, variant){
        const evt= new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}