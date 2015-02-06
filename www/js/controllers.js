"use strict";

angular.module('directory.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all($scope);
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
