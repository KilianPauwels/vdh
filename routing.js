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
        .when("/recensies", {
            templateUrl:"views/recensies.html",
            controller : "recensieController"
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

	$scope.photos = [
        {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

});

app.controller("contactController", function($scope){
	$scope.title = "Contact";
});

app.controller("recensieController", function($scope){
    $scope.title = "Recensies";

    $scope.naam="";
    $scope.recensie="";

    

    this.upload = function(){
        console.log("user clicked upload", this.recensie);
        firebase.database().ref('recensies/' + recensieId).push({
            naam: this.naam,
            recensie: this.recensie
        });
    };

});