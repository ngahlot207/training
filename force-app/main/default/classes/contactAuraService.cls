public with sharing class contactAuraService {
 
    @AuraEnabled(Cacheable=true)
    public static List<SObject> getContactList(String name){
        String key = '%'+name+'%';
        String query = 'Select Id, Name, Email, Phone from Contact where name like : key';
        return Database.query(query);
    }

    @AuraEnabled(Cacheable=true)
    public static List<SObject> getAccounttList(String name){
        String key = '%'+name+'%';
        String query = 'Select Id, Name, Industry from Account where name like : key';
        return Database.query(query);
    }
}