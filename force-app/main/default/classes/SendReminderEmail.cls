global class SendReminderEmail /*implements Database.Batchable<sObject>*/ {
    
    /*global String query;
    global String subject;
    global String body;
    
    global SendReminderEmail(String query, String subject, String body) {
        this.query = query;
        this.subject = subject;
        this.body = body;
    }


    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext bc, List<Speaker__c> scope) {
        String[] addresses = new String[]{};
        String subjects=' ';
        String messages = ' ';
        for (Speaker__c speaker : scope) {
            addresses.add(speaker.Email__c);
            subjects= subjects+ this.subject;
            messages = messages +this.body;
        }
        EmailManager.sendMail(addresses, subjects, messages);
        
    }


    global void finish(Database.BatchableContext bc) {

    }*/

}