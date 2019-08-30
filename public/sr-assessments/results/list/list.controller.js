angular.module('srAssessments.results')
    .controller('ResultsListCtrl', ResultsListCtrl)

function ResultsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/assessments/:assessmentOrderId/results',
        {assessmentOrderId: '58b055e3e4b029a4a26a6c77'})

    resource.get().$promise
        .then(response => {
            ctrl.results = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Could not fetch results... Please try again later.')
            /* eslint-enable no-undef */
        })
}
