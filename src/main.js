

var app = angular.module('toolTipApp', ['ui.bootstrap']);

// app.config(['$uibTooltipProvider', function($uibTooltipProvider){
//   $uibTooltipProvider.setTriggers({
//     'showToolTip': 'hideToolTip'
//   });
// }]);

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
    console.log(this);
    this.showHide = true;
    this.activeRow = activeRecord;
  };

  $scope.hideToolTip = function(index){
    this.showHide = false;
  };


  // $scope.activeRow = {};

  // $scope.test = 'hello';

  $scope.sampleData = {
    name: 'Out of Galaxy',
    logo: 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/321732-aee03e6d48b1bbe6bd83db6bb1296b1b-medium_jpg.jpg?buster=1389513653',
    bio: 'Similar to a fitness tracker H2O-Pal is a hydration tracker that works with your water bottle. It makes your life easier by helping you drink more water and fewer calories. Many people mistreat the symptoms of dehydration using coffee and medicine, when what they really need is water.',
    tags: ['Fitness', 'Great', 'Lovely']
  };


});
