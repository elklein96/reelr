(function () {
    'use strict';

    angular
        .module('reelr.movies')
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
                scope.onhover = function() {
                    console.log("onhover");
                    // attrs.$$element.find(".overlay").css({"background-color" : "#000"});
                };

                scope.onleave = function() {
                    console.log("onleave");
                };
            }
        };
    }
})();