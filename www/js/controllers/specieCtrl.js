.controller('SpecieCtrl', function($scope, $http, APP_CONFIG){
  var urlSpecie = APP_CONFIG.apiBaseUrl + 'species/';

  $scope.species = [];

  $scope.loadMoreSpecies = function() {
    $http.get(urlSpecie).success(function(items) {

      urlSpecie = items.next;

      useItems(items.results);

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  var useItems = function(items) {
      for(var i = 0; i < items.length; i++)
      {
          var id = items[i].url.match(/\d/);
          items[i].id = id[0];

          $scope.species.push(items[i]);
      }
  }

  $scope.moreSpeciesCanBeLoaded = function() {
      if(urlSpecie != null) {
          return true;
      }
      return false;
  }
})
