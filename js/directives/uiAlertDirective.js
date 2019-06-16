angular.module("cadastroAlunos").directive("uiAlert", function(){

    return{
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope:{
            topic: "@", // topic: "@title" se nao fossem iguais seria necessario escrever o nome apos o @
            // message: "=" // O '=' cria o two-way-data-binding. Vinculo bidirecional: propr. scope do template c/ propr. scope diretiva
        },
        transclude: true
    };

});