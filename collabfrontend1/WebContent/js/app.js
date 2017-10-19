/**
 * 
 */
var app = angular.module("app", [ 'ngRoute','ngCookies' ])
app.config(function($routeProvider) {

	$routeProvider
	
	.when('/Login', {
		templateUrl : 'views/Login.html', controller:'UserController'
	})
.when('/SignUp', {
		templateUrl : 'views/SignUp.html', controller:'UserController'
	})
	
	.when('/Home', {
		templateUrl : 'views/Home.html'
	})
	
	.when('/editprofile', {
		templateUrl : 'views/editprofile.html', controller:'UserController'
	})
	
	.when('/addblogpost', {
		templateUrl : 'views/blogPostform.html', controller:'BlogPostController'
	})
	.when('/getblogs', {
		templateUrl : 'views/blogsList.html', controller:'BlogPostController'
	})
	.when('/getblogbyid/:id', {
		templateUrl : 'views/blogdetails.html', controller:'BlogPostDetailController'
	})
	
	.when('/getapprovalform/:id', {
		templateUrl : 'views/blogapprovalform.html', controller:'BlogPostDetailController'
	})
	.when('/addjob', {
		templateUrl : 'views/jobform.html', controller:'JobController'
	})
	.when('/getalljobs', {
		templateUrl : 'views/joblist.html', controller:'JobController'
	})
	.when('/uploadprofilepic', {
		templateUrl : 'views/profilepicture.html', controller:'ProfilePictureController'
	})
	.otherwise('/Home', {
		templateUrl : 'views/Home.html'
	})
	
})

app.run(function($rootScope,$cookieStore,$location,UserService){
	
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get('userDetails')
}
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			delete $rootScope.currentUser;
			$cookieStore.remove('userDetails')
			$location.path('/Login')
			
		},function(response){
			console.log(response.status)
			if(response.status==401){
				delete $rootScope.currentUser;
				$cookieStore.remove('userDetails')
				$location.path('/login')

			}
				
		})
	}

})
