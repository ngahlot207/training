({
    doInit : function(component, event, helper) {
        component.set("v.meetingRoomsInfo",[
            {roomName:'A-01', roomCapacity:'10'},
            {roomName:'A-02', roomCapacity:'11'},
            {roomName:'A-03', roomCapacity:'12'},
            {roomName:'B-01', roomCapacity:'13'},
            {roomName:'B-02', roomCapacity:'14'},
            {roomName:'C-01', roomCapacity:'15'}
        ]);
    },
    handleTileClick : function(component, event, helper) {
        component.set("v.selectedMeetingRoom", event.getParam('roomName'));
    }
})