({
    onHandleInitEvent: function(component, event, helper) {
        var action = component.get('c.makeAPICall');
        
        // set the callback which will return the response from apex
        action.setCallback(this, function(response){
            // get the state
            var state = response.getState();
            if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                // get the response
                var responseValue = response.getReturnValue();
                // Parse the respose
                var obj = JSON.parse(responseValue);
                var responseData = JSON.parse(obj);
                //console.log(obj);
                //console.log('obj.totalSize>>'+responseData.size);
                component.set("v.compSize",responseData.size);
                component.set("v.lwcRecords",responseData.records);
                //console.log('responseData.records>>'+responseData.records);
                var webEditorHomeLWC= component.find("webEditorHomeLWC");
                var webEditorElement= webEditorHomeLWC.getElement();
                //console.log('webEditorElement>>'+webEditorElement);
                webEditorElement.doCallback();
                component.set("v.isAvailable",false);
            } else if( state === 'INCOMPLETE'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "INCOMPLETE",
                            "type" : "error",
                            "message" : "User is offline, device doesn't support drafts."
                        });
                        resultsToast.fire();
                    } else{
                        alert('User is offline, device doesnt support drafts.');
                    }
                console.log("User is offline, device doesn't support drafts.");
            } else if( state === 'ERROR'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                    }
                console.log('Problem saving record, error: ' +
                JSON.stringify(response.getError()));
            } else{
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                    }
                console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
            }
        });
        // send the action to the server which will call the apex and will return the response
        $A.enqueueAction(action);
    },

    onHandleViewClick: function(component, event, helper) {
        console.log('event>>'+event);
        var selectedLWCRecordEventParam = event.getParams("value");
        var lwcRecordId= selectedLWCRecordEventParam.value;
        console.log('selectedLWCRecordEventParam>>1'+selectedLWCRecordEventParam.value);
        if(lwcRecordId){
            component.set("v.isAvailable",true);
            component.set("v.lwcBundleRecordId",lwcRecordId);
        }
        var action = component.get('c.makeAPICallOnClick');
        action.setParams({ "lwcRecordId" : lwcRecordId });
        action.setCallback(this, function(response){
            var state = response.getState();
            if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                var responseValue = response.getReturnValue();
                // Parse the respose
                var obj = JSON.parse(responseValue);
                console.log('responseValue>>'+obj);
                var responseData = JSON.parse(obj);
                //console.log('responseData>>'+responseData.records);
                component.set("v.selectedLWCRecords",responseData.records);
                var webEditorEditLWC= component.find("webEditorEditLWC");
                var webEditorElement= webEditorEditLWC.getElement();
                webEditorElement.doCallback();
            } else if( state === 'INCOMPLETE'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "INCOMPLETE",
                            "type" : "error",
                            "message" : "User is offline, device doesn't support drafts."
                        });
                        resultsToast.fire();
                    } else{
                        alert('User is offline, device doesnt support drafts.');
                    }
                console.log("User is offline, device doesn't support drafts.");
            } else if( state === 'ERROR'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                    }
                console.log('Problem saving record, error: ' +
                JSON.stringify(response.getError()));
            } else{
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                    }
                console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
            }

        });
        $A.enqueueAction(action);
    },
    onHandleCreateClick: function(component, event, helper) {
        //console.log('event>>'+event);
        var compNameChangeEventParam = event.getParams("value");
        var compName= compNameChangeEventParam.value;
        console.log('compNameChangeEventParam>>compName'+compNameChangeEventParam.value);

        var action = component.get('c.createCompoApiCall');
        action.setParams({ "compName" : compName });
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('State>>>>'+state);
            if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                var responseValue = response.getReturnValue();
                // Parse the respose
                var obj = JSON.parse(responseValue);
                console.log('responseValue>>'+obj);
                var responseData = JSON.parse(obj);
                console.log('responseData>>'+responseData.success);
                if(responseData.success){

                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "SAVED",
                            "type" : "success",
                            "message" : "Component is created successfully."
                        });
                        resultsToast.fire();
                    } else{
                        alert('Component is created successfully.');
                    }

                    //window.location.reload();
                    var webEditorHomeLWC= component.find("webEditorHomeLWC");
                    var webEditorHomeElement= webEditorHomeLWC.getElement();
                    webEditorHomeElement.doInit();
                }
            } else if( state === 'INCOMPLETE'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "INCOMPLETE",
                            "type" : "error",
                            "message" : "User is offline, device doesn't support drafts."
                        });
                        resultsToast.fire();
                    } else{
                        alert('User is offline, device doesnt support drafts.');
                    }
                console.log("User is offline, device doesn't support drafts.");
            } else if( state === 'ERROR'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                    }
                console.log('Problem saving record, error: ' +
                JSON.stringify(response.getError()));
            } else{
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                    }
                console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
            }

        });
        $A.enqueueAction(action);
    },

    onHandleSaveClick: function(component, event, helper) {
        var saveCompEventParam = event.getParams("value");
        var saveCompEventParamvalue= saveCompEventParam.value;
        console.log('saveCompEventParam>>1'+saveCompEventParamvalue.id);

        var action = component.get('c.saveCompApiCall');
        action.setParams({ "id" : saveCompEventParamvalue.id, "filePath" : saveCompEventParamvalue.filePath, "format" : saveCompEventParamvalue.format, "source" : saveCompEventParamvalue.source });
        action.setCallback(this, function(response){
            var state = response.getState();
            if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                var responseValue = response.getReturnValue();
                // Parse the respose
                var obj = JSON.parse(responseValue);
                //console.log('responseValue>>'+obj);
                var responseData = JSON.parse(obj);
                console.log('responseData>>'+responseData.success);
                if(responseData.success){
                    //alert(saveCompEventParamvalue.filePath+' is successfully updated.');
                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "SAVED",
                            "type" : "success",
                            "message" : "File is saved successfully."
                        });
                        resultsToast.fire();
                    } else{
                        alert('File is saved successfully.');
                    }
                    
                }
            } else if( state === 'INCOMPLETE'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "INCOMPLETE",
                            "type" : "error",
                            "message" : "User is offline, device doesn't support drafts."
                        });
                        resultsToast.fire();
                    } else{
                        alert('User is offline, device doesnt support drafts.');
                    }
                console.log("User is offline, device doesn't support drafts.");
            } else if( state === 'ERROR'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                    }
                console.log('Problem saving record, error: ' +
                JSON.stringify(response.getError()));
            } else{
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                    }
                console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
            }

        });
        $A.enqueueAction(action);
    },

    onHandleAddFileClick: function(component, event, helper) {
        
        var addFileEventParam = event.getParams("value");
        var addFileEventParamvalue= addFileEventParam.value;
        //console.log('addFileEventParamvalue.openModal>>'+addFileEventParamvalue[0].openModal);
        //console.log('addFileEventParamvalue.lightningComponentBundleId>>'+addFileEventParamvalue[0].lightningComponentBundleId);
        component.set("v.openModal",addFileEventParamvalue[0].openModal);
        component.set("v.openModalList",addFileEventParamvalue);
        //component.set("v.lwcRecords",responseData.records);
        //console.log(component.get("v.openModalList").fileElement.openModal);
        //console.log('addFileEventParamvalue>>'+addFileEventParamvalue);
        var webEditModalPopupLWC= component.find("webModalPopupLWC");
        //console.log('webEditorModalPopupLWC>>'+webEditModalPopupLWC);
        var webEditElement= webEditModalPopupLWC.getElement();
        //console.log('webEditElement>>'+webEditElement);
        webEditElement.doCallback();
    },

    onHandleSaveFilePopupClick: function(component, event, helper) {
        var saveFilePopupEventParam = event.getParams("value");
        var saveFilePopupEventParamvalue= saveFilePopupEventParam.value;
        var action = component.get('c.addFileApiCall');
        action.setParams({ "bundleId" : saveFilePopupEventParamvalue.lightningComponentBundleId, "filePath" : saveFilePopupEventParamvalue.filePath, "format" : saveFilePopupEventParamvalue.format });
        action.setCallback(this, function(response){
            var state = response.getState();
            if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                var responseValue = response.getReturnValue();
                // Parse the respose
                var obj = JSON.parse(responseValue);
                console.log('responseValue>>'+obj);
                var responseData = JSON.parse(obj);
                console.log('responseData>>'+responseData.success);
                if(responseData.success){
                    //alert(saveFilePopupEventParamvalue.filePath+' is successfully created.');
                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "CREATED",
                            "type" : "success",
                            "message" : "File is created successfully."
                        });
                        resultsToast.fire();
                    } else{
                        alert('Car Experience Added');
                    }
                    //window.location.reload();
                    var webEditorHomeLWC= component.find("webEditorHomeLWC");
                    var webEditorHomeElement= webEditorHomeLWC.getElement();
                    webEditorHomeElement.viewCodeClick();
                }
            } else if( state === 'INCOMPLETE'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "INCOMPLETE",
                            "type" : "error",
                            "message" : "User is offline, device doesn't support drafts."
                        });
                        resultsToast.fire();
                    } else{
                        alert('User is offline, device doesnt support drafts.');
                    }
                console.log("User is offline, device doesn't support drafts.");
            } else if( state === 'ERROR'){
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                    }
                console.log('Problem saving record, error: ' +
                JSON.stringify(response.getError()));
            } else{
                var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "ERROR",
                            "type" : "error",
                            "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                        });
                        resultsToast.fire();
                    } else{
                        alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                    }
                console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
            }

        });
        $A.enqueueAction(action);
    },

    onHandleDeleteFileClick: function(component, event, helper) {
        var deleteFileEventParam = event.getParams("value");
        var deleteFileEventParamvalue= deleteFileEventParam.value;
        console.log('deleteFileEventParamvalue>>1'+deleteFileEventParamvalue.id);
        component.set("v.confirmModal",deleteFileEventParamvalue.confirmModal);
        component.set("v.deleteableId",deleteFileEventParamvalue.id);
        component.set("v.deleteType",'File');
        var confirmModalPopupLWC= component.find("confirmModalPopupLWC");
        confirmModalPopupLWC.setModal();
    },

    onHandleDeleteFilePopupClick: function(component, event, helper) {
        var deleteFileEventParam = event.getParams("value");
        var deleteFileEventParamvalue= deleteFileEventParam.value;
        console.log('deleteFileEventParamvalue>>1'+deleteFileEventParamvalue);
        var deleteableId= component.get("v.deleteableId");
        console.log('deleteableId>>'+deleteableId);
        if(deleteFileEventParamvalue == 'File'){
            var action = component.get('c.deleteFileApiCall');
            action.setParams({ "fileId" : deleteableId });
            action.setCallback(this, function(response){
                var state = response.getState();
                if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                    //alert(deleteFileEventParamvalue.filePath+' is successfully deleted.');
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "Deleted",
                                "type" : "success",
                                "message" : "File is deleted successfully."
                            });
                            resultsToast.fire();
                        } else{
                            alert('Car Experience Added');
                        }
                    var webEditorEditLWC= component.find("webEditorHomeLWC");
                    console.log('webEditorEditLWC>>'+webEditorEditLWC);
                    var webEditorElement= webEditorEditLWC.getElement();
                    console.log('webEditorElement>>'+webEditorElement);
                    webEditorElement.viewCodeClick();
                } else if( state === 'INCOMPLETE'){
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "INCOMPLETE",
                                "type" : "error",
                                "message" : "User is offline, device doesn't support drafts."
                            });
                            resultsToast.fire();
                        } else{
                            alert('User is offline, device doesnt support drafts.');
                        }
                    console.log("User is offline, device doesn't support drafts.");
                } else if( state === 'ERROR'){
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "ERROR",
                                "type" : "error",
                                "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                            });
                            resultsToast.fire();
                        } else{
                            alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                        }
                    console.log('Problem saving record, error: ' +
                    JSON.stringify(response.getError()));
                } else{
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "ERROR",
                                "type" : "error",
                                "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                            });
                            resultsToast.fire();
                        } else{
                            alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                        }
                    console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                }

            });
            $A.enqueueAction(action);
        } else if(deleteFileEventParamvalue == 'Component') {
            var action = component.get('c.deleteCompApiCall');
            action.setParams({ "compId" : deleteableId});
            action.setCallback(this, function(response){
                var state = response.getState();
                if( (state === 'SUCCESS' || state ==='DRAFT') && component.isValid()){
                    //alert(deleteCompEventParamvalue +' is successfully deleted.');
                    var resultsToast = $A.get("e.force:showToast");
                    if(resultsToast){
                        resultsToast.setParams({
                            "title" : "DELETED",
                            "type" : "success",
                            "message" : "Component is deleted successfully."
                        });
                        resultsToast.fire();
                    } else{
                        alert('Component is deleted successfully.');
                    }
                    var webEditorHomeLWC= component.find("webEditorHomeLWC");
                    var webEditorElement= webEditorHomeLWC.getElement();
                    webEditorElement.doInit();
                    //window.location.reload();
                } else if( state === 'INCOMPLETE'){
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "INCOMPLETE",
                                "type" : "error",
                                "message" : "User is offline, device doesn't support drafts."
                            });
                            resultsToast.fire();
                        } else{
                            alert('User is offline, device doesnt support drafts.');
                        }
                    console.log("User is offline, device doesn't support drafts.");
                } else if( state === 'ERROR'){
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "ERROR",
                                "type" : "error",
                                "message" : 'Problem saving record, error: ' +JSON.stringify(response.getError())
                            });
                            resultsToast.fire();
                        } else{
                            alert('Problem saving record, error: ' +JSON.stringify(response.getError()));
                        }
                    console.log('Problem saving record, error: ' +
                    JSON.stringify(response.getError()));
                } else{
                    var resultsToast = $A.get("e.force:showToast");
                        if(resultsToast){
                            resultsToast.setParams({
                                "title" : "ERROR",
                                "type" : "error",
                                "message" : 'Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError())
                            });
                            resultsToast.fire();
                        } else{
                            alert('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                        }
                    console.log('Unknown problem, state: ' + state +', error: ' + JSON.stringify(response.getError()));
                }

            });
            $A.enqueueAction(action);
        }
    },

    onHandleDeleteCompClick: function(component, event, helper) {
        var deleteCompEventParam = event.getParams("value");
        var deleteCompEventParamvalue= deleteCompEventParam.value;
        console.log('deleteFileEventParamvalue>>1'+deleteCompEventParamvalue);
        component.set("v.confirmModal",true);
        component.set("v.deleteableId",deleteCompEventParamvalue);
        component.set("v.deleteType","Component");
        var confirmModalPopupLWC= component.find("confirmModalPopupLWC");
        confirmModalPopupLWC.setModal();  
    },

    onpreviewCompClick : function(component, event, helper) {
        var previewCompClickEvent = event.getParams("value");
        var previewElement= previewCompClickEvent.value;
        console.log('previewElement>>'+previewElement);
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:"+previewElement    
        });
        evt.fire();
        
    }
})