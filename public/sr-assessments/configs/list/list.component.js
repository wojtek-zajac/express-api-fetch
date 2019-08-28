angular.module('srAssessments.configs')
    .component('configsList', {
        controller: 'ConfigsListCtrl',
        template:
            '<list-config-item ng-repeat="config in $ctrl.configs" config="config"></list-config-item>'
    })
