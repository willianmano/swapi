.controller('PersonCtrl', function($scope, $http, $stateParams, APP_CONFIG) {
  var id = $stateParams.id;
  var url = APP_CONFIG.apiBaseUrl + 'people/' + id;

  $http.get(url).success(function(response) {
    var person = response;

    var films = [];

    for (var i = 0; i < person.films.length; i++) {
        var id = person.films[i].match(/\d/);

        var film = {
          'id': id[0],
          'url': person.films[i]
        }
        films.push(film);
    }

    person.films = films;

    console.log(person.films);

    $scope.person = person;
  });
})
