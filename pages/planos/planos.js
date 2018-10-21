angular.module('planos', ['PlanosModule'])
.component('planos', {
	templateUrl: "pages/planos/planos.html",
	controller: ['PlanosService', '$scope', '$routeParams', function (PlanosService, $scope, $routeParams) {

		var self = this;
		$scope.planos = [];
		$scope.loading = true;

		self.$onInit = function () {
			self.carregarPlanos();
		};

		self.carregarPlanos = function () {
			const sku = $routeParams.sku;
			PlanosService.getPlanos(sku).then(function (planos) {
				$scope.planos = planos;
				$scope.loading = false;
			})
		}

	}]
}); 
