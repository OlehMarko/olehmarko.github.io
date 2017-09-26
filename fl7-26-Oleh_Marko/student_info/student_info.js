studentsList.directive('directiveStudentInfo', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'student_info/student_info.html',
        transclude: false,
        restrict: 'E',
        scope: {
            name: '=',
            surname: '=',
            photo: '=',
        },
    }
});
