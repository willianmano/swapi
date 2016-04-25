.controller('PlanetsCtrl', function($scope, $http, APP_CONFIG){
  var urlPlanet = APP_CONFIG.apiBaseUrl + 'planets/';

  $scope.planets = [];

  $scope.loadMorePlanets = function() {
    $http.get(urlPlanet).success(function(items) {

      urlPlanet = items.next;

      useItems(items.results);

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  var useItems = function(items) {
      for(var i = 0; i < items.length; i++)
      {
          var id = items[i].url.match(/\d/);
          items[i].id = id[0];

          $scope.planets.push(items[i]);
      }
  }

  $scope.morePlanetCanBeLoaded = function() {
      if(urlPlanet != null) {
          return true;
      }

      return false;
  }
})
