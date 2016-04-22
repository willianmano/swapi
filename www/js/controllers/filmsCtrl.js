.controller('FilmsCtrl', function($scope, $http, APP_CONFIG) {
  var url = APP_CONFIG.apiBaseUrl + 'films';

  $scope.films = [];

  $http.get(url).success(function(response) {
    var films = response.results;

    for(var i = 0; i < films.length; i++)
    {
        var id = films[i].url.match(/\d/);
        films[i].id = id[0];
    }

    $scope.films = films;

    console.log(films);

  });
})
