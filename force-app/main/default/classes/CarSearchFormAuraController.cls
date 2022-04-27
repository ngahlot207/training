public with sharing class CarSearchFormAuraController {
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getCarTypes(){
        return [SELECT Id, Name FROM Car_Type__c];
    }
    
}