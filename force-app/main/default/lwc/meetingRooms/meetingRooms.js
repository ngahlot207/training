import { LightningElement, track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedMeetingRoom;
    meetingRoomsInfo =[
        {roomName:'A-01', roomCapacity:'10'},
        {roomName:'A-02', roomCapacity:'11'},
        {roomName:'A-03', roomCapacity:'12'},
        {roomName:'B-01', roomCapacity:'13'},
        {roomName:'B-02', roomCapacity:'14'},
        {roomName:'C-01', roomCapacity:'15'}
    ];

    onTileSelectHandler(event){
        const meetingRoomInfo= event.detail;
        this.selectedMeetingRoom= meetingRoomInfo.roomName;
    }
    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
}