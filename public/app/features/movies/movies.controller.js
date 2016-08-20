(function () {
    'use strict';

    angular
        .module('reelr.movies')
        .controller('moviesController', moviesController);

    moviesController.$inject = ['$scope', '$q', 'moviesFactory'];

    /* @ngInject */
    function moviesController($scope, $q, moviesFactory){
        $scope.movies = {};
        $scope.display = false;

        $scope.toggleDisplay = function() {
            $scope.display = !$scope.display;
        };

        moviesFactory.getMovies().then(function(data) {
            $scope.movies = data.movies;
        });
    }

})();