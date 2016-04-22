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
