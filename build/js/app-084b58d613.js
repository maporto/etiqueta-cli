/**
 * genos - genos Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.etiqueta","ui.utils.masks"])}(),function(){"use strict";angular.module("blocks.logger",["ngMaterial"])}(),function(){"use strict";angular.module("blocks.router",["ui.router"])}(),function(){"use strict";angular.module("app.core",["blocks.router","ui.router","ngMaterial"])}(),function(){"use strict";angular.module("app.etiqueta",["ngMaterial","ngMessages","ui.utils.masks","ngFileSaver"])}(),function(){"use strict";function t(t,e){function o(o,a){e.show({hideDelay:3e3,position:"top left",controller:"ToastrController",controllerAs:"toastr",templateUrl:"app/blocks/logger/toast.html",locals:{mensagem:o,color:"#F8333C"}}),t.error("Error: "+o,a)}function a(o,a){e.show({hideDelay:3e3,position:"top left",controller:"ToastrController",controllerAs:"toastr",templateUrl:"app/blocks/logger/toast.html",locals:{mensagem:o,color:"#DBD5B5"}}),t.info("Info: "+o,a)}function r(o,a){e.show({hideDelay:3e3,position:"top left",controller:"ToastrController",controllerAs:"toastr",templateUrl:"app/blocks/logger/toast.html",locals:{mensagem:o,color:"#44AF69"}}),t.info("Success: "+o,a)}function n(o,a){e.show({hideDelay:3e3,position:"top left",controller:"ToastrController",controllerAs:"toastr",templateUrl:"app/blocks/logger/toast.html",locals:{mensagem:o,color:"#FCAB10"}}),t.warn("Warning: "+o,a)}var i={error:o,info:a,success:r,warning:n,log:t.log};return i}angular.module("blocks.logger").factory("logger",t),t.$inject=["$log","$mdToast"]}(),function(){"use strict";function t(t){var e=this;e.mensagem=t.mensagem,e.color=t.color}t.$inject=["locals"],angular.module("blocks.logger").controller("ToastrController",t)}(),function(){"use strict";function t(t,e,o){function a(t,a,n){function i(t,a){t.forEach(function(t){t.config.resolve=angular.extend(t.config.resolve||{},r.resolveAlways),e.state(t.state,t.config)}),a&&!d&&(d=!0,o.otherwise(a))}function l(){a.$on("$stateChangeError",function(e,o,a,r,n,i){if(!f){m.errors++,f=!0;{var l=o&&(o.title||o.name||o.loadedTemplateUrl)||"unknown target";"Error routing to "+l+". "+(i.data||"")+". <br/>"+(i.statusText||"")+": "+(i.status||"")}t.path("/")}})}function c(){l(),s()}function u(){return n.get()}function s(){a.$on("$stateChangeSuccess",function(t,e){m.changes++,f=!1;var o=r.docTitle+" "+(e.title||"");a.title=o})}var f=!1,d=!1,m={errors:0,changes:0},g={configureStates:i,getStates:u,stateCounts:m};return c(),g}var r={docTitle:void 0,resolveAlways:{}};window.history&&window.history.pushState||(window.location.hash="/"),t.html5Mode(!0),this.configure=function(t){angular.extend(r,t)},this.$get=a,a.$inject=["$location","$rootScope","$state"]}angular.module("blocks.router").provider("routerHelper",t),t.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t,e){t.debugEnabled&&t.debugEnabled(!0),e.configure({docTitle:r.appTitle+": "})}function e(t,e){t.formatDate=function(t){return e(t).format("DD/MM/YYYY")}}function o(t){var e={50:"e0f5ef",100:"b3e5d7",200:"80d4bc",300:"4dc2a1",400:"26b58c",500:"00a878",600:"00a070",700:"009765",800:"008d5b",900:"007d48",A100:"aaffd5",A200:"77ffbc",A400:"44ffa3",A700:"2aff97",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","A100","A200","A400","A700"],contrastLightColors:["500","600","700","800","900"]};t.definePalette("customPrimary",e);var o={50:"e2e7e8",100:"b6c2c5",200:"869a9e",300:"557177",400:"30525a",500:"0c343d",600:"0a2f37",700:"08272f",800:"062127",900:"03151a",A100:"58cfff",A200:"25c1ff",A400:"00acf1",A700:"009ad8",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","A100","A200","A400"],contrastLightColors:["300","400","500","600","700","800","900","A700"]};t.definePalette("customAccent",o);var a={50:"ffece8",100:"ffcfc6",200:"ffafa0",300:"fe8e7a",400:"fe765e",500:"fe5e41",600:"fe563b",700:"fe4c32",800:"fe422a",900:"fd311c",A100:"ffffff",A200:"fffefe",A400:"ffcfcb",A700:"ffb8b2",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500","600","A100","A200","A400","A700"],contrastLightColors:["700","800","900"]};t.definePalette("customWarn",a);var r={50:"fafaf9",100:"f3f4f0",200:"ebece7",300:"e2e4dd",400:"dcdfd5",500:"d6d9ce",600:"d1d5c9",700:"cccfc2",800:"c6cabc",900:"bcc0b0",A100:"ffffff",A200:"000000",A400:"ffffff",A700:"fdfff6",contrastDefaultColor:"light",contrastDarkColors:["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],contrastLightColors:[]};t.definePalette("customBackground",r),t.theme("default").primaryPalette("customPrimary").accentPalette("customAccent").warnPalette("customWarn").backgroundPalette("customBackground")}e.$inject=["$mdDateLocaleProvider","moment"];var a=angular.module("app.core"),r={appErrorPrefix:"[Nova Franquia Error] ",appTitle:"Nova Franquia"};a.value("config",r),a.config(t),a.config(o),a.config(e),t.$inject=["$logProvider","routerHelperProvider"],o.$inject=["$mdThemingProvider"]}(),function(){"use strict";angular.module("app.core").constant("moment",moment)}(),function(){"use strict";function t(t){var o="/";t.configureStates(e(),o)}function e(){return[]}t.$inject=["routerHelper"],angular.module("app.core").run(t)}(),function(){"use strict";function t(t,e){function o(){n.adicionarEtiqueta()}function a(){n.etiquetas.push({quantidade:1})}function r(){t.post("https://damp-fortress-35546.herokuapp.com/api/etiquetas",{etiquetas:n.etiquetas}).then(function(t){var o=new Blob([t.data],{type:t.headers("Content-Type")});e.saveAs(o,"etiquetas.html")},function(){})}var n=this;n.title="Etiqueta",n.etiquetas=[],n.adicionarEtiqueta=a,n.download=r,o()}t.$inject=["$http","FileSaver"],angular.module("app.etiqueta").controller("EtiquetaController",t)}(),function(){"use strict";function t(t){t.configureStates(e())}function e(){return[{state:"etiqueta",config:{url:"/",templateUrl:"app/etiqueta/etiqueta.html",controller:"EtiquetaController",controllerAs:"$ctrl",title:"Gerar Codigo de Barras"}}]}angular.module("app.etiqueta").run(t),t.$inject=["routerHelper"]}(),angular.module("app.core").run(["$templateCache",function(t){t.put("app/etiqueta/etiqueta.html",'<div id=telaEtiqueta flex=90 flex-offset=5><form name=etiqueta.etiquetaForm ng-submit=$ctrl.download($ctrl.etiquetaForm)><div layout=column><div layout=row flex ng-repeat="(key, etiqueta) in $ctrl.etiquetas"><md-input-container flex><label>Quantidade</label> <input type=number ng-model=etiqueta.quantidade required></md-input-container><md-input-container flex><label>CNPJ</label> <input ng-model=etiqueta.cnpj ui-br-cnpj-mask required md-maxlength=18></md-input-container><md-input-container flex><label>Codigo de Barras</label> <input ng-model=etiqueta.codigoBarras md-maxlength=13 ng-pattern="/^[0-9]{13}$/" required></md-input-container><md-input-container><label>Data Validade</label><md-datepicker ng-model=etiqueta.dataValidade></md-datepicker></md-input-container></div><div class=actions><md-button type=button class=md-accent ng-click=$ctrl.adicionarEtiqueta()>Adicionar Etiqueta</md-button><md-button type=submit class="md-raised md-primary">Gerar Arquivo</md-button></div></div></form></div>'),t.put("app/blocks/logger/toast.html",'<md-toast class=md-toast><div class=md-toast-content style="background-color: {{toastr.color}};">{{toastr.mensagem}}</div></md-toast>')}]);