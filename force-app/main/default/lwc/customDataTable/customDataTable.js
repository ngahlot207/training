import { LightningElement, track } from 'lwc';

export default class CustomDataTable extends LightningElement {
    
    @track pageSize;
    @track rowsToSkip;

    @track firstPage;
    @track lastPage;

    pageSizeHandler(event){
        const pageSize = event.detail.size;
        this.pageSize = pageSize;
        const rowsToSkip = event.detail.rowsToSkip;
        this.rowsToSkip = rowsToSkip;
        console.log('In3 customDataTable: this.pageSize>>'+this.pageSize);
        console.log('In3 customDataTable: this.rowsToSkip>>'+this.rowsToSkip);
    }

    rowsToSkipHandler(event){
        console.log('In rowsToSkipHandler : this.rowsToSkip>>'+this.rowsToSkip);
        const rowsToSkip = event.detail;
        this.rowsToSkip = rowsToSkip;
        console.log('In rowsToSkipHandler : this.rowsToSkip>>'+this.rowsToSkip);
        const dataTableResultsComp = this.template.querySelector('c-data-table-results');
        if(dataTableResultsComp){
            dataTableResultsComp.rowsToSkip = this.rowsToSkip;
            dataTableResultsComp.getContacts();
        }
    }
    selectedRowsHandler(){
        const dataTableResultsComp = this.template.querySelector('c-data-table-results');
        if(dataTableResultsComp){
            console.log('In selectedRowsHandler :this.rowsToSkip>> '+this.rowsToSkip);
            dataTableResultsComp.rowsToSkip = this.rowsToSkip;
            dataTableResultsComp.getContacts();
        }
    }

    get recordFound(){
        if(!this.rowsToSkip){
            console.log('In recordFound: true: this.rowsToSkip >>'+this.rowsToSkip);
            return true;
        }
        console.log('In recordFound: false: this.rowsToSkip >>'+this.rowsToSkip);
        return false;
    }
}