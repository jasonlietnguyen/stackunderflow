
(function () {
	app.component('dashboardComponent', {
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: 'DashboardController'

	})

		.controller('DashboardController', function ($rootScope, CONSTANTS, $stateParams,  DataService) {
			/**
			 * To edit the member object you must go through $rootScope.member
			 * $rootScope.member is a $firebaseObject from AngularFire 
			 * To see the methods at your disposal look here
			 * https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject
			 * 
			 * Don't forget to call $rootScope.member.$save() after making changes to the $rootScope.member object
			 * 
			 * A feature request would be to add an edit profile button to the view that can show and hide the edit form in your html
			 * 
			 * */
			
			var dc = this;
			
		
			dc.$onInit = function () {
		    dc.newEdit = {};
			dc.member = $rootScope.member;

			debugger
				// dc.questionsList = $firebaseArray(new Firebase(CONSTANTS.questions))
				// dc.tagsList = $firebaseArray(new Firebase(CONSTANTS.tags));
				// console.log(dc.questionsList)
				console.log(dc.tagsList);
				console.log(dc.member);
			};
			//so seem to be having trouble using functions from service on click cause async i think?for stuffs where you get all on init is fine, but when trying to get specific????

			// dc.logMembers = function () {
				
			// }

			// dc.logMemberGotten = function () {
			// 	console.log(dc.member.info)
			// }



			// dc.getMemberQuestions = function (id) {
			// 	debugger
			// 	dc.userQuestions = [];
			// 	for (var i = 0; i < dc.questionsList.length; i++) {
			// 		var currentQuestion = dc.questionsList[i];
			// 		console.log("comparing " + currentQuestion.memberID + "and" + id)
			// 		if (currentQuestion.memberId == id) {
			// 			dc.userQuestions.push(currentQuestion)
			// 		}
			// 	}
			// 	console.log(dc.userQuestions);
			// }

			// ISSUES - 
			// --'MEMBER' NOT WORKING ANYMORE, SINCE MAKING component
			// --HOW TO TIME OUT FUNCTIONS TILL DATA GRABBED FROM FB Array
			// --STILL NEED TO SEE IF I CAN NOT OVERWRITE WHOLE MEMBER OBJ

			// dc.getMemberById = function () {
			// 	dc.memberGotten = DataService.getMember();

			// }

			dc.editMember = function (newEdit) {
				// dc.member = $rootScope.member;

				console.log(dc.newEdit)
				dc.member.info = dc.newEdit;
				dc.member.$save();
				// dc.member.$save(dc.newEdit).then(dc.$onInit())
				
         
			}


			//dc.editMember(fakeMemberEdit);


			// var fakeQuestion = {
			// 	memberId: $rootScope.member.$id,
			// 	body: "Hi this is fake body of fake question",
			// 	title: "Fake Question Has Fake Title"
			// }

			//dc.questionsList.$add(fakeQuestion)

		});
} ())