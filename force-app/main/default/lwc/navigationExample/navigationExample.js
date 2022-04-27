import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {
    openFB(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://facebook.com'
            }
        });
    }
    openAccountPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }
    createNewContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
    openOppListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }
    openCaseRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                recordId: '5000p000002XynXAAS',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }
    openMeetingRoom(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
               api: 'Navigation'
            }
        });
    }

    @api tabName = "helloWorld";
    navigateNext() {
        console.log("tabName = ", this.tabName)
        this[NavigationMixin.Navigate]
            ({
                type: 'standard__component',
                attributes: {
                    url: 'https://gaurnawab-lightning-dev-ed.lightning.force.com/cmp/'+this.tabName
                }
            });
    }
}