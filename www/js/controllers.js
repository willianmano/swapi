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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5Db250cm9sbGVyLmpzIiwiYXBwQ3RybC5qcyIsImZpbG1zQ3RybC5qcyIsInBlb3BsZUN0cmwuanMiLCJwZXJzb25DdHJsLmpzIiwicGxhbmV0c0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOYW8gYWx0ZXJlIG8gYXJxdWl2byBjb250cm9sbGVycy5qcyBtYW51YWxtZW50ZS4gRWxlIGVoIGdlcmFkbyBhdXRvbWF0aWNhbWVudGUgdmlhIGd1bHBcbmFuZ3VsYXIubW9kdWxlKCdzd2FwaS5jb250cm9sbGVycycsIFtdKVxuIiwiLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSkge1xufSlcbiIsIi5jb250cm9sbGVyKCdGaWxtc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCBBUFBfQ09ORklHKSB7XG4gIHZhciB1cmwgPSBBUFBfQ09ORklHLmFwaUJhc2VVcmwgKyAnZmlsbXMnO1xuXG4gICRzY29wZS5maWxtcyA9IFtdO1xuXG4gICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICB2YXIgZmlsbXMgPSByZXNwb25zZS5yZXN1bHRzO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbG1zLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGlkID0gZmlsbXNbaV0udXJsLm1hdGNoKC9cXGQvKTtcbiAgICAgICAgZmlsbXNbaV0uaWQgPSBpZFswXTtcbiAgICB9XG5cbiAgICAkc2NvcGUuZmlsbXMgPSBmaWxtcztcblxuICAgIGNvbnNvbGUubG9nKGZpbG1zKTtcblxuICB9KTtcbn0pXG4iLCIuY29udHJvbGxlcignUGVvcGxlQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIEFQUF9DT05GSUcpIHtcbiAgdmFyIHVybCA9IEFQUF9DT05GSUcuYXBpQmFzZVVybCArICdwZW9wbGUnO1xuXG4gICRzY29wZS5wZW9wbGUgPSBbXTtcblxuICAkc2NvcGUubG9hZE1vcmUgPSBmdW5jdGlvbigpIHtcbiAgICAkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uKGl0ZW1zKSB7XG5cbiAgICAgIHVybCA9IGl0ZW1zLm5leHQ7XG5cbiAgICAgIHVzZUl0ZW1zKGl0ZW1zLnJlc3VsdHMpO1xuXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsLmluZmluaXRlU2Nyb2xsQ29tcGxldGUnKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdXNlSXRlbXMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICAgIHZhciBpZCA9IGl0ZW1zW2ldLnVybC5tYXRjaCgvXFxkLyk7XG4gICAgICAgICAgaXRlbXNbaV0uaWQgPSBpZFswXTtcblxuICAgICAgICAgICRzY29wZS5wZW9wbGUucHVzaChpdGVtc1tpXSk7XG4gICAgICB9XG4gIH1cblxuICAkc2NvcGUubW9yZURhdGFDYW5CZUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KVxuIiwiLmNvbnRyb2xsZXIoJ1BlcnNvbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGVQYXJhbXMsIEFQUF9DT05GSUcpIHtcbiAgdmFyIGlkID0gJHN0YXRlUGFyYW1zLmlkO1xuICB2YXIgdXJsID0gQVBQX0NPTkZJRy5hcGlCYXNlVXJsICsgJ3Blb3BsZS8nICsgaWQ7XG5cbiAgJGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHZhciBwZXJzb24gPSByZXNwb25zZTtcblxuICAgIHZhciBmaWxtcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZXJzb24uZmlsbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGlkID0gcGVyc29uLmZpbG1zW2ldLm1hdGNoKC9cXGQvKTtcblxuICAgICAgICB2YXIgZmlsbSA9IHtcbiAgICAgICAgICAnaWQnOiBpZFswXSxcbiAgICAgICAgICAndXJsJzogcGVyc29uLmZpbG1zW2ldXG4gICAgICAgIH1cbiAgICAgICAgZmlsbXMucHVzaChmaWxtKTtcbiAgICB9XG5cbiAgICBwZXJzb24uZmlsbXMgPSBmaWxtcztcblxuICAgIGNvbnNvbGUubG9nKHBlcnNvbi5maWxtcyk7XG5cbiAgICAkc2NvcGUucGVyc29uID0gcGVyc29uO1xuICB9KTtcbn0pXG4iLCIuY29udHJvbGxlcignUGxhbmV0c0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCBBUFBfQ09ORklHKXtcbiAgdmFyIHVybFBsYW5ldCA9IEFQUF9DT05GSUcuYXBpQmFzZVVybCArICdwbGFuZXRzLyc7XG5cbiAgJHNjb3BlLnBsYW5ldHMgPSBbXTtcblxuICAkc2NvcGUubG9hZE1vcmVQbGFuZXRzID0gZnVuY3Rpb24oKSB7XG4gICAgJGh0dHAuZ2V0KHVybFBsYW5ldCkuc3VjY2VzcyhmdW5jdGlvbihpdGVtcykge1xuXG4gICAgICB1cmxQbGFuZXQgPSBpdGVtcy5uZXh0O1xuXG4gICAgICB1c2VJdGVtcyhpdGVtcy5yZXN1bHRzKTtcblxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbC5pbmZpbml0ZVNjcm9sbENvbXBsZXRlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHVzZUl0ZW1zID0gZnVuY3Rpb24oaXRlbXMpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgICB2YXIgaWQgPSBpdGVtc1tpXS51cmwubWF0Y2goL1xcZC8pO1xuICAgICAgICAgIGl0ZW1zW2ldLmlkID0gaWRbMF07XG5cbiAgICAgICAgICAkc2NvcGUucGxhbmV0cy5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgIH1cbiAgfVxuXG4gICRzY29wZS5tb3JlUGxhbmV0Q2FuQmVMb2FkZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmKHVybFBsYW5ldCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
