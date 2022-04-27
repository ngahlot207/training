({
	doInit : function(component, event, helper) {
		helper.onSearch(component, helper);
	},
	doSearch : function(component, event, helper){
        var params = event.getParam('arguments');
        if(params){
            console.log("carsearchresult param>> "+params.carTypeId);
        	component.set("v.carTypeIdComponent", params.carTypeId);
            helper.onSearch(component, helper);
        }
    },
    onCarSelect : function(component, event, helper){
        component.set("v.selectedCarId",event.getParam("carId"));
    }
})