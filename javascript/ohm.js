var ohmApp = angular.module('ohmApp', ['ngRoute']);

ohmApp.config(function($routeProvider) {
	$routeProvider
	.when( '/', {
		templateUrl: 'templates/home.html',
		controller: 'mainController'
	})
	.when( '/open', {
		templateUrl: 'templates/open.html',
		controller: 'mainController'
	})
	.when( '/contribute', {
		templateUrl: 'templates/contribute.html',
		controller: 'mainController'
	})
	.when( '/ongoing', {
		templateUrl: 'templates/ongoing.html',
		controller: 'mainController'
	})
	.when( '/transient', {
		templateUrl: 'templates/transient.html',
		controller: 'mainController'
	})
});

ohmApp.controller('mainController', function($scope) {
	
});

// etc etc