angular.module('srAssessments.assessments')
    .component('assessmentsList', {
        controller: 'AssessmentsListCtrl',
        template:
            '<list-item ng-repeat="assessment in $ctrl.assessments" assessment="assessment"></list-item>'
    })
