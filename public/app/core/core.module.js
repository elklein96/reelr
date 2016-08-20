(function () {
    'use strict';

    angular
        .module('reelr.core', [])
        .factory('moviesFactory', moviesFactory);

        moviesFactory.$inject = ['$http', '$q'];

    	/* @ngInject */
        function moviesFactory($http, $q) {
        
	    	var service = {
	    		getMovies: getMovies
	    	};

	    	return service;

	        function getMovies() {
	        	return $http.put("/api/movies")
	        		.then(moviesSuccess)
	        		.catch(moviesError);
	        }

	        function moviesSuccess(res) {
	        	return res.data;
	        }

	        function moviesError(err) {
	        	return $q.reject(err);
	        }
    	}
})();
