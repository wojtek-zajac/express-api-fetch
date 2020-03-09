angular.module('srAssessments.assessments')
    .component('listAssessmentItem', {
        bindings: {
            assessment: '<'
        },
        templateUrl: './public/sr-assessments/assessments/list-item/list-item.template.html'
    })
