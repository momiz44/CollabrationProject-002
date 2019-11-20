/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/ProjectMiddleware-002/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8081/ProjectMiddleware-002/login",user)
	}
	
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/logout")
	}
	
	userService.getUser=function(){
		return $http.get("http://localhost:8081/ProjectMiddleware-002/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8081/ProjectMiddleware-002/updateuser",user)
	}
	
	
	return userService
})