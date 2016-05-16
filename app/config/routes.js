app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('home', {
        url: '/home',
		template: '<home-component></home-component>',
	})
	.state('login', {
		template: '<login-component></login-component>'
	})
	.state('questions', {
		url: '/questions',
		template: '<questions-component></questions-component>'
	})
    .state('answer', {
		url: '/answer',
		templateUrl: 'app/components/answer/answer.html',
		controller: 'AnswerController',
		controllerAs: '$ctrl'
	})
	.state('question', {
		url: '/questions/:id',
		template: '<question-component></question-component>'
		// resolve: {
		// 	question: function($stateParams, DataService){
		// 		return DataService.getQuestion($stateParams.id);
		// 	},
		// 	comments: function($stateParams, DataService){
		// 		return DataService.getComments($stateParams.id);
		// 	},
		// 	responses: function($stateParams, DataService){
		// 		return DataService.getResponses($stateParams.id);
		// 	}
		// }
	})
	.state('auth', {
		url: '/user',
		abstract: true,
		template: '<ui-view></ui-view>',
		controller: 'AuthController'
	})
	.state('auth.dashboard', {
		url: '/dashboard',
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: 'DashboardController',
		controllerAs: 'dc'
	})
})

app.run(function($rootScope, $state, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
		AuthService.authMember();
	});
    
})