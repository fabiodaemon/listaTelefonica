angular.module("cadastroAlunos").controller("detalhesContatoCtrl", function ($scope, $routeParams, contato) {

	$scope.contato = contato.data;
});