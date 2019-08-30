angular.module('srAssessments.offers')
    .component('listOfferItem', {
        bindings: {
            offer: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.offer.status }}</p>
                <p>{{ $ctrl.offer.id }}</p>
                <p>{{ $ctrl.offer.name }}</p>
            </div>
            <br>`
    })
