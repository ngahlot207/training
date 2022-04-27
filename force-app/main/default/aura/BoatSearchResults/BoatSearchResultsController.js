({
    doInit : function(component, event, helper) {
		helper.onSearch(component, helper);
	},
	doSearch : function(component, event, helper) {
		var params = event.getParam('arguments');
        if(params){
            console.log("boatsearchresult param>> "+params.boatTypeId);
        	component.set("v.boatTypeIdComponent", params.boatTypeId);
            helper.onSearch(component, helper);
        }
	}
})