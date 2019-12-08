
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var divisions=[
                        {
                            name: 'Dhaka',
                            districts:[
                               { name: 'Gazipur'},
                                {name: 'Foridput'},
                                {name: 'Gopalgonj'},
                               { name: 'Norshindi'}
                            ]
                        },
                         {
                            name: 'Chitagong',
                            districts:[
                                {name: 'Comilla'},
                                {name: 'Chadpur'},
                                {name: 'Noakhali'},
                                {name: 'Lokhipur'}
                            ]
                        },
                    ]
                    $scope.divisions=divisions;
                });

