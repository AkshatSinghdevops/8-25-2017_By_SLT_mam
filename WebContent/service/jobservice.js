/**
 * JobService
 */
app.factory('JobService',function($http){
	var jobService={}
	
	 jobService.saveJob=function(job){
		return $http.post("http://localhost:8087/CollaborationBackend/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8087/CollaborationBackend/getallJobs")
	}
	
	jobService.getJobDetails=function(job){
		return $http.get("http://localhost:8087/CollaborationBackend/getjobbyid/"+job)
	}
	
	
	return jobService;
})