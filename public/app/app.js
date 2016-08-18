(function () {
    'use strict';

    angular
    	.module('reelr', [
    		'ngRoute',
    		'reelr.controller',
    		'reelr.movies.controller',
    		'reelr.movies.directive'
    	]).config(configuration);

        configuration.$inject = ['$routeProvider', '$locationProvider'];
    	
    	/* @ngInject */
        function configuration($routeProvider, $locationProvider) {
        	$routeProvider
            .when('/', {
		    	templateUrl: 'app/features/index/main.html',
		    	controller: 'reelrController'
			})
			.when('/movies', {
		    	templateUrl: 'app/features/movies/movies.html',
		    	controller: 'moviesController'
			})
			.when('/tv', {
		    	templateUrl: 'app/features/tv/tv.html',
		    	controller: 'tvController'
			})
			.otherwise({
				redirectTo: '/'
			});
        	$locationProvider.html5Mode(true);
        }
})();