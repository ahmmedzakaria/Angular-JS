var app=angular.module("Demo", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
            .when("/home",{
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            .when("/courses",{
                templateUrl: "templates/courses.html",
                controller: "coursesController"
            })
        })
        .controller("homeController", function($scope){
            $scope.massage="Home Page";
        })
        .controller("coursesController", function($scope){
            $scope.courses=["Java", "JavaScript", "Kotlin"];
        })