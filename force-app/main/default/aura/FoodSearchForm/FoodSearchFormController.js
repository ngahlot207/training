({
    doInit: function(component,event,helper){
            
        var hungerTypeCreateRecord= $A.get("e.force:createRecord");
        console.log("yoyoyo"+hungerTypeCreateRecord);
        if(hungerTypeCreateRecord){
            component.set("v.showNew",true);
        }else{
            component.set("v.showNew",false);
            console.log("Not possible");
        }
        /*component.set("v.HungerTypes",['Snacks','Beverages','Main Course']);*/
        helper.fetchHungerTypesRecords(component,helper);
        
	},
	onsearchevent: function(component,event,helper) {
        var searchFormSubmit= component.getEvent("searchFormSubmit");
        //alert('searchFormSubmit'+searchFormSubmit);
        searchFormSubmit.setParams({
            "hungerTypeId": component.find("HungerTypesList").get("v.value")
        });
        searchFormSubmit.fire();
		//helper.handleonsearchevent(component,event,helper);
	},
    createNewHungerTypes: function(component,event,helper){
        var hungerTypeNewRecord= $A.get("e.force:createRecord");
        hungerTypeNewRecord.setParams({
            "entityApiName":"Hunger_Types__c"
        });
        hungerTypeNewRecord.fire();
    }
    /*newvalueSelected: function(component,event,helper){
        var HungerTypesId= component.find("HungerTypesList").get("v.value");
        alert(HungerTypesId+" is selected");
    },*/
    
    /*togglebutton: function(component,event,helper){
    	var currentvalue= component.get("v.isNewLabelAvailable");
        if(currentvalue){
        	component.set("v.isNewLabelAvailable",false);
        }
        else{
            component.set("v.isNewLabelAvailable",true);
        }
    },*/
    
    
    /* handleRender: function(component,event,helper){
    	alert("Compo is render.");
	}*/
})