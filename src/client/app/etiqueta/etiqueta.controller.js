(function () {
  'use strict';

  angular
    .module('app.etiqueta')
    .controller('EtiquetaController', PedidoController);

  /* @ngInject */
  function PedidoController($http, FileSaver) {
    var _self = this;
    _self.title = 'Etiqueta';
    _self.etiquetas = [];
    _self.adicionarEtiqueta = adicionarEtiqueta;
    _self.download = download;

    function init() {
      _self.adicionarEtiqueta();
    }

    function adicionarEtiqueta() {
      _self.etiquetas.push({
        quantidade: 1
      });
    }

    function download() {
      $http.post('https://damp-fortress-35546.herokuapp.com/api/etiquetas', { etiquetas: _self.etiquetas })
      .then(function (response) {
        var data = new Blob([response.data], { type: response.headers('Content-Type') });
        FileSaver.saveAs(data, 'etiquetas.html');
      }, function (error) {
      });
    }

    init();
  }
})();
