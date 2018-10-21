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
			PlataformaService.getPlataformas().then(function(plataformas){
				$scope.plataformas = plataformas;
				$scope.loading = false;
			});	
		}
		
	}]
}); 
