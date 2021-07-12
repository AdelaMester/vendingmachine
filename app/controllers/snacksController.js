(function() {

    var snacksController = function($scope) {

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

        $scope.snacks = [
            {
                id:1,
                name:'Bbq',
                path:'images/barbecue.jpg',
                price:2
            },
            {
                id:2,
                name:'Cheese',
                path:'images/nachos.jpg',
                price:1
            },
            {
                id:3,
                name:'Paprika',
                path:'images/paprika.jpg',
                price:1
            },
            {
                id:4,
                name:'Salt',
                path:'images/saltandv.jpg',
                price:1
            }
            ];
    };

    snacksController.$inject = ['$scope'];

    angular.module('myapp')
        .controller('snacksController', snacksController)


}());