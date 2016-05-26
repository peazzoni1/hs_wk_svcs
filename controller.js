App.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoHash= function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(this.hash);

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);
