var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when("/home",{
			templateUrl : "views/home.html",
			controller : "homeController"
		})
		.when("/realisaties", {
			templateUrl : "views/realisaties.html",
			controller : "realisatieController"
		})
		.when("/contact", {
			templateUrl : "views/contact.html",
			controller : "contactController"
		});
});

app.controller("homeController", function($scope){
	$scope.title = "Home";
});

app.controller("realisatieController", function($scope){
	$scope.title = "Realisaties";
});

app.controller("contactController", function($scope){
	$scope.title = "Contact";
});