var app =angular.module("emplypeeModel",[]);
app.controller("employeeCtrl",function($scope){
   $scope.test="hello"; 
    $scope.employees=[
        {name: "Zakaria", salary: "30000"},
        {name: "Arif" , salary: "40000"}
    ];
    $scope.employeeTable="Employee.html";
    $scope.header="header.html";
});