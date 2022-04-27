({
	doFormSubmit : function(component, event, helper) {
		var carTypeId = event.getParam('CarTypeId');
        console.log("Selected carTypeId >>>"+carTypeId);
        
        var carSearchResultComponent = component.find("carSearchResult");
        console.log("carSearchResultComponent >>>"+carSearchResultComponent);
        var carSearchCmpResult= carSearchResultComponent.searchCars(carTypeId);
        console.log("carSearchCmpResult >>>"+carSearchCmpResult);
	}
})