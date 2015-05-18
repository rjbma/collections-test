
angular
  .module('app', ['angular-meteor'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })
  .controller('ListCtrl', function ($scope, $meteor, $collection) {
      // changing input values will be slow
      // also inputs will lose focus when we star typing on them  
      $scope.entities = $meteor.collection(Players, true);
      
      // this works as expected
      //$collection(Players).bind($scope, 'entities', true);
  });