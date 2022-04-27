public with sharing class HungerTypesSearchController {
    @AuraEnabled
    public static List<Hunger_Types__C> getHungerTypes(){
    	return [select id, Name from Hunger_Types__C];
    }
}