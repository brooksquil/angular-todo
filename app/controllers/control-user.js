"use strict";

app.controller("userCtrl", function($scope, $window, userFactory, $location) {

    console.log("Yo userCtrl is loaded");

    $scope.account = {
        email: "",
        password: ""
    };


    $scope.register = () => {
        console.log("you registered");
        userFactory.register({
                email: $scope.account.email,
                password: $scope.account.password
            })
            .then((userData) => {
                console.log("user control new user", userData);
                $scope.logIn();

            }, (error) => {
                console.log(error, "error making user");
            });
    };


    $scope.logIn = () => {
        userFactory.logIn($scope.account)
            .then(() => {
                $window.location.href = "#!/task-list";
            });
    };

    let logout = () => {
        console.log("logout clicked");
        userFactory.logOut()
            .then(function() {
                console.log("logged out DONE");
                //no need to redirect since isAuth verifies login and will take care of re-direction
                // $location.href = "#!/";
            }, function(error) {
                console.log("error occured on logout");
            });
    };

    $scope.loginGoogle = () => {
        console.log("you clicked on google login");

        userFactory.authWithProvider()
            .then((result) => {
                let user = result.user.uid;
                $location.path("/task-list");
                $scope.apply();
            }).catch((error) => {
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