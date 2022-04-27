public with sharing class BoatTypeSearch {
	@AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        return [Select id, name FROM BoatType__c];
    }
}