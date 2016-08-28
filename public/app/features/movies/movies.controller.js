(function () {
    'use strict';

    angular
        .module('reelr.movies')
        .controller('moviesController', moviesController);

    moviesController.$inject = ['$scope', '$q', '$sce', 'moviesFactory'];

    /* @ngInject */
    function moviesController($scope, $q, $sce, moviesFactory){
        $scope.movies = {};
        $scope.display = false;
        $scope.selected = undefined;

        $scope.toggleDisplay = function(movie) {
            if ($scope.selected === undefined || $scope.selected.title === movie.title || !$scope.display) {
                $scope.display = !$scope.display;
            }
            $scope.selected = movie;
            // $scope.selected = $sce.trustAsHtml('<preview movie="movie"></preview>');
        };

        moviesFactory.getMovies().then(function(data) {
            $scope.movies = data.movies;
        });
    }

})();