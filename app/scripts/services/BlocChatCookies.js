
(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

      $uibModal.open({
        templateUrl: '/templates/getusername.html',
        controller: 'CookieCtrl as cookie',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
    });
  }
}

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);

  })();
