function MagicCtrl($scope) {
	$scope.players = [
		{playerName:'Player 1', life: 20},
		{playerName:'Player 2', life: 20},
	];

	$scope.decrementHealth = function(playerNumber, amt) {
		$scope.players[playerNumber].life = $scope.players[playerNumber].life - amt
	}

	$scope.incrementHealth = function(playerNumber, amt) {
		$scope.players[playerNumber].life = $scope.players[playerNumber].life + amt
	}

	$scope.life = function(playerNumber) {
		return $scope.players[playerNumber].life
	}

	$scope.name = function(playerNumber) {
		return $scope.players[playerNumber].playerName
	}
}