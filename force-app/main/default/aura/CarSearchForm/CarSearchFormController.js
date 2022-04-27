({
    doInit:function(component, event,helper){
        var createCarRecords= $A.get("e.force:createRecord");
        if(createCarRecords){
            component.set("v.showNew",true);
        }
        else{
            component.set("v.showNew",false);
            console.log("event is not supported.");
        }
        helper.getCarType(component,helper);
        /*var carTypes= component.get("v.carTypes");
        component.set("v.carTypes",['Sports Car','Luxury Car','Van']);
        carTypes= component.get("v.carTypes");
        */
        
    },
	onSearchClick : function(component, event, helper) {
        var searchFormSubmit= component.getEvent("searchFormSubmit");
        console.log('searchFormSubmit>>>'+searchFormSubmit);
        console.log('CarType>>>'+ component.find("carTypeList").get("v.value"));
        searchFormSubmit.setParams({
            "CarTypeId": component.find("carTypeList").get("v.value")
        });
        searchFormSubmit.fire();
		//helper.handleOnSearchClick(component, event, helper);
	},
    /*selectedValue:function(component, event,helper){
        var selectedValue= component.find("carTypeList").get("v.value");
        alert("selectedValue :"+selectedValue);
    },*/
    createRecord: function(component, event,helper){
    var createCarRecord= $A.get("e.force:createRecord");
    createCarRecord.setParams({
    "entityApiName":"Car_Type__c"
		});
	createCarRecord.fire();
	}
    /*toggleClick:function(component, event,helper){
        var currentValue= component.get("v.isNewAvailable");
        console.log("currentValue>>"+currentValue);
        if(currentValue){
            component.set("v.isNewAvailable",false);
        }
        else{
            component.set("v.isNewAvailable",true);
        }
    },*/
    
    
    /*handleRender:function(){
        alert("Alerted.");
    }*/
})