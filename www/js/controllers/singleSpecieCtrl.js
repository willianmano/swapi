.controller('singleSpecieCtrl', function($scope, $http, $stateParams, APP_CONFIG) {
  var id = $stateParams.id;
  var url = APP_CONFIG.apiBaseUrl + 'species/' + id;

  $http.get(url).success(function(response) {
    var specie = response;

    var films = [];

    for (var i = 0; i < specie.films.length; i++) {
        var id = specie.films[i].match(/\d/);

        var film = {
          'id': id[0],
          'url': specie.films[i]
        }
        films.push(film);
    }

    specie.films = films;

    $scope.specie = specie;
  });
})
