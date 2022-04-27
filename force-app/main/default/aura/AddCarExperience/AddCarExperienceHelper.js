({
	onInit : function(component, event, helper) {
		component.find("service").getNewRecord(
            "Car_Experiance__c", //sObject type
            null, //recordType Id
            false, //skip cache
            $A.getCallback(function(){
                var rec = component.get("v.carExperience");
                var error = component.get("v.recordError");
                var car= component.get("v.car");
                if(error || (rec === null)){
                    console.log("Error Initializing record template "+Error);
                } else{
                    component.set("v.carExperience.Car__c",car.Id);
                }
            }
            )
        );
	}
})