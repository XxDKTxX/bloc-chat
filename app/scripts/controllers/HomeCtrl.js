(function() {



    function HomeCtrl(Room, Message, $uibModal, $cookies) {

    this.rooms = Room.all;
    this.removeRoom = Room.delete
    this.messages = Message.all
    this.newMessage = Message.Send

    this.addRoom = function() {

    $uibModal.open({
      templateUrl: '/templates/modal.html',
      size: 'sm',
      controller:'ModalCtrl as modal'
    });
  };


      this.setRoom = function(room) {
         this.currentRoom = room;
         this.messages = Message.getByRoomId(this.currentRoom.$id);
         //console.log(room.$value);
        };

       this.sendMessage = function() {
        this.newMessage.roomId = this.currentRoom.$id;
        this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        this.newMessage.username = $cookies.get('blocChatCurrentUser');
         document.getElementById("textfield").value = "";
          Message.send(this.newMessage);
 }
}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
