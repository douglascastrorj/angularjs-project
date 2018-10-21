/*
 * This is a template for creating a service using angular module method. 
 * Use the example below to create services 
 *
 */

angular.module('PlataformaModule', [])
.service('PlataformaService', ['$http', function ($http) {
    
	//this.sorted_programs = [];

    /*
     * Get list of all programs and sort them based on display_order
     * @return Promise object  
     */

    this.getPlataformas = function(){ 
    	return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function(res){
            return res.data.plataformas;
    	});
    }

}]);