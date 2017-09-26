studentsList.directive('directiveStudentsList', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'student_list/student_list.html',
        transclude: false,
        restrict: 'E',
        scope: true
    }
});
