(function () {
    'use strict';

    angular
        .module('reelr.main')
        .directive('reelrDirective', reelrDirective);

    reelrDirective.$inject = ['$rootScope'];

    /* @ngInject */
    function reelrDirective($rootScope) {
        return {
            restrict: 'E',
            scope: {
            	foo: "bar"
            },
            templateUrl: 'app/features/index/main.html',
            link: function(scope, element, attrs) {
                console.log("fire");
            }
        };
    }
})();