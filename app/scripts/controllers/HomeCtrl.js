(function() {



    function HomeCtrl(Room, $uibModal) {

    this.rooms = Room.all;

    this.addRoom = function() {

    $uibModal.open({
      templateUrl: '/templates/modal.html',
      size: 'sm',
      controller:'ModalCtrl as modal'
    });
  };

  //this.deleteRoom = function() {
          //console.log(Room.all.$);
         //delete this.rooms;
          //console.log(Room.remove);
        //}
      }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
