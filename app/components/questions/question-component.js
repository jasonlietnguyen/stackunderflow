(function(){
    
    angular.module('stackunderflow')
        .component('questionComponent', {
            templateUrl: 'app/components/questions/question.html',
           controller: QuestionController
        })
    function QuestionController($rootScope, DataService, $stateParams){
        var qc = this;
        qc.$onInit = function(){
            qc.member = $rootScope.member
            qc.question = DataService.getQuestion($stateParams.id);
			qc.comments = DataService.getComments($stateParams.id);
			qc.responses = DataService.getResponses($stateParams.id);  
            qc.upVotes = 0;
            qc.downVotes = 0;
        }
        
        function addComments(comments){
            qc.comments.$add(comments)
        } 
        
    }
    
}())