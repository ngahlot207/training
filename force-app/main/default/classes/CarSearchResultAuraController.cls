public with sharing class CarSearchResultAuraController {
    
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getCars(String carTypeId){
        System.debug('carTypeId >>');
        if(String.isEmpty(carTypeId)){
            System.debug([SELECT Id, Name, Picture__c,Contact__r.Name,
                    Geolocation__latitude__s,Geolocation__longitude__s 
                    FROM Car__c 
                    WHERE Available_For_Rent__c= true]);
            return [SELECT Id, Name, Picture__c,Contact__r.Name,
                    Geolocation__latitude__s,Geolocation__longitude__s 
                    FROM Car__c 
                    WHERE Available_For_Rent__c= true];
        }
        else{
            System.debug([SELECT Id, Name, Picture__c,Contact__r.Name,
                    Geolocation__latitude__s,Geolocation__longitude__s 
                    FROM Car__c 
                    WHERE Available_For_Rent__c= true 
                    AND Car_Type__c =: carTypeId]);
            return [SELECT Id, Name, Picture__c,Contact__r.Name,
                    Geolocation__latitude__s,Geolocation__longitude__s 
                    FROM Car__c 
                    WHERE Available_For_Rent__c= true 
                    AND Car_Type__c =: carTypeId];
        }
    }

}