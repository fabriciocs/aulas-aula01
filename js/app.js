var app = angular.module('app', []);
app.controller('MyCtrl', function($scope){
	$scope.frases = [];
	$scope.Add = function(){
		$scope.frases.push($scope.texto);
		$scope.texto = "";
	}
});