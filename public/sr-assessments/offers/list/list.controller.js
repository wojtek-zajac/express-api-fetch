angular.module('srAssessments.offers')
    .controller('OffersListCtrl', OffersListCtrl)

function OffersListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/offers')

    resource.get().$promise
        .then(response => {
            ctrl.offers = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Something went wrong... Please try again later.')
            /* eslint-enable no-undef */
        })
}
