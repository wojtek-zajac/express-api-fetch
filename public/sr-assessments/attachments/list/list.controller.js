angular.module('srAssessments.attachments')
    .controller('AttachmentsListCtrl', AttachmentsListCtrl)

function AttachmentsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/assessments/:assessmentOrderId/results/:resultId/attachments',
        {
            assessmentOrderId: '58b055e3e4b029a4a26a6c77',
            resultId: '5d4354bc9985c62db17fcba3'
        })

    resource.get().$promise
        .then(response => {
            ctrl.attachments = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Could not fetch attachments... Please try again later.')
            /* eslint-enable no-undef */
        })
}
