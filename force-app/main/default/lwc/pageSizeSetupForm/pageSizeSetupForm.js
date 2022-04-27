import { LightningElement, track, api } from 'lwc';

export default class PageSizeSetupForm extends LightningElement {
    @track pageSize =[{label:'100',value:'100'},{label:'500',value:'500'}];
    @api rowsToSkip;
    pageSizeChangeHandler(event){
        const pageSize = event.target.value;
        console.log('pageSizeSetupForm: pageSize >> '+pageSize);
        console.log('pageSizeSetupForm: this.rowsToSkip >> '+this.rowsToSkip);
        if(this.rowsToSkip){
            console.log('In1 pageSizeSetupForm: pageSize >> '+pageSize);
            console.log('In1 pageSizeSetupForm: this.rowsToSkip >> '+this.rowsToSkip);
            var pageSizeSetup = { size : pageSize, rowsToSkip : this.rowsToSkip };
            const pageSizeChangeEvent = new CustomEvent('pagesizeselect',{detail : pageSizeSetup , bubbles : true});
            this.dispatchEvent(pageSizeChangeEvent);
        } else{
            console.log('In2 pageSizeSetupForm: pageSize >> '+pageSize);
            console.log('In2 pageSizeSetupForm: this.rowsToSkip >> '+this.rowsToSkip);
            var pageSizeSetup = { size : pageSize, rowsToSkip : 0 };
            const pageSizeChangeEvent = new CustomEvent('pagesizeselect',{detail : pageSizeSetup , bubbles : true});
            this.dispatchEvent(pageSizeChangeEvent);
        }  
    }
}