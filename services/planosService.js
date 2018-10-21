/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('PlanosModule', [])
.service('PlanosService', ['$http', function ($http) {
    
    
    const API = "http://private-59658d-celulardireto2017.apiary-mock.com/planos/";

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */

    this.getPlanos = function(sku){ 
        const url = API + sku;
    	return $http.get(url).then(function(res){
            return res.data.planos;
    	});
    }

}]);