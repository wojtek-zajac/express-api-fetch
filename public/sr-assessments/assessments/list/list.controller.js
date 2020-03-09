angular.module('srAssessments.assessments')
    .controller('AssessmentsListCtrl', AssessmentsListCtrl)

function AssessmentsListCtrl($resource) {
    const $ctrl = this
    const resource = $resource('/assessments')

    $ctrl.data = {
        totalFound: null,
        showingNumber: null,
        assessments: []
    }

    resource.get().$promise
        .then(response => {
            $ctrl.data.totalFound = response.data.totalFound
            $ctrl.data.assessments = response.data.content
            $ctrl.data.showingNumber = response.data.content.length
        }, () => {
            /* eslint-disable no-undef */
            alert('Could not fetch assessments... Please try again later.')
            /* eslint-enable no-undef */
        })
}
