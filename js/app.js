var jiffApp = angular.module('jiffApp', [
	"ngRoute",
  "dashboard",
  "planos",
  "formulario"
]); 

jiffApp.config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
       
        .when('/dashboard', {
          template: '<dashboard></dashboard>'
        })
        .when('/planos/:sku', {
          template: '<planos></planos>'
        })
        .when('/formulario', {
          template: '<formulario></formulario>'
        })
        .when('/formulario/:sku', {
          template: '<formulario></formulario>'
        })
        .otherwise('/dashboard');
    }
]);
