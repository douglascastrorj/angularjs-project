angular.module('dashboard',['PlataformaModule'])
.component('dashboard', {
	templateUrl: "pages/dashboard/dashboard.html",
	controller: [  'PlataformaService', '$scope', function( PlataformaService, $scope){
		
		var self = this;
		$scope.plataformas = [];
		$scope.loading = true;

		self.$onInit = function() {
            self.carregarPlataformas();
		};		

		self.carregarPlataformas = function () {
			console.log('carregou controller');
			PlataformaService.getPlataformas().then(function(plataformas){
				$scope.plataformas = plataformas;
				console.log('resgatadas', plataformas)
				$scope.loading = false;
			});	
		}
		
	}]
}); 
