public class GetEventController {
	@AuraEnabled
    public static List<Event> getEvents(Date activityDate){
		
        return [SELECT id, Who.Name, ActivityDate, StartDateTime, EndDateTime, Subject FROM Event WHERE ActivityDate= :activityDate];
    }
}