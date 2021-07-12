(function() {

    var coffeeController = function($scope) {

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



        $scope.coffees = [
            {
                id:1,
                name:'Latte',
                path:'images/latte.jpg',
                price:3
            },
            {
                id:2,
                name:'Black',
                path:'images/americano.jpg',
                price:2
            },
            {
                id:3,
                name:'Espresso',
                path:'images/espresso.jpg',
                price:2
            },
            {
                id:4,
                name:'Mocha',
                path:'images/mocha.jpg',
                price:4
            }
            ];
    };


    coffeeController.$inject = ['$scope'];

    angular.module('myapp')
        .controller('coffeeController', coffeeController)


}());