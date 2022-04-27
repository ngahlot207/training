import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import CSS_FILE from '@salesforce/resourceUrl/customStylingCSS';

export default class CustomStylingComponentLWC extends LightningElement {
    connectedCallback() {
        loadStyle(this, CSS_FILE)
        .then(() => {});
    }
}