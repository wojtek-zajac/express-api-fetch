angular.module('srAssessments.comments')
    .component('commentsList', {
        controller: 'CommentsListCtrl',
        template:
            '<list-comment-item ng-repeat="comment in $ctrl.comments" comment="comment"></list-comment-item>'
    })
