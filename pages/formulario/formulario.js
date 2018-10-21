angular.module('formulario', ['ValidadorModule'])
.component('formulario', {
    templateUrl: "pages/formulario/formulario.html",
    controller: ['$scope', '$routeParams', 'ValidadorService', function ($scope, $routeParams, ValidadorService) {

        var self = this;
        const minLength = 6;
        const telMinLength = 9;

        $scope.hasErrors = false;

        $scope.usuario = {
            nome: '',
            email: '',
            nascimento: '',
            telefone: null,
            cpf: null
        }

        $scope.submit = function () {
            

            var emailValido = ValidadorService.validarEmail($scope.usuario.email);
            var nomeValido = ValidadorService.validarMinLength($scope.usuario.nome, minLength);
            var telefoneValido = ValidadorService.validarMinLength($scope.usuario.telefone, telMinLength);
            var cpfValido = ValidadorService.validarCpf($scope.usuario.cpf);


            
            if(emailValido && nomeValido && telefoneValido && cpfValido ) {
                $scope.hasErrors = false;
                console.log($scope.usuario);
            } else {
                $scope.hasErrors = true;
            }

        }

        self.$onInit = function () {

            $(function () {
                $("#datepicker").datepicker();
                $('.tel').mask('(99) 9999-9999');
                $('.cpf').mask('999.999.999-99');
            });

            const sku = $routeParams.sku;
        };



    }]
}); 
