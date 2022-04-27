({
	doSearchEvent : function(component, event, helper) {
		var activityDate = event.getParam('activityDate');
        console.log('activityDate>>>'+activityDate);
        var eventSearchResultComponent = component.find("eventSearchResults");
        var eventSrchRes= eventSearchResultComponent.searchEvents(activityDate);
	}
})