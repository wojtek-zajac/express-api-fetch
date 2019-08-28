angular.module('srAssessments.configs')
    .controller('ConfigsListCtrl', ConfigsListCtrl)

function ConfigsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/configs')

    resource.get().$promise
        .then(response => {
            ctrl.configs = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Could not fetch configs... Please try again later.')
            /* eslint-enable no-undef */
        })
}
