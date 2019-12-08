
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employee={
                        firstName: "Zakaria",
                        lastname: "Ahmmed",
                        gender: "Male"
                    };
                    $scope.employee=employee;
                });

