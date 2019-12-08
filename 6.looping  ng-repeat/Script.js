
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                    var persons=[
                        {fName: 'Arif', lName: 'Mirdha' , gender: 'Male'},
                        {fName: 'Saddam', lName: 'Hossain' , gender: 'Male'},
                        {fName: 'Imam', lName: 'Hossain' , gender: 'Male'}
                    ]
                    $scope.persons=persons;
                });

