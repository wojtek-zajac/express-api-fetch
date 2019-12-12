angular.module('srAssessments')
    .config(function($stateProvider) {
        const assessments = {
            name: 'assessments',
            url: '/assessments',
            template: '<h1>Manage your assessment orders<h1>'
        }
        const results = {
            name: 'results',
            url: '/results',
            template: '<h1>Manage results</h1>'
        }
        const attachments = {
            name: 'attachments',
            url: '/attachments',
            template: '<h1>Manage update </h1>'
        }
        const comments = {
            name: 'comments',
            url: '/comments',
            template: '<h1>Manage comments</h1>'
        }
        const settings = {
            name: 'settings',
            url: '/settings',
            template: '<h1>Settings</h1>'
        }

        $stateProvider.state(assessments);
        $stateProvider.state(results);
        $stateProvider.state(attachments);
        $stateProvider.state(comments);
        $stateProvider.state(settings);
    })
