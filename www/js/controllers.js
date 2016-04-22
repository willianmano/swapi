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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5Db250cm9sbGVyLmpzIiwiYXBwQ3RybC5qcyIsImZpbG1zQ3RybC5qcyIsInBlb3BsZUN0cmwuanMiLCJwZXJzb25DdHJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb250cm9sbGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5hbyBhbHRlcmUgbyBhcnF1aXZvIGNvbnRyb2xsZXJzLmpzIG1hbnVhbG1lbnRlLiBFbGUgZWggZ2VyYWRvIGF1dG9tYXRpY2FtZW50ZSB2aWEgZ3VscFxuYW5ndWxhci5tb2R1bGUoJ3N3YXBpLmNvbnRyb2xsZXJzJywgW10pXG4iLCIuY29udHJvbGxlcignQXBwQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlKSB7XG59KVxuIiwiLmNvbnRyb2xsZXIoJ0ZpbG1zQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIEFQUF9DT05GSUcpIHtcbiAgdmFyIHVybCA9IEFQUF9DT05GSUcuYXBpQmFzZVVybCArICdmaWxtcyc7XG5cbiAgJHNjb3BlLmZpbG1zID0gW107XG5cbiAgJGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHZhciBmaWxtcyA9IHJlc3BvbnNlLnJlc3VsdHM7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsbXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgaWQgPSBmaWxtc1tpXS51cmwubWF0Y2goL1xcZC8pO1xuICAgICAgICBmaWxtc1tpXS5pZCA9IGlkWzBdO1xuICAgIH1cblxuICAgICRzY29wZS5maWxtcyA9IGZpbG1zO1xuXG4gICAgY29uc29sZS5sb2coZmlsbXMpO1xuXG4gIH0pO1xufSlcbiIsIi5jb250cm9sbGVyKCdQZW9wbGVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgQVBQX0NPTkZJRykge1xuICB2YXIgdXJsID0gQVBQX0NPTkZJRy5hcGlCYXNlVXJsICsgJ3Blb3BsZSc7XG5cbiAgJHNjb3BlLnBlb3BsZSA9IFtdO1xuXG4gICRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24oaXRlbXMpIHtcblxuICAgICAgdXJsID0gaXRlbXMubmV4dDtcblxuICAgICAgdXNlSXRlbXMoaXRlbXMucmVzdWx0cyk7XG5cbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdzY3JvbGwuaW5maW5pdGVTY3JvbGxDb21wbGV0ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB1c2VJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgICAgdmFyIGlkID0gaXRlbXNbaV0udXJsLm1hdGNoKC9cXGQvKTtcbiAgICAgICAgICBpdGVtc1tpXS5pZCA9IGlkWzBdO1xuXG4gICAgICAgICAgJHNjb3BlLnBlb3BsZS5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgIH1cbiAgfVxuXG4gICRzY29wZS5tb3JlRGF0YUNhbkJlTG9hZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZih1cmwgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pXG4iLCIuY29udHJvbGxlcignUGVyc29uQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZVBhcmFtcywgQVBQX0NPTkZJRykge1xuICB2YXIgaWQgPSAkc3RhdGVQYXJhbXMuaWQ7XG4gIHZhciB1cmwgPSBBUFBfQ09ORklHLmFwaUJhc2VVcmwgKyAncGVvcGxlLycgKyBpZDtcblxuICAkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgdmFyIHBlcnNvbiA9IHJlc3BvbnNlO1xuXG4gICAgdmFyIGZpbG1zID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlcnNvbi5maWxtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaWQgPSBwZXJzb24uZmlsbXNbaV0ubWF0Y2goL1xcZC8pO1xuXG4gICAgICAgIHZhciBmaWxtID0ge1xuICAgICAgICAgICdpZCc6IGlkWzBdLFxuICAgICAgICAgICd1cmwnOiBwZXJzb24uZmlsbXNbaV1cbiAgICAgICAgfVxuICAgICAgICBmaWxtcy5wdXNoKGZpbG0pO1xuICAgIH1cblxuICAgIHBlcnNvbi5maWxtcyA9IGZpbG1zO1xuXG4gICAgY29uc29sZS5sb2cocGVyc29uLmZpbG1zKTtcblxuICAgICRzY29wZS5wZXJzb24gPSBwZXJzb247XG4gIH0pO1xufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
