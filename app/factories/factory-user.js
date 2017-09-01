"use strict";

/*

    provide the basic auth functionality for firebase

 */

app.factory("userFactory", function($q, $http){

    let currentUser = null;
//change let
    let isAuthenticated = function (){
        console.log("userFactory: isAuthenticated");
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    console.log("user", user.uid);
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    const getCurrentUser = function(){
        return currentUser;
    };


    const loginGoogle = function(){

    };


    const logIn = function(){

    };


    const logOut = function(){
        console.log("logoutUser");
        return firebase.auth().signOut();
    };


    const register = function(){

    };


    let provider = new firebase.auth.GoogleAuthProvider();

    let authWithProvider = function(){
        return firebase.auth().signInWithPopup(provider);
    };

    return {getCurrentUser, loginGoogle, logIn, logOut, register, isAuthenticated, authWithProvider};

});