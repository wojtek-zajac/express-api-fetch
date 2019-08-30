angular.module('srAssessments.results')
    .component('listResultItem', {
        bindings: {
            result: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.result.id }}</p>
                <p>{{ $ctrl.result.title }}</p>
                <p>{{ $ctrl.result.score }}</p>
            </div>
            <br>`
    })
