angular.module('srAssessments.goTo')
    .controller('GoToCtrl', ['$scope', GoToCtrl])

function GoToCtrl($scope) {
    $scope.goTo = function(location) {
        window.location = location
    }
}
