angular.module('srAssessments.assessments')
    .component('listItem', {
        bindings: {
            assessment: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.assessment.status }}</p>
                <p> {{ $ctrl.assessment.id }}</p>
                <p>{{ $ctrl.assessment.candidate.firstName }} {{ $ctrl.assessment.candidate.lastName }}</p>
            </div>
            <br>`
    })
