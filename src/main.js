

var app = angular.module('toolTipApp', ['ui.bootstrap', 'angularEffDrop']);


app.controller('mainController', function($scope, $http, $rootScope, $window) {

  var Tooltip = $window.Tooltip;
  var Tether = $window.Tether;
  var Drop = $window.Drop;

  console.log('loaded!');

  $http.get('/sampleData.json')
       .then(function(res, err){
          $scope.records = res.data;
          if (err){
            console.log(err);
          }
        });

  $scope.hoverIn = function(activeRecord){
    // $scope.focusedElementIndex = this.$index;
    // this.activeRow = activeRecord;
    console.log('lkdsfjsld');
    var target1 = angular.element(document).find('#bigtest');
    console.log(activeRecord);
    new Tooltip({
      target: activeRecord,
      position: 'top left',
      content: "My awesome <b>content</b>.",
      classes: 'my-tether-theme'
    });
  };

  $scope.hideToolTip = function(index){
    $scope.focusedElementIndex = null;
  };

  $scope.toggleTooltip = function(element){
    if(this.$index === $scope.focusedElementIndex){
      return true;
    }else{
      return false;
    }
  };


  $scope.sampleData = {
    name: 'Out of Galaxy',
    logo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/321732-aee03e6d48b1bbe6bd83db6bb1296b1b-medium_jpg.jpg?buster=1389513653',
    bio: 'Similar to a fitness tracker H2O-Pal is a hydration tracker that works with your water bottle. It makes your life easier by helping you drink more water and fewer calories. Many people mistreat the symptoms of dehydration using coffee and medicine, when what they really need is water.',
    tags: ['Fitness', 'Great', 'Lovely']
  };


});


app.directive('myDrop', ['dropWrapper', function($drop) {
    return {
      restrict: 'EA',
      scope: { elem: '=myDrop', fn: '=callback' },
      link: function(scope, elem) {
        var drop = $drop({
            target: elem,
            scope: scope,
            templateUrl: 'partials/tooltip.html',
            position: 'bottom left',
            constrainToWindow: true,
            constrainToScrollParent: true,
            classes: 'drop-theme-arrows-bounce-dark',
            tetherOptions:{},
            openOn: 'hover' // openOn: 'hover', openDelay: 500
        });
        scope.drop = drop;
        scope.custom_close = function(text) {
          scope.fn(text);
          scope.drop.close();
        }
      }
    };
  }]);
