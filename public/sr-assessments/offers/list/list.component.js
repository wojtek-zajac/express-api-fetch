angular.module('srAssessments.offers')
    .component('offersList', {
        controller: 'OffersListCtrl',
        template:
            '<list-item ng-repeat="offer in $ctrl.offers" offer="offer"></list-item>'
    })
