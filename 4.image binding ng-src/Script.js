
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var bird={
                        name: "Sparo",
                        country: "Bangladesh",
                        image: "../images/bird.jpg"
                    };
                    $scope.bird=bird;
                });

