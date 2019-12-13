angular.module('srAssessments')
    .config(function($stateProvider) {
        const assessments = {
            name: 'assessments',
            url: '/assessments',
            template: `<br><hr>
                <button ng-click="showAssessmentsList = !showAssessmentsList" class="margin-top--l">GET Assessments</button>
                <assessments-list ng-show="showAssessmentsList">
                    <list-assessment-item></list-assessment-item>
                </assessments-list>
            `
        }
        const results = {
            name: 'results',
            url: '/results',
            template: `<br><hr>
                <button ng-click="showResultsList = !showResultsList" class="margin-top--l">GET Results</button>
                <results-list ng-show="showResultsList">
                    <list-result-item></list-result-item>
                </results-list>
            `
        }
        const attachments = {
            name: 'attachments',
            url: '/attachments',
            template: `<br><hr>
                <button ng-click="showAttachmentsList = !showAttachmentsList" class="margin-top--l">GET Attachments</button>
                <attachments-list ng-show="showAttachmentsList">
                    <list-attachment-item></list-attachment-item>
                </attachments-list>
            `
        }
        const comments = {
            name: 'comments',
            url: '/comments',
            template: `<br><hr>
                <button ng-click="showCommentsList = !showCommentsList" class="margin-top--l">GET Comments</button> 
                <comments-list ng-show="showCommentsList">
                    <list-comment-item></list-comment-item>
                </comments-list>
            `
        }
        const settings = {
            name: 'settings',
            url: '/settings',
            template: `<br><hr>
                <button ng-click="showOffersList = !showOffersList" class="margin-top--l">GET Offers</button>
                <offers-list ng-show="showOffersList">
                    <list-offer-item></list-offer-item>
                </offers-list>
                <br><hr>
                <button ng-click="showConfigsList = !showConfigsList" class="margin-top--l">GET Configs</button>
                <configs-list ng-show="showConfigsList">
                    <list-config-item></list-config-item>
                </configs-list>
            `
        }

        $stateProvider.state(assessments);
        $stateProvider.state(results);
        $stateProvider.state(attachments);
        $stateProvider.state(comments);
        $stateProvider.state(settings);
    })
