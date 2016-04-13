

var app = angular.module('toolTipApp', ['ui.bootstrap']);


app.controller('mainController', function($scope, $http, $rootScope) {

  console.log('loaded!');

  $http.get('/sampleData.json')
       .then(function(res, err){
          $scope.records = res.data;
          if (err){
            console.log(err);
          }
        });

  $scope.hoverIn = function(activeRecord){
    $scope.activeRow = activeRecord;
  };

});

app.directive('tooltip', function($compile, $templateRequest) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // Get the template to put in the tooltip
      $templateRequest(attrs.tooltip).then(function(html){

          // Get the template
          var template = angular.element(html);
          $compile(template)(scope);
          angular.element(document).append(template);

          // Create the Drop (tooltip) element
          drop = new Drop({
            target: element[0],
            content: template[0],
            position: 'right top',
            openOn: 'hover',
            tetherOptions: {offset: '0 -10px'}
          });
      })
    }
  }
})
