"use strict";

app.controller("userCtrl", function ($scope, $window, userFactory, $location) {

	console.log("Yo userCtrl is loaded");

	let logout = () => {
    	console.log("logout clicked");
    	userFactory.logOut()
      	.then(function () {
        	console.log("logged out DONE");
        	//no need to redirect since isAuth verifies login and will take care of re-direction
        	// $location.href = "#!/";
      	}, function (error) {
        	console.log("error occured on logout");
      	});
  };

	$scope.loginGoogle = () => {
		console.log("you clicked on google login");

		userFactory.authWithProvider()
		.then( (result) =>{
			let user = result.user.uid;
			$location.path("/task-list");
			$scope.apply();
		}).catch( (error) => {
			console.log("error with google login");
			let errorCode = error.code;
			let errorMessage = error.message;
			console.log("errors", errorCode, errorMessage);
		});
	};

	//when first loaded, make sure no one is logged in
  // // console.log("what is this?", userFactory.isAuthenticated());
  // if (userFactory.isAuthenticated()) 
  //   logout();
  
// console.log("app isAuth", isAuth());
//   if (isAuth()){
//     console.log("app isAuth", isAuth());
//   }


});