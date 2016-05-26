//Routes
App.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'Partials/partial-faq-parents.html'
        })

    .state('teachers', {
            url: '/teachers',
            templateUrl: 'Partials/partial-faq-teachers.html'
        })

    .state('employers', {
            url: '/employers',
            templateUrl: 'Partials/partial-faq-employers.html'
        });
});
