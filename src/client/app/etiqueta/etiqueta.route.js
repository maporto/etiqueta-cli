(function () {
  'use strict';

  angular
    .module('app.etiqueta')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'etiqueta',
      config: {
        url: '/etiqueta',
        templateUrl: 'app/etiqueta/etiqueta.html',
        controller: 'EtiquetaController',
        controllerAs: '$ctrl',
        title: 'Gerar Codigo de Barras',
      }
    }];
  }
})();