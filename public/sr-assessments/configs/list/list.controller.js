angular.module('srAssessments.configs')
    .controller('ConfigsListCtrl', ConfigsListCtrl)

function ConfigsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('http://localhost:8051/configs')

    resource.get().$promise
        .then(response => {
            ctrl.configs = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Something went wrong... Please try again later.')
            /* eslint-enable no-undef */
        })
}
