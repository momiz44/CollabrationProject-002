/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
	
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getnotifications");
	}
	
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getnotification/"+id);
	}
	
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/updatenotification/"+id);
	}
	
	return notificationService;
})