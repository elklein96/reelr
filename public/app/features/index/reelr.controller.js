(function () {
    'use strict';

    angular
        .module('reelr.controller', [])
        .controller('reelrController', reelrController);

    reelrController.$inject = ['$scope'];

    /* @ngInject */
    function reelrController($scope){
    	console.log("reelr controller");

    	$scope.foo = "reelr main";
    }

})();