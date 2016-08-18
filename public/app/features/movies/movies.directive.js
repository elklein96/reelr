(function () {
    'use strict';

    angular
        .module('reelr.movies.directive', [])
        .directive('movie', movie);

    movie.$inject = ['$rootScope'];

    /* @ngInject */
    function movie($rootScope) {
        return {
            restrict: 'E',
            scope: {
              movie: '='
            },
            templateUrl: '/app/partials/movie.html',
            link: function(scope, element, attrs) {
                console.log("movies directive");
            }
        };
    }
})();