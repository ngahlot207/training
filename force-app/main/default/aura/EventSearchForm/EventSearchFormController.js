({
	doInit : function(component, event, helper) {
		var today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set("v.todayDate",today);
	},
    searchEvent : function(component, event, helper){
        var searchEventFormSubmit= component.getEvent("eventSearchFormSubmit");
        var newDate= component.get("v.todayDate");
        console.log('newDate>>'+newDate);
        console.log('dateInput>>'+ $A.localizationService.formatDate(newDate, "YYYY-MM-DD"));
        searchEventFormSubmit.setParams({
            "activityDate" : $A.localizationService.formatDate(newDate, "YYYY-MM-DD")
        });
        searchEventFormSubmit.fire();
        console.log('searchEventFormSubmit>>'+searchEventFormSubmit.getParam('activityDate'));
    }
})