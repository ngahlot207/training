({
	onSearch : function(component,helper) {
        var actions= [{label:'Show Details', name:'show_Details'},
                      {label:'Delete', name:'delete'}
                     ];        
        component.set('v.columns',[
            {label: 'Who', fieldName:'Who', type:'text'},
            {label: 'Subject', fieldName:'Subject', type:'text'},
            {label: 'Activity Date', fieldName:'ActivityDate', type:'date'},
            {label: 'Start Date Time', fieldName:'StartDateTime', type:'datetime'},
            {label: 'End Date Time', fieldName:'EndDateTime', type:'datetime'},
            {type: 'action', typeAttributes :{rowActions : actions}}
        ]);
        
		helper.callServer(component,"c.getEvents",
                          function(response){
                              for(var i=0;i<response.length; i++){
                                  var row=  response[i];
                                  row.Who = row.Who.Name;
                              }
                              console.log(response);
                              console.log(component.get("v.activityDateComponent"));
                              component.set("v.data",response);
                          },
                          {
                              activityDate : component.get("v.activityDateComponent")
                          }
        );
	}
})