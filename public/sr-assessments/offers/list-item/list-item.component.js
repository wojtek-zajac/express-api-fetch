angular.module('srAssessments.offers')
    .component('listItem', {
        bindings: {
            offer: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.offer.status }}</p>
                <p> {{ $ctrl.offer.id }}</p>
                <p>{{ $ctrl.offer.candidate.name }}</p>
            </div>
            <br>`
    })
