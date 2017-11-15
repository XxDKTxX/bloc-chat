(function() {



    function HomeCtrl(Room, Message, $uibModal) {

    this.rooms = Room.all;
    this.removeRoom = Room.delete
    this.messages = Message.all

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
}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
