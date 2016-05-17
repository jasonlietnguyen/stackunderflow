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
            // tested loading member by id
            // qc.question = DataService.getQuestion($stateParams.id).$loaded(function(ref){
            //     DataService.getUserById(ref.memberId).$loaded(function(author){
            //         console.log(author);
            //     });
                
            // });
            qc.question = DataService.getQuestion($stateParams.id);
			qc.comments = DataService.getComments($stateParams.id);
			qc.responses = DataService.getResponses($stateParams.id);  
            qc.upVotes = 0;
            qc.downVotes = 0;
        }
        
        
        qc.addInput = function(input, type){
            input.posted = Date.now();
            input.author = qc.member.$id;
            qc[type].$add(input);  
            
        } 

        
       
         
    }
    
}())