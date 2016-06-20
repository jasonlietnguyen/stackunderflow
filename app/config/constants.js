app.constant('CONSTANTS', (function(){ 
	var root = 'https://glowing-torch-4827.firebaseio.com/';
	var questions = root + 'questions/'
	var tags = root + 'tags/' 
	
	return {
		fbRef: root,
		questions: questions,
		tags: tags
	}
}()));