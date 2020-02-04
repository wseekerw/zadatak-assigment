var app = angular.module('zadatak');

app.controller("indexController", function($scope, $http){


    var offersPromise = $http({
        url: 'https://selfcare-service.demo.melita.com/interview/api/offers',
        method: "get"
    })

    offersPromise.then(function(response){
        //console.log(response)
        $scope.offers = response.data.offers;
    })

    $scope.getSubs = function(offer){
        //console.log(offerId);

        var subscriptionsPromise = $http({
            url: 'https://selfcare-service.demo.melita.com/interview/api/offers/' + offer.id + '/subscriptions',
            method: "get"
        })

        subscriptionsPromise.then(function(response){
            //console.log()
            $scope.subs = response.data.subscriptions;
        })
        
    
    }


})