({
    handleStatusWorking : function(component, event, helper) {
        var actionAPI = component.find("qaAPI");
        //Assign Quick Action field values
        var fields = {/*Status__c: {value: "Working"}*/};
        //Quick Action with target field values
        var args = {actionName: "Account.Update_Account_Status", entityName: "Account", targetFields: fields};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });
    }
     
    /*handleStatusEscalated : function(component, event, helper) {
        var actionAPI = component.find("qaAPI");
        //Assign Quick Action field values
        var fields = {Status: {value: "Escalated"}};
        //Quick Action with target field values
        var args = {actionName: "Case.Update_Case_Status", entityName: "Case", targetFields: fields};
        actionAPI.setActionFieldValues(args).then(function(){
            actionAPI.invokeAction(args);
        }).catch(function(e){
            console.error(e.errors);
        });
    }*/
})