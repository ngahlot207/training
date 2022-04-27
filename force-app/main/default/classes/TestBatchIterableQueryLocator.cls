global class TestBatchIterableQueryLocator implements Database.Batchable<sObject>{
	global Database.QueryLocator start(Database.BatchableContext bc){
    
        String query = '';
		List<Contact> csOnePurgeList= [SELECT AccountId FROM Contact Order by Account.Name ASC limit 5000];
        List<Id> IdList= new List<Id>();
        for(Contact c: csOnePurgeList)
            IdList.add(c.AccountId);
        query= 'SELECT Id FROM Account where Id IN:IdList';
		//List<Account> acList= [SELECT Id FROM Account where Id IN:IdList];
       // query = 'SELECT Case_Id__c, Status__c, Delete_Type__c, CreatedDate,Case_Number__c,Case_Status__c FROM CSOne_Purge_Log__c ' +
           //	'WHERE Status__c = \'New\' AND Order by Case_Number__c ASC limit 5000'; // 2000;and Case_Id__c = \'5001C00000rO88KQAS\'';  //
        return Database.getQueryLocator(query);
    }
	global void execute(Database.BatchableContext bc, List<Account> listRecords){
       List<Account> accsToUpdate = new List<Account>();
       for(Account a : listRecords){ 
           a.Name = 'true'; 
           accsToUpdate.add(a); 
       } 
       update accsToUpdate; 
	}
	global void finish(Database.BatchableContext BC){
	}
}