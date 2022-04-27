({
    openUtilityBar : function(component, event, helper){
           console.log('ParentIn>>');
           var utilityAPI = component.find("utilitybar");
            utilityAPI.openUtility();
            utilityAPI.getEnclosingUtilityId().then(function(response) {
              utilityAPI.setUtilityLabel({label : "LWC Sessions", utilityId : response});
              utilityAPI.setUtilityIcon({icon : "insert_tag_field", utilityId : response });
          }); 
          console.log('ParentOut>>');
    }
})