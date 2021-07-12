(function() {

    var app = angular.module('myapp', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html'
            })
            .when('/coffee', {
                controller: 'coffeeController',
                templateUrl: 'app/views/coffee.html'
            })
            .when('/drinks', {
                controller: 'drinksController',
                templateUrl: 'app/views/drinks.html'
            })
            .when('/snacks', {
                controller: 'snacksController',
                templateUrl: 'app/views/snacks.html'
            })
            .when('/sweets', {
                controller: 'sweetsController',
                templateUrl: 'app/views/sweets.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());