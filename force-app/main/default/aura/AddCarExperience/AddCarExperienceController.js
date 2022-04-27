({
    doInit : function(component, event, helper){
        helper.onInit(component, event, helper);
    },
    onSave : function(component, event, helper){
        component.set("v.carExperience.Car__c", component.get("v.car.Id"));
        component.find("service").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                    var resultsToast = $A.get("e.force:showToast");
                if(resultsToast){
                    resultsToast.setParams({
                        "title" : "SAVED",
                        "message" : "Car Experience Added"
                    });
                    resultsToast.fire();
                } else{
                    alert('Car Experience Added');
                }
                
                helper.onInit(component, event, helper);
                var evt= component.getEvent("carExpAdded");
                evt.fire();
                
            } else if(saveResult.state === "INCOMPLETE"){
                helper.showToast(component, event, helper,{
                    "title" : "Error",
                    "type"  : "error",
                    "message" : "Device does not support draft"
                });
            } else if(saveResult.state === "ERROR"){
                helper.showToast(component, event, helper,{
                    "title" : "Error",
                    "type"  : "error",
                    "message" : "Problem in saving"
                });
            } else {
                helper.showToast(component, event, helper,{
                    "title" : "Error",
                    "type"  : "error",
                    "message" : "Unknown Error"
                });
            }
            
            
        }));
    },
	onRecordUpdated : function(component, event, helper) {
		var eventParams = event.getParams();
        if(eventParams.changeType === 'CHANGED'){
            var changeFields = eventParams.changeFields;
            helper.showToast(component, event, helper,{
                    "title" : "SAVED",
                    "type"  : "error",
                    "message" : "The record was updated."
                });
        } else if(eventParams.changeType === "LOADED"){
                
        } else if(eventParams.changeType === "REMOVED"){
                
        } else if(eventParams.changeType === "ERROR"){
                
        }
	}
})