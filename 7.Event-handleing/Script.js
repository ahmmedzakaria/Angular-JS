
var mayApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {
                        var techonologies=[
                            {name: "Java", likes:0, dislikes:0},
                            {name: "C#", likes:0, dislikes:0},
                            {name: "JavaScrit", likes:0, dislikes:0},
                            {name: "PHP", likes:0, dislikes:0},
                            {name: "Python", likes:0, dislikes:0},
                            {name: "Scala", likes:0, dislikes:0}
                        ]
                    $scope.techonologies=techonologies;
                    
                    $scope.incrementLikes=function(techonlogy){
                        techonlogy.likes++;
                    }
                    
                     $scope.incrementDisLikes=function(techonlogy){
                        techonlogy.dislikes++;
                    }
                });

