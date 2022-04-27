({
	doInit : function(component, event, helper) {
        var today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set('v.activityDateComponent',today);
        
        helper.onSearch(component, helper);
	},
    doSearch : function(component, event, helper) {
        var today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        var params = event.getParam('arguments');
        if(params){
            console.log('param>>'+params.activityDate);
            component.set('v.activityDateComponent',params.activityDate);
        }
        else{
            component.set('v.activityDateComponent',today);
        }	
        helper.onSearch(component, helper);
    },
    handleRowAction : function(component, event, helper){
        var showDetail = event.getParam('action');
        var del= event.getParam('row');
        console.log(showDetail.name);
        switch(showDetail.name)
        {
            case 'show_Details':
            alert('Showing Details: '+JSON.stringify(del));
            break;    
        }        
    }
})