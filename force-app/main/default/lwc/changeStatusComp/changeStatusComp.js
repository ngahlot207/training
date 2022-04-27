import { LightningElement } from 'lwc';

export default class ChangeStatusComp extends LightningElement {
    getSelectedHandler(){
        var el = this.template.querySelector('lightning-datatable');
        this.selected = el.getSelectedRows();
        console.log('this.selected>>'+this.selected);
        this.disableStatus(this.selected);
    }

    disableStatus(selected){
        for(var i=0;i<selected.length; i++){
            console.log('get All selected >>'+selected[i].Id);
        }
        getSelectedRecords({conList: selected});
    }
}