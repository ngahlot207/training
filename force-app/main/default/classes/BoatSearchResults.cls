public class BoatSearchResults {
@auraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        //return [SELECT id, Name, Picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c=:boatTypeId];
        if(boatTypeId.equalsIgnoreCase(''))
        	return[SELECT id, Name, Picture__c, Contact__r.Name FROM Boat__c];
        else
            return[SELECT id, Name, Picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c=:boatTypeId];

    }
}