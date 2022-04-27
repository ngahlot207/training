import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import NAME_FIELD from "@salesforce/schema/Contact.name";

export default class ShowingListViewRecords extends LightningElement {
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        ListViewApiName: "Contact_  test_view",
        shortBy: NAME_FIELD,
        paageSize: 20
    })
    ListViewRecords;
    get contacts(){
        return this.ListViewRecords.data.records.records;
    }
}