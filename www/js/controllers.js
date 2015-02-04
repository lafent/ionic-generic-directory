angular.module('directory.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ContactsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Friends) {
  console.log($stateParams);
  $scope.friend = Friends.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
