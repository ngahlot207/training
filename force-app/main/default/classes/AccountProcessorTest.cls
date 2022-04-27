@isTest
public class AccountProcessorTest {
    public static testMethod void testAccountProcessorTest(){
        
        Account a = new Account();
        a.Name = 'Test Account';
        insert a;

        Contact cont = new Contact();
        cont.FirstName ='Bob';
        cont.LastName ='Masters';
        cont.AccountId = a.Id;
        insert cont;

        Set<Id> setAccId = new Set<ID>();
        setAccId.add(a.Id);
		Test.startTest();
        AccountProcessor.countContacts(setAccId);       
        Test.stopTest();

        Account acc = [select Number_of_Contacts__c from Account where id = : a.id];
        System.assertEquals(Integer.valueOf(acc.Number_of_Contacts__c),1);
    } 
}