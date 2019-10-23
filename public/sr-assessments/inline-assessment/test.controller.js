angular.module('srInlineAssessment.test')
    .controller('QuickTestCtrl', ['$scope', '$resource', QuickTestCtrl]);

function QuickTestCtrl($scope, $resource) {
    $scope.questions = {
        answer_1: undefined,
        answer_2: undefined,
        answer_3: undefined
    };

    $scope.submitAnswers = function () {
        const chunks = document.location.href.split('/');
        const applicationOperationId = chunks[chunks.length - 1];
        const resource = $resource('/inline-assessment/submit/:applicationOperationId', {applicationOperationId: applicationOperationId});
        resource.save($scope.questions).$promise
            .then(response => {
                document.location.href = response.callbackUrl
            }, () => {
                alert('Could not submit your answers. Please try again later.')
            });
    }
}
