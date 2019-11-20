/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8081/ProjectMiddleware-002/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getblog/"+id)
	}
	
	blogService.hasUserLikedBlog=function(id){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/hasuserlikedblog/"+id)
	}
	
	blogService.approve=function(blog){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/approve",blog)
	}
	
	blogService.reject=function(blog,rejectionReason){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/reject/"+rejectionReason,blog)
	}
	
	blogService.updateLikes=function(id){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/updatelikes/"+id);
	}
	
	blogService.addComment=function(blogComment){
		return $http.post("http://localhost:8081/ProjectMiddleware-002/addcomment",blogComment);
	}
	
	blogService.getBlogComments=function(id){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/blogcomments/"+id);
	}
	
	
	return blogService;
	
})