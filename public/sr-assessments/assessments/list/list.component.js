angular.module('srAssessments.assessments')
    .component('assessmentsList', {
        controller: 'AssessmentsListCtrl',
        template:
            '<list-assessment-item ng-repeat="assessment in $ctrl.assessments" assessment="assessment"></list-assessment-item>'
    })
