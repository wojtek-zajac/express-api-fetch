angular.module('srAssessments.attachments')
    .component('attachmentsList', {
        controller: 'AttachmentsListCtrl',
        template:
            '<list-attachment-item ng-repeat="attachment in $ctrl.attachments" attachment="attachment"></list-attachment-item>'
    })
