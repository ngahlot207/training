({
	onFormSubmit : function(component, event, helper) {
		var boatTypeId = event.getParam('formData');
        console.log('boatTypeId>>'+boatTypeId);
        var boatSearchResultComponent = component.find("boatSearchResult");
        console.log("boatSearchResultComponent >>>"+boatSearchResultComponent);
        var boatSearchCmpResult= boatSearchResultComponent.searchBoats(boatTypeId);
        console.log("boatSearchCmpResult >>>"+boatSearchCmpResult);
	}
})