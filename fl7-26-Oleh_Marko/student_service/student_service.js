const studentsList = angular.module('studentsList', ['ui.router']);

studentsList.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');
    $stateProvider
        .state('home', {
        url: '/list',
        templateUrl: 'student_list/student_list.html',
        controller: 'controllerStudentsList'

    })
    .state('detail', {
        url: '/student/{student}',
        templateUrl: `student_info/student_info.html`,
        controller: 'controllerStudentsList'
    })
});

studentsList.controller('controllerStudentsList', function ($scope, studentsService, $stateParams) {
    $scope.students = studentsService.getStudents();
    $scope.student = studentsService.getStudent($stateParams.student);
})

studentsList.directive('directiveStudent', function factory() {
    return directiveStudent = {
        priority: 0,
        templateUrl: 'student_service/student.html',
        transclude: false,
        restrict: 'E',
        scope: {
            name: '=',
            surname: '=',
            photo: '=',
            onNameChanged: '&'
        },
        controller: function studentController($scope) {
            $scope.show = false;
        }
    }
});

studentsList.service('studentsService', function () {
    this.students = [
            {
                name: 'Petro',
                surname: 'Stepaniv',
                photo: 'https://i.pinimg.com/236x/e3/c3/90/e3c3902aac87e83b20f29819aa9fe886--cat-logo-free-silhouette.jpg',
                birthday: '15.06.1999',
                phone: '34543534'
    },
            {
                name: 'Ivan',
                surname: 'Petriv',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoDYa81aX_BUmPhagk93XCg2Tl6xczTw-R8gFT6O7mhLMMyac',
                birthday: '09.09.1995',
                phone: '345435345'
    },
            {
                name: 'Roman',
                surname: 'Ivanenko',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKu80YfWT2JsXAAJuv0pAITb3g7h-KTnAI80BZ9n3sCDhCYG9Xg',
                birthday: '03.10.1996',
                phone: '34534534'
    }

],

        this.getStudents = function () {
            return this.students;
        },

        this.getStudent = function (name) {
            return this.students.find((student) => student.name === name);
        }
})
