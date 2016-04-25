.controller('singlePlanetCtrl', function($scope, $http, $stateParams, APP_CONFIG) {
  var id = $stateParams.id;
  var url = APP_CONFIG.apiBaseUrl + 'planets/' + id;

  $http.get(url).success(function(response) {
    var planet = response;

    var films = [];

    for (var i = 0; i < planet.films.length; i++) {
        var id = planet.films[i].match(/\d/);

        var film = {
          'id': id[0],
          'url': planet.films[i]
        }
        films.push(film);
    }

    planet.films = films;

    $scope.planet = planet;
  });
})
