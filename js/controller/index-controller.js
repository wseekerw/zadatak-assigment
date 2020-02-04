var app = angular.module('assigment');

app.controller("indexController", function($scope, $http){


    var offersPromise = $http({
        url: 'https://selfcare-service.demo.melita.com/interview/api/offers',
        method: "get"
    })

    offersPromise.then(function(response){
        //console.log(response)
        $scope.offers = response.data.offers;
    })

    offersPromise.catch(function(err){
        //console.log(err)
    })

    $scope.getSubs = function(offer){
        //console.log(offer);

        $scope.selectedOffer = offer.name;

        var subscriptionsPromise = $http({
            url: 'https://selfcare-service.demo.melita.com/interview/api/offers/' + offer.id + '/subscriptions',
            method: "get"
        })

        subscriptionsPromise.then(function(response){
            $scope.subs = response.data.subscriptions;
        })

        subscriptionsPromise.catch(function(err){
            //console.log(err)
        })
        
    
    }


})