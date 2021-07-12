(function() {

    var sweetsController = function($scope) {

        var total = 0.00
        $scope.addCredits = function(coin)
        {
            $scope.message=""
            $scope.change=0
            total = total + coin
            $scope.money = total
            console.log($scope.money)
        };

        var change = 0.00
        $scope.buyProduct = function(price)
        {
            console.log(price)
            if (total >= price)
            {
                $scope.change = total - price
                console.log($scope.change)
                $scope.money=0
                total=0
                $scope.message= "Enjoy!"
            }
            else
            {
                $scope.message= "Insert £"
            }
        }


        $scope.sweets = [
            {
                id:1,
                name:'M&M',
                path:'images/mm.jpg',
                price:2
            },
            {
                id:2,
                name:'Haribo',
                path:'images/haribo.jpg',
                price:1
            },
            {
                id:3,
                name:'Reeses',
                path:'images/reeses.jpg',
                price:1
            },
            {
                id:4,
                name:'Percy',
                path:'images/percy.jpg',
                price:1
            }
            ];
    };

    sweetsController.$inject = ['$scope'];

    angular.module('myapp')
        .controller('sweetsController', sweetsController)


}());