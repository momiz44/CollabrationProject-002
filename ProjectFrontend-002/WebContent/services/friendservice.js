/**
 * 
 */

app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8081/ProjectMiddleware-002/addfriend",toId)
	}
	
	friendService.getPendingRequests=function()
	{
		return $http.get("http://localhost:8081/ProjectMiddleware-002/pendingrequests");
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/deleterequest",request);
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/friends");
	}
	
	
	return friendService;
})