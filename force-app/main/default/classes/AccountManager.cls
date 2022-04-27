public with sharing class AccountManager {
    public AccountManager() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [Select Id, Name, Phone, Website From Account LIMIT 10];
    }
    @AuraEnabled
    public static List<Account> getAccounts(Integer numberOfAccounts){
        return [Select Id, Name, Phone, Website From Account LIMIT :numberOfAccounts];
    }
}