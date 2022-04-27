({
    navToNewRecord: function (component, event, helper) {
        var recordId = event.getParam('recordId');
        console.log('recordId' + recordId);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
            "slideDevName": "related"
        });
        navEvt.fire();
    }
})