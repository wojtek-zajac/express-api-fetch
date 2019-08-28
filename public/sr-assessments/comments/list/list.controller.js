angular.module('srAssessments.comments')
    .controller('CommentsListCtrl', CommentsListCtrl)

function CommentsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/assessments/:assessmentOrderId/comments',
        {assessmentOrderId: '58b055e3e4b029a4a26a6c77'})

    resource.get().$promise
        .then(response => {
            ctrl.comments = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Could not fetch comments... Please try again later.')
            /* eslint-enable no-undef */
        })
}
