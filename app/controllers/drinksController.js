(function() {

    var drinksController = function($scope) {

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


        $scope.drinks = [
            {
                id:1,
                name:'Coke',
                path:'images/cocacola.jpg',
                price:2
            },
            {
                id:2,
                name:'DietCoke',
                path:'images/dietcoke.jpg',
                price:1
            },
            {
                id:3,
                name:'Fanta',
                path:'images/fanta.jpg',
                price:1
            },
            {
                id:4,
                name:'Sprite',
                path:'images/sprite.jpg',
                price:1
            }
            ];
    };

    drinksController.$inject = ['$scope'];

    angular.module('myapp')
        .controller('drinksController', drinksController)


}());