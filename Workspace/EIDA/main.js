(function() {
    angular.module('eidaApp', ['ngMaterial', 'ngMessages']).controller('eidaController', eidaController);

    function eidaController($scope, $mdDialog, $interval) {
        var _this = this;
        $scope.user = {
            firstName: 'Syamjith',
            middleName: 'Ayithanathu',
            lastName: 'Sasidharan',
            eidaNumber: '7483234234234234',
            address1: 'Dubai 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6',
            address2: 'Dubai 1 2 3 4 5 6 7 8 9',
            city: 'Dubai',
            state: 'CA',
            postalCode: '94043',
            submissionDate: new Date(1533499200000)
        };
        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#mainContainer')))
                .clickOutsideToClose(false)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
        };


        $scope.activated = true;
        $scope.determinateValue = 30;

        // Iterate every 100ms, non-stop and increment
        // the Determinate loader.
        $interval(function() {

            $scope.determinateValue += 1;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
            }

        }, 100);

    }
})()