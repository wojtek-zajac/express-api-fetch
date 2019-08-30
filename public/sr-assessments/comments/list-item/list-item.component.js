angular.module('srAssessments.comments')
    .component('listCommentItem', {
        bindings: {
            comment: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.comment.id }}</p>
                <p>{{ $ctrl.comment.message }}</p>
            </div>
            <br>`
    })
