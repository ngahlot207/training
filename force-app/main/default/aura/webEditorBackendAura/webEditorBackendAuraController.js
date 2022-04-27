({
    /*doInit : function(component, event, helper) {
        //helper.onHandleInit(component, event, helper);
    },*/

    initEvent :function(component, event, helper) {
        helper.onHandleInitEvent(component, event, helper);
    },

    selectedLWCRecord: function(component, event, helper) {
        helper.onHandleViewClick(component, event, helper);
    },

    compNameChange: function(component, event, helper) {
        helper.onHandleCreateClick(component, event, helper);
    },

    saveCompEvent: function(component, event, helper) {
        helper.onHandleSaveClick(component, event, helper);
    },

    addFileEvent: function(component, event, helper) {
        helper.onHandleAddFileClick(component, event, helper);
    },

    saveFilePopupEvent: function(component, event, helper) {
        helper.onHandleSaveFilePopupClick(component, event, helper);
    },

    deleteFileCompEvent: function(component, event, helper) {
        helper.onHandleDeleteFileClick(component, event, helper);
    },

    deleteFilePopupEvent: function(component, event, helper) {
        helper.onHandleDeleteFilePopupClick(component, event, helper);
    },

    deleteCompEvent: function(component, event, helper) {
        helper.onHandleDeleteCompClick(component, event, helper);
    },

    previewCompEvent : function(component, event, helper) {
        helper.onpreviewCompClick(component, event, helper);
    },

    showToast : function(component,event,helper,params){
        var toastEvent = $A.get("e.force:showToast");
        if(toastEvent){
            if(!params){
                toastEvent.setParams({
                    "title" : "Toast Error!",
                    "type" : "error",
                    "message" : "Toats Param Not Defined"
                });
                toastEvent.fire();
            } else {
                toastEvent.setParams(params);
                toastEvent.fire();
            }
        } else {
            alert(params.message);
        }
    }
    
})