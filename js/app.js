angular.module('memberApp', [])
    .controller('MemberListController', ['$scope', '$http',
        function ($scope, $http) {
            var memberList = this;

            $http.get('http://member.empowerhack.io/members').success(function (data) {
                memberList.members = data._embedded.members;
            });
    }]);
