app.service('DataService', function($firebaseArray, $firebaseObject, CONSTANTS){
	
	this.getTags = function(){
		return $firebaseArray(new Firebase(CONSTANTS.tags));
	}
	
	this.getQuestions = function(){
		return $firebaseArray(new Firebase(CONSTANTS.questions));
	}

	this.getQuestion = function(id){
		return $firebaseObject(new Firebase(CONSTANTS.questions + id));
	}
	
	this.getComments = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.questions + id + '/comments'));
	}
	
	this.getResponses = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.questions + id + '/responses'));
	} 
    this.getUserById = function(id){
		return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/' + id));
	}
    
    
    // this.getMember = function(){
	// 	var membersArray = $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/'))
    //     .$loaded(console.log(membersArray))}
	// // this.getMember = function(){
	// // 	return $firebaseArray(new Firebase(CONSTANTS.members.child('user' + uid)));
	// // }
    // this.getMember()
	
});