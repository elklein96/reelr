(function () {
    'use strict';

    angular
        .module('reelr.movies')
        .directive('preview', preview);

    preview.$inject = ['$rootScope'];

    /* @ngInject */
    function preview($rootScope) {
        return {
            restrict: 'E',
            scope: {
            },
            templateUrl: '/app/partials/preview.html',
            link: function(scope, element, attrs) {
                console.log("preview directive");
            }
        };
    }
})();