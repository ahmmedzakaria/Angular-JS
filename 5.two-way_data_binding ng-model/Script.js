
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var person1={
                        fName:'Zakaria',
                        lName:'Ahmmed',
                        gender:'Male'
                    };
                    $scope.person=person1;
                });

