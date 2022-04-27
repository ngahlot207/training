public with sharing class CarTypeSearch {
	@AuraEnabled
    public static List<Car_Type__c> getCarTypes(){
        return [SELECT id,name FROM Car_Type__c];
    }
}