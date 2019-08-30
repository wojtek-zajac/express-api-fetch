angular.module('srAssessments.configs')
    .component('listConfigItem', {
        bindings: {
            config: '<'
        },
        template:
            `<div>
                <p>{{ $ctrl.config.id }}</p>
                <p>{{ $ctrl.config.value }}</p>
            </div>
            <br>`
    })
