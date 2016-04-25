// Nao altere o arquivo controllers.js manualmente. Ele eh gerado automaticamente via gulp
angular.module('swapi.controllers', [])

.controller('AppCtrl', function($scope, $state) {
})

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

.controller('PeopleCtrl', function($scope, $http, APP_CONFIG) {
  var url = APP_CONFIG.apiBaseUrl + 'people';

  $scope.people = [];

  $scope.loadMore = function() {
    $http.get(url).success(function(items) {

      url = items.next;

      useItems(items.results);

      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  var useItems = function(items) {
      for(var i = 0; i < items.length; i++)
      {
          var id = items[i].url.match(/\d/);
          items[i].id = id[0];

          $scope.people.push(items[i]);
      }
  }

  $scope.moreDataCanBeLoaded = function() {
      if(url != null) {
          return true;
      }

      return false;
  }
})

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5Db250cm9sbGVyLmpzIiwiYXBwQ3RybC5qcyIsImZpbG1zQ3RybC5qcyIsInBlb3BsZUN0cmwuanMiLCJwZXJzb25DdHJsLmpzIiwicGxhbmV0c0N0cmwuanMiLCJzaW5nbGVQbGFuZXRDdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbnRyb2xsZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmFvIGFsdGVyZSBvIGFycXVpdm8gY29udHJvbGxlcnMuanMgbWFudWFsbWVudGUuIEVsZSBlaCBnZXJhZG8gYXV0b21hdGljYW1lbnRlIHZpYSBndWxwXG5hbmd1bGFyLm1vZHVsZSgnc3dhcGkuY29udHJvbGxlcnMnLCBbXSlcbiIsIi5jb250cm9sbGVyKCdBcHBDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUpIHtcbn0pXG4iLCIuY29udHJvbGxlcignRmlsbXNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgQVBQX0NPTkZJRykge1xuICB2YXIgdXJsID0gQVBQX0NPTkZJRy5hcGlCYXNlVXJsICsgJ2ZpbG1zJztcblxuICAkc2NvcGUuZmlsbXMgPSBbXTtcblxuICAkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgdmFyIGZpbG1zID0gcmVzcG9uc2UucmVzdWx0cztcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWxtcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBpZCA9IGZpbG1zW2ldLnVybC5tYXRjaCgvXFxkLyk7XG4gICAgICAgIGZpbG1zW2ldLmlkID0gaWRbMF07XG4gICAgfVxuXG4gICAgJHNjb3BlLmZpbG1zID0gZmlsbXM7XG5cbiAgICBjb25zb2xlLmxvZyhmaWxtcyk7XG5cbiAgfSk7XG59KVxuIiwiLmNvbnRyb2xsZXIoJ1Blb3BsZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCBBUFBfQ09ORklHKSB7XG4gIHZhciB1cmwgPSBBUFBfQ09ORklHLmFwaUJhc2VVcmwgKyAncGVvcGxlJztcblxuICAkc2NvcGUucGVvcGxlID0gW107XG5cbiAgJHNjb3BlLmxvYWRNb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgJGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbihpdGVtcykge1xuXG4gICAgICB1cmwgPSBpdGVtcy5uZXh0O1xuXG4gICAgICB1c2VJdGVtcyhpdGVtcy5yZXN1bHRzKTtcblxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbC5pbmZpbml0ZVNjcm9sbENvbXBsZXRlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHVzZUl0ZW1zID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgICB2YXIgaWQgPSBpdGVtc1tpXS51cmwubWF0Y2goL1xcZC8pO1xuICAgICAgICAgIGl0ZW1zW2ldLmlkID0gaWRbMF07XG5cbiAgICAgICAgICAkc2NvcGUucGVvcGxlLnB1c2goaXRlbXNbaV0pO1xuICAgICAgfVxuICB9XG5cbiAgJHNjb3BlLm1vcmVEYXRhQ2FuQmVMb2FkZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmKHVybCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSlcbiIsIi5jb250cm9sbGVyKCdQZXJzb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJHN0YXRlUGFyYW1zLCBBUFBfQ09ORklHKSB7XG4gIHZhciBpZCA9ICRzdGF0ZVBhcmFtcy5pZDtcbiAgdmFyIHVybCA9IEFQUF9DT05GSUcuYXBpQmFzZVVybCArICdwZW9wbGUvJyArIGlkO1xuXG4gICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICB2YXIgcGVyc29uID0gcmVzcG9uc2U7XG5cbiAgICB2YXIgZmlsbXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGVyc29uLmZpbG1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHBlcnNvbi5maWxtc1tpXS5tYXRjaCgvXFxkLyk7XG5cbiAgICAgICAgdmFyIGZpbG0gPSB7XG4gICAgICAgICAgJ2lkJzogaWRbMF0sXG4gICAgICAgICAgJ3VybCc6IHBlcnNvbi5maWxtc1tpXVxuICAgICAgICB9XG4gICAgICAgIGZpbG1zLnB1c2goZmlsbSk7XG4gICAgfVxuXG4gICAgcGVyc29uLmZpbG1zID0gZmlsbXM7XG5cbiAgICBjb25zb2xlLmxvZyhwZXJzb24uZmlsbXMpO1xuXG4gICAgJHNjb3BlLnBlcnNvbiA9IHBlcnNvbjtcbiAgfSk7XG59KVxuIiwiLmNvbnRyb2xsZXIoJ1BsYW5ldHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgQVBQX0NPTkZJRyl7XG4gIHZhciB1cmxQbGFuZXQgPSBBUFBfQ09ORklHLmFwaUJhc2VVcmwgKyAncGxhbmV0cy8nO1xuXG4gICRzY29wZS5wbGFuZXRzID0gW107XG5cbiAgJHNjb3BlLmxvYWRNb3JlUGxhbmV0cyA9IGZ1bmN0aW9uKCkge1xuICAgICRodHRwLmdldCh1cmxQbGFuZXQpLnN1Y2Nlc3MoZnVuY3Rpb24oaXRlbXMpIHtcblxuICAgICAgdXJsUGxhbmV0ID0gaXRlbXMubmV4dDtcblxuICAgICAgdXNlSXRlbXMoaXRlbXMucmVzdWx0cyk7XG5cbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdzY3JvbGwuaW5maW5pdGVTY3JvbGxDb21wbGV0ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB1c2VJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgICAgdmFyIGlkID0gaXRlbXNbaV0udXJsLm1hdGNoKC9cXGQvKTtcbiAgICAgICAgICBpdGVtc1tpXS5pZCA9IGlkWzBdO1xuXG4gICAgICAgICAgJHNjb3BlLnBsYW5ldHMucHVzaChpdGVtc1tpXSk7XG4gICAgICB9XG4gIH1cblxuICAkc2NvcGUubW9yZVBsYW5ldENhbkJlTG9hZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZih1cmxQbGFuZXQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pXG4iLCIuY29udHJvbGxlcignc2luZ2xlUGxhbmV0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZVBhcmFtcywgQVBQX0NPTkZJRykge1xuICB2YXIgaWQgPSAkc3RhdGVQYXJhbXMuaWQ7XG4gIHZhciB1cmwgPSBBUFBfQ09ORklHLmFwaUJhc2VVcmwgKyAncGxhbmV0cy8nICsgaWQ7XG5cbiAgJGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHZhciBwbGFuZXQgPSByZXNwb25zZTtcblxuICAgIHZhciBmaWxtcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFuZXQuZmlsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGlkID0gcGxhbmV0LmZpbG1zW2ldLm1hdGNoKC9cXGQvKTtcblxuICAgICAgICB2YXIgZmlsbSA9IHtcbiAgICAgICAgICAnaWQnOiBpZFswXSxcbiAgICAgICAgICAndXJsJzogcGxhbmV0LmZpbG1zW2ldXG4gICAgICAgIH1cbiAgICAgICAgZmlsbXMucHVzaChmaWxtKTtcbiAgICB9XG5cbiAgICBwbGFuZXQuZmlsbXMgPSBmaWxtcztcblxuICAgICRzY29wZS5wbGFuZXQgPSBwbGFuZXQ7XG4gIH0pO1xufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
