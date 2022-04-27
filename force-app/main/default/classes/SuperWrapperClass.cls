public with sharing class SuperWrapperClass {
    @AuraEnabled(cacheable=true)
    public static List<wrapp> getWrapperList(String lead) {
        List<wrapp> wrapperList = new List<wrapp>();
            for(Lead led : [SELECT Id, Name FROM Lead Where Id=:lead]){
                wrapp obj = new wrapp(led);
                wrapperList.add(obj);
            }
            for(Account acc : [SELECT Id, Name FROM Account Where Name LIKE:'%test%' LIMIT 5]){
                wrapp obj = new wrapp(acc);
                wrapperList.add(obj);
            }
            for(Contact con : [SELECT Id, Name, Email, Phone FROM Contact Where Name LIKE:'%test%' LIMIT 5]){
                wrapp obj = new wrapp(con);
                wrapperList.add(obj);
            }

        return wrapperList;
    }

    public class wrapp{
        @AuraEnabled
        public String id{get;set;}
        @AuraEnabled
        public String name{get;set;}
        @AuraEnabled
        public String phone{get;set;}
        @AuraEnabled
        public String email{get;set;}
    

        public wrapp(Account acct){
            id = acct.Id;
            name = acct.Name;   
        }
        public wrapp(Contact cont){
            id = cont.Id;    
            name = cont.Name; 
            phone = cont.Phone;   
            email = cont.email;  
        }
        public wrapp(Lead lead){
            id = lead.Id;    
            name = lead.Name; 
        }
    }
}