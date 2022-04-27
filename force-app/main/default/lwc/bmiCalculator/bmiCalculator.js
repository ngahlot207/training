import { LightningElement, track } from 'lwc';
import {getBMI} from 'c/bmi'
export default class BmiCalculator extends LightningElement {
    bmiCalculator= 'BMI Calculator';
    height;
    weight;
    @track bmi;
    onWeightChange(event){
        this.weight= parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.height= parseFloat(event.target.value);
    }
    getBMIValue(){
        //this.bmiCalculator= 'Change Value';
        //console.log('value:',this.bmiCalculator);
        //this.bmi= this.weight/(this.height*this.height);
        this.bmi= getBMI(this.weight, this.height);
    }
    get bmiValue(){
        return `your bmi is ${this.bmi}`;
    }
}