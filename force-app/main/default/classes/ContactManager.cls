public with sharing class ContactManager {
    
    @AuraEnabled
    public static List<Contact> getAllContacts(Integer numberOfRowsToReturn, Integer numberOfRowsToSkip){
        String soqlQuery= 'Select Id, Name, Phone, Account.Name FROM Contact ORDER BY AccountId LIMIT '+numberOfRowsToReturn+' OFFSET '+numberOfRowsToSkip;
        Database.QueryLocator qResult= Database.getQueryLocator([Select Id, Name, Phone, Account.Name,Status__c FROM Contact WHERE Status__c=true ORDER BY Account.CreatedDate ASC LIMIT 10000]);
        Database.QueryLocatorIterator queryIterator = qResult.iterator();
        List<Contact> conList= new List<Contact>();
        while(queryIterator.hasNext()){
            conList.add((contact) queryIterator.next());
        }
        List<Contact> resultList= new List<Contact>();
        if(!conList.isEmpty()){
            System.debug('Size conlist>> '+conList.size());
            if(numberOfRowsToSkip+numberOfRowsToReturn < conList.size()){
                for(Integer i=numberOfRowsToSkip;i<(numberOfRowsToSkip+numberOfRowsToReturn);i++){
                    resultList.add(conList.get(i));
                }
            } else{
                Integer listSize= conList.size();
                for(Integer i=numberOfRowsToSkip;i<listSize;i++){
                    resultList.add(conList.get(i));
                }
            }
            
            System.debug('Size resultList >> '+resultList.size());
            return resultList;
        }
        return null;
    }
    
    @AuraEnabled(cacheable=true)
    public static Integer getContactsCount(){
        return [SELECT count() FROM Contact WHERE Status__c=true LIMIT 10000];
    }

    @AuraEnabled
    public static void getSelectedRecords(List<Contact> conList){
        List<Contact> resultList = new List<Contact>();
        for(Contact con: conList){
            if(con.status__c)
                con.status__c = false;
            else 
                con.status__c = true;
            resultList.add(con);
        }
        System.debug('resultList>>'+resultList);
        update resultList;
    }

}