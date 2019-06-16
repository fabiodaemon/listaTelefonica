angular.module("cadastroAlunos").provider("serialGenerator", function(config){
    var _lenght = 10;

    this.getLength = function(){
        return _lenght
    };

    this.setLength = function(){
        _lenght = length;
    };

    this.$get = function(){
        return{
            generate: function(){
                var serial = "";
                while(serial.length < 20){
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };

});