import { LightningElement } from 'lwc';

export default class DataTablePrjLWC extends LightningElement {
    config = {
        objectName: "Contact",
        tableConfig: {
            columns: [
                { api: 'Name', label: 'Name', fieldName: 'Name', sortable: true },
                { api: 'CreatedDate', label: 'Created On', fieldName: 'CreatedDate', type: 'date', sortable: true },
                { api: 'CreatedBy.Name', label: 'Created By', fieldName: 'CreatedByName', sortable: true }
            ]
        }
    };
}