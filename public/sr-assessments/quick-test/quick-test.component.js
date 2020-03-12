angular
    .module('quickTest')
    .controller('quickTestController', ['$scope', '$resource', quickTestController])

function quickTestController($scope) {
    $scope.questions = {
        answer_1: undefined,
        answer_2: undefined,
        answer_3: undefined
    }

    $scope.submitAnswers = function () {
    }
}
