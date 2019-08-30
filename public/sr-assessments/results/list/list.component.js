angular.module('srAssessments.results')
    .component('resultsList', {
        controller: 'ResultsListCtrl',
        template:
            '<list-result-item ng-repeat="result in $ctrl.results" result="result"></list-result-item>'
    })
