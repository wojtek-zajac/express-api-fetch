angular.module('srAssessments.assessments')
    .component('listItem', {
        bindings: {
            assessment: '<'
        },
        template:
            '<p>{{ $ctrl.assessment.id }}</p>'
    })
