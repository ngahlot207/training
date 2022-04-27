public class CarSearchController {
    @AuraEnabled
    public static List<Car__c> getCars(String carTypeId){
        if(carTypeId.equalsIgnoreCase('')){
            return [SELECT id, Name, Picture__c, Contact__r.Name, Geolocation__latitude__s, Geolocation__longitude__s FROM Car__c WHERE Available_For_Rent__c= true];
        }
        else{
            return [SELECT id, Name, Picture__c, Contact__r.Name, Geolocation__latitude__s, Geolocation__longitude__s FROM Car__c WHERE Car_Type__c =:carTypeId AND Available_For_Rent__c= true];
        }	
    }

}