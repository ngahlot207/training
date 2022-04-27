public with sharing class SpeakerControllerExtension {

    public Integer counter {get; set;}

    private final Speaker__c speaker;
    private ApexPages.StandardController stdController;

    public SpeakerControllerExtension(ApexPages.StandardController stdController) {
        this.speaker = (Speaker__c)stdController.getRecord();
        this.stdController = stdController;
        counter = 0;
    }

    public void increment() {
        counter++;
    }

}