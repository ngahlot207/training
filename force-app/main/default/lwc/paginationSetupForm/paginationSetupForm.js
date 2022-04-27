import { LightningElement, api, wire } from 'lwc';
import getContactsCount from '@salesforce/apex/ContactManager.getContactsCount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class PaginationSetupForm extends LightningElement {

    @api pageSize;
    @api rowsToSkip;
    count;
    @wire(getContactsCount) 
    result({data,error}){
        if(data){
            this.count = data;
        }else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    };

    get firstPage(){
        console.log('In firstPage: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        if(!this.rowsToSkip){
            return false;
        }
        return true;
    }
    get lastPage(){
        console.log('In LastPage: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        console.log('In LastPage: paginationSetup: this.pageSize>>'+this.pageSize);
        console.log('In LastPage: paginationSetup: this.count>>'+this.count);
        if(this.rowsToSkip && this.count <= ( parseInt(this.rowsToSkip) + parseInt(this.pageSize)) ){
            return false;
        }
        return true;
    }

    goToPrev(){
        console.log('In Prev: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        if(!this.rowsToSkip){
            this.rowsToSkip = '0';
        }
        if(!this.pageSize){
            this.pageSize = '10';
        }
        console.log('In Prev: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        console.log('In Prev: paginationSetup: this.pageSize>>'+this.pageSize);
        const rowsToSkip = parseInt(this.rowsToSkip) - parseInt(this.pageSize);
        console.log('In Prev: paginationSetup: rowsToSkip>>'+rowsToSkip);
        const setRowsToSkip =  new CustomEvent('setrowstoskip',{detail:rowsToSkip, bubbles: true});
        this.dispatchEvent(setRowsToSkip);
    }

    goToNext(){
        console.log('In Next: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        if(!this.rowsToSkip){
            this.rowsToSkip = '0';
        }
        if(!this.pageSize){
            this.pageSize = '10';
        }
        console.log('In Next: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        console.log('In Next: paginationSetup: this.pageSize>>'+this.pageSize);
        const rowsToSkip = parseInt(this.rowsToSkip) + parseInt(this.pageSize);
        console.log('In Next: paginationSetup: rowsToSkip>>'+rowsToSkip);
        const setRowsToSkip =  new CustomEvent('setrowstoskip',{detail:rowsToSkip, bubbles: true});
        this.dispatchEvent(setRowsToSkip);
    }

    goToFirst(){
        if(!this.pageSize){
            this.pageSize = '10';
        }
        //console.log('In Next: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        console.log('In Next: paginationSetup: this.pageSize>>'+this.pageSize);
        const rowsToSkip = 0;
        console.log('In Next: paginationSetup: rowsToSkip>>'+rowsToSkip);
        const setRowsToSkip =  new CustomEvent('setrowstoskip',{detail:rowsToSkip, bubbles: true});
        this.dispatchEvent(setRowsToSkip);
    }

    goToEnd(){
        console.log('In End: paginationSetup: this.count>>'+this.count);
        if(!this.pageSize){
            this.pageSize = '10';
        }
        //console.log('In End: paginationSetup: this.rowsToSkip>>'+this.rowsToSkip);
        console.log('In End: paginationSetup: this.pageSize>>'+this.pageSize);
        const rowsToSkip = this.count - parseInt(this.pageSize);
        console.log('In End: paginationSetup: rowsToSkip>>'+rowsToSkip);
        const setRowsToSkip =  new CustomEvent('setrowstoskip',{detail:rowsToSkip, bubbles: true});
        this.dispatchEvent(setRowsToSkip);
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