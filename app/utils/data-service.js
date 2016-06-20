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
	
	this.getAnswers = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.questions + id + '/answers'));
	}
	
	this.getComments = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.questions + id + '/comments' ));
	} 
	this.getVotes = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.questions + id + '/votes' ));
	} 
    this.getUserById = function(id){
		return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/' + id));
	}
	 this.getUserInfoById = function(id){
		return $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/' + id + '/info'));
	}
    
    
    
    // this.getMember = function(){
	// 	var membersArray = $firebaseArray(new Firebase(CONSTANTS.fbRef + 'users/'))
    //     .$loaded(console.log(membersArray))}
	// // this.getMember = function(){
	// // 	return $firebaseArray(new Firebase(CONSTANTS.members.child('user' + uid)));
	// // }
    // this.getMember()
	
});