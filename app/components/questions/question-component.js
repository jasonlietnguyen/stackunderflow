(function(){
    
    angular.module('stackunderflow')
        .component('questionComponent', {
            templateUrl: 'app/components/questions/question.html',
           controller: QuestionController
        })
    function QuestionController($rootScope, DataService, $stateParams){
        var qc = this;
        qc.answers = [];
        
        qc.$onInit = function(){  

            qc.member = $rootScope.member;   
            debugger
            qc.member.votes = $rootScope.member.info || {};
            qc.votes = DataService.getVotes($stateParams.id);
            
            qc.question = DataService.getQuestion($stateParams.id);
            qc.answers = DataService.getAnswers($stateParams.id);
            qc.comments = DataService.getComments($stateParams.id);
			
            debugger
			// qc.answers = DataService.getAnswers($stateParams.id); 
        }


//         qc.upVote = function($rootScope){

// debugger

			
// 				dc.member.$save(qc.question.id);
//                 qc.votes.$add(qc.member.id); 
//                 ("question index:" + qc.question);
//                 qc.$onInit();
//                 }else{
//                     alert('you have already voted')
//                 }

//             }
        
        
        
        qc.addAnswer = function(newAnswer){
            newAnswer.posted = Date.now();
            newAnswer.author = $rootScope.member.info.username;
            
            
            
            qc.answers.$add(newAnswer).then(qc.$onInit())
            qc.newAnswer = [];
        } 
        qc.addComment = function(newComment){
            newComment.posted = Date.now();
            newComment.author = $rootScope.member.info.username;
            
            
          
           
            qc.comments.$add(newComment).then(qc.$onInit())
            qc.newComment = [];
        } 

        
       
         
    }
    
}())