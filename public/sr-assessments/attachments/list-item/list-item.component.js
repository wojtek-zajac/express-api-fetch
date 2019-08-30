angular.module('srAssessments.attachments')
    .component('listAttachmentItem', {
        bindings: {
            attachment: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.attachment.id }}</p>
                <p>{{ $ctrl.attachment.createDate }}</p>
                <p>{{ $ctrl.attachment.fileName }}</p>
            </div>
            <br>`
    })
