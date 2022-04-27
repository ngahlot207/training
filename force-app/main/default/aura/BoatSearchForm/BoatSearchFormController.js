({
	doInit : function(component, event, helper) {
        var createBoatRecord= $A.get("e.force:createRecord");
        if(createBoatRecord){
            component.set("v.showNew",true);
        }
        else{
            component.set("v.showNew",false);
            console.log("event is not supported.");
        }
        helper.callServer(component,"c.getBoatTypes",function(response){
                          component.set("v.boatTypes",response);
        				});
	},
    createRecord: function(component, event, helper){
    	var createBoatRecord= $A.get("e.force:createRecord");
        console.log('>>boatType>>'+component.find("boatTypeList").get("v.value"));
        if(component.find("boatTypeList").get("v.value")!=''){
            createBoatRecord.setParams({
                "entityApiName":"Boat__c",
                "defaultFieldValues":{
                    'BoatType__c': component.find("boatTypeList").get("v.value")
                }
            });
        } else {
            createBoatRecord.setParams({
        	"entityApiName":"Boat__c"
            
            });
        }
        createBoatRecord.fire();
	},
    onFormSubmit: function(component, event, handler){
        var searchFormSubmit= component.getEvent("searchFormSubmit");
        console.log('searchFormSubmit>>>'+searchFormSubmit);
        console.log('Params>>'+component.find("boatTypeList").get("v.value"));
        searchFormSubmit.setParams({
            "formData":
                            {"boatTypeId" : component.find("boatTypeList").get("v.value")}
        });
        searchFormSubmit.fire();
    }
})