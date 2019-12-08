
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees=[
                        {name: "Zakaria", dob: new Date("November 23 2011"), gender: "Male", salary: 50500.788},
                        {name: "Arif", dob: new Date("November 23 2011"), gender: "Male", salary: 5600.788},
                        {name: "Emon", dob: new Date("May 11 2014"), gender: "Male", salary: 66000.788},
                        {name: "Habib", dob: new Date("August 13 2013"), gender: "Male", salary: 7000},
                        {name: "Asad", dob: new Date("January 17 2013"), gender: "Male", salary: 5800},
                        {name: "Shamim", dob: new Date("April 1 2013"), gender: "Male", salary: 6800},
                    ]
                    $scope.employees=employees;
                    $scope.sortColumn='name';
                    $scope.reverseSort=false;
                    
                    $scope.sortData=function(colum){
                        $scope.reverseSort=($scope.sortColumn==colum)? !$scope.reverseSort :false;
                        $scope.sortColumn=colum;
                    }
                    
                    $scope.getSortClass=function(colum){
                        if($scope.sortColumn==colum){
                            return $scope.reverseSort ? 'arrow-down' :'arrow-up'
                        }
                        return '';
                    }
                });

