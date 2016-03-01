// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])
 
// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
     
    $stateProvider
     
        // route to show our basic form (/form)
        .state('main', {
            url: '/main',
            templateUrl: 'main.html',
            controller: 'formController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
        })
         
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('main.smartcar', {
            url: '/smartcar',
            templateUrl: 'smartcar.html'
        })
         
        // url will be /form/interests
        .state('main.jiazheng', {
            url: '/jiazheng',
            templateUrl: 'jiazheng.html'
        })
         
        // url will be /form/payment
        .state('main.more', {
            url: '/more',
            templateUrl: 'more.html'
        })
        .state('main.jiazheng.jiazhengcontain', {
            url: '/jiazheng/jiazhengcontain',
            templateUrl: 'jiazhengcontain.html'
        })
        ;
         
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/main');
})
 
// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
     
    // we will store all of our form data in this object
    $scope.formData = {};
     
    // function to process the form
    $scope.go = function (pageAnimationClass) {
	    if (pageAnimationClass != 'back') { // Use a default, your choice
	       /*$("#abc").addClass("slideRight");*/
	       
	    }
	         
	    else { // Use the specified animation
	        $scope.pageAnimationClass = pageAnimationClass;
	    }
	 
	   
	};
});
