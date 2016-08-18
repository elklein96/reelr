(function () {
    'use strict';

    angular
        .module('reelr.movies.controller', [])
        .controller('moviesController', moviesController);

    moviesController.$inject = ['$scope'];

    /* @ngInject */
    function moviesController($scope){
        console.log("movies controller");
    	$scope.movies = [{title: "Toy Story"}, {title: "Inception"}];
    }

})();