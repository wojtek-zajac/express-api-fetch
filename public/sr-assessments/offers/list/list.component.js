angular.module('srAssessments.offers')
    .component('offersList', {
        controller: 'OffersListCtrl',
        template:
            '<list-offer-item ng-repeat="offer in $ctrl.offers" offer="offer"></list-offer-item>'
    })
