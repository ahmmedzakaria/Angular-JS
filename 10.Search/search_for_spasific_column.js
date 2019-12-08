
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var employees=[
                        {name:'Zakaria', gender:'Male', salary:30000, city:'Dhaka'},
                        {name:'Roksana', gender:'Female', salary:40000, city:'Chitagong'},
                        {name:'Shimul', gender:'Male', salary:50000, city:'Chadpur'},
                        {name:'Abdullah', gender:'Male', salary:60000, city:'Foridpur'}
                    ];
                    $scope.employees=employees;
                    $scope.customSearch=function(item){
                        if($scope.searchText==undefined){
                            return true;
                        }else{
                            if(item.name.toLocaleLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.name.toLocaleLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
                                return true;
                            }
                        }
                        return false;
                    }
                   
                });

