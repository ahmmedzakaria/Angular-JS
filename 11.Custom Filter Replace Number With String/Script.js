
var mayApp = angular
                .module("myModule", [])
                .filter("filterGender",function(){
                    return function(gender){
                        switch(gender){
                            case 1:
                                return 'Male';
                            case 2:
                                return 'Female';
                            case 3:
                                return 'Not Discolsed';
                                     }
                    }
                })
                .controller("myController", function ($scope) {
                    var employees=[
                        {name:'Zakaria', gender:1, salary:30000, city:'Dhaka'},
                        {name:'Roksana', gender:2, salary:40000, city:'Chitagong'},
                        {name:'Shimul', gender:1, salary:50000, city:'Chadpur'},
                        {name:'Abdullah', gender:1, salary:60000, city:'Foridpur'},
                        {name:'Been', gender:3, salary:60000, city:'Foridpur'}
                    ];
                    $scope.employees=employees;
                   
                });

