(function() {
  function CookieCtrl ($uibModalInstance, $cookies) {
    this.setUserName = function() {
      $cookies.put('blocChatCurrentUser', this.username)
      $uibModalInstance.close();
    }
  };

angular
   .module('blocChat')
   .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();
