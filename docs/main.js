(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"nav justify-content-end\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#Inicio\" (click)=\"Tela = 'Inicio'\">Inicio</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#Publicar\" (click)=\"Tela = 'Publicar'\">Publicar</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#Cadastro\" (click)=\"Tela = 'Cadastro'\">Cadastro</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#Estatisticas\" (click)=\"Tela = 'Estatisticas'\" >Estatísticas</a>\n    </li>\n  </ul>\n\n\n<section *ngIf=\"Tela == 'Inicio'\" id=\"Inicio\" class=\"container\">\n<div>\n  <h1>\n    Noticias\n  </h1>\n</div>\n\n<div class=\"container\">\n      <table>\n        <tr *ngFor=\"let noticia of Noticias.ListaNoticiasPublicadas()\">\n            <td><h5>{{noticia.conteudo}}...  </h5></td>\n            <td>{{noticia.views}}   </td>\n            <td><button class=\"btn btn-sm btn-outline-success\"  type=\"button\" (click)=\"Ler(noticia.id)\">Ler Noticia</button></td>\n            \n        </tr>\n      </table>\n    <br>\n   </div>\n<br>\n\n  <table>\n    <td><button type=\"button\"  class=\"btn btn-outline-success\" (click)=\"Tela = 'Publicar'\">Publicar </button></td>\n    <td><button type=\"button\" class=\"btn btn-outline-danger \" (click)=\"Tela = 'Cadastro'\">Cadstrar</button></td>\n    <td><button type=\"button\" class=\"btn btn-outline-warning \" (click)=\"Tela = 'Estatisticas'\">Estastísticas</button></td>\n  </table>\n\n</section>\n\n<section *ngIf=\"Tela == 'Cadastro'\" id=\"Cadastro\" class=\"container\">\n    <div>\n        <h1>\n          Cadastro\n        </h1>\n      </div>\n  \n  <div class=\"container\">\n    <form #FormCadastro=\"ngForm\" (submit)=\"Salvar(FormCadastro)\">\n        \n      <div class=\"form-group\">\n            <label for=\"autor\">Autor</label>\n            <select class=\"form-control\" name=\"autor\" id=\"autor\" [(ngModel)]=\"autor\" required>\n              <option disabled selected>Selecione um autor</option>\n              <option *ngFor=\"let autor of Noticias.ListaAutores() \">{{ autor.nome }}</option>\n            </select>\n          </div>\n\n      <div class=\"form-group\">\n        <label for=\"conteudo\">Conteudo</label>\n        <textarea name=\"conteudo\" id=\"conteudo\" [(ngModel)]=\"conteudo\" class=\"form-control\" required> </textarea>\n        \n      </div>\n      <table>\n      <td><button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!FormCadastro.form.valid\">Salvar</button></td>\n      <td><button class=\"btn btn-info\" type=\"reset\" formnovalidate>Limpar</button></td>\n    </table>\n    </form>\n\n\n  </div>\n\n\n\n</section>\n<br><br><br><br>\n\n<section *ngIf=\"Tela == 'Publicar'\" id=\"Publicar\" class=\"container\">\n    <div>\n        <h1>\n          Publicar Noticias\n        </h1>\n      </div>\n      \n      <div class=\"container\">\n            <table>\n              <tr *ngFor=\"let noticia of Noticias.ListaNoticiasNaoPublicadas()\">\n                  <td><h5>{{noticia.conteudo}}...  </h5></td>\n                  <td><button class=\"btn btn-sm btn-outline-primary\"  type=\"button\" (click)=\"Noticias.Publicar(noticia)\">Publicar</button></td>\n                  \n              </tr>\n            </table>\n          <br>\n         </div>\n      <br>\n\n\n</section>\n\n\n<section *ngIf=\"Tela=='Ler'\" id=\"noticias\" class=\"container\">\n    <div>\n        <h1>\n         Boa Leitura\n        </h1>\n      </div>\n      \n      <div class=\"container\">\n            <p>{{Noticias.NoticiaAtualConteudo}}</p>\n            <h6 >Publicado por:  {{Noticias.NoticiaAtualAutor}} </h6>\n\n      </div>\n\n\n      <br>\n      <br>\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"Tela = 'Inicio'\">Fechar</button>\n\n</section>\n\n\n<section *ngIf=\"Tela=='Estatisticas'\" id=\"Estatisticas\">\n\n  \n<div class=\"container\">\n    <div class=\"row\">\n      \n        <div class=\"col\">\n            <fusioncharts \n            width=\"600\" \n            height=\"400\"\n            type=\"pie2d\"\n            [dataSource]=Noticias.atualizaDataSource() >\n        </fusioncharts>    \n            </div>\n\n            <div class=\"col\">\n                <h4>Autor com Mais publicações: </h4>\n                <div class=\"container\"><h6>{{ Noticias.AutorMaisPubicou().nome }}</h6></div>\n        \n                </div>\n\n      </div>\n    <br><br>\n    <h4 style=\"text-align: center\">Ranking Top 5 noticias</h4>\n    <table class=\"table\">\n      \n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">Views</th>\n            <th scope=\"col\">Noticia</th>\n            <th scope=\"col\">Autor</th>\n         \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let noticia of Noticias.Ranking()\">\n            <th scope=\"row\">{{ noticia.views }}</th>\n            <td>{{ noticia.conteudo }}</td>\n            <td>{{ noticia.autor }}</td>\n          </tr>          \n        </tbody>\n      </table>\n  </div>\n  \n \n\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias.service */ "./src/app/noticias.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(Noticias) {
        this.Noticias = Noticias;
        this.autor = null;
        this.conteudo = null;
        this.Tela = "Inicio";
        this.NoticiaAtualConteudo = "";
        this.NoticiaAtualAutor = "";
    }
    AppComponent.prototype.Salvar = function () {
        this.Noticias.Salvar(this.autor, this.conteudo);
        this.autor = null;
        this.conteudo = null;
    };
    AppComponent.prototype.Ler = function (id) {
        this.Noticias.idAtual = id;
        this.Noticias.Ler();
        this.Noticias.views(id);
        this.Tela = 'Ler';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_noticias_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





// Load FusionCharts

// Load Charts module

// Load fusion theme

// Add dependencies to FusionChartsModule
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_5__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_6__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__);

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__["FusionChartsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/noticias.service.ts":
/*!*************************************!*\
  !*** ./src/app/noticias.service.ts ***!
  \*************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoticiasService = /** @class */ (function () {
    function NoticiasService() {
        this.autores = [{
                nome: "Amanda Soares", noticias: 0, publicacoes: 0
            }, { nome: "José Nascimento", noticias: 0, publicacoes: 0 },
            { nome: "Pedro Henrique", noticias: 3, publicacoes: 2 }, { nome: "Beatriz Limeira", noticias: 0, publicacoes: 0 }];
        this.noticias = [{ id: 0, conteudo: "Primeira Noticia para teste, espero que funcione", autor: "Pedro Henrique", publicada: true, views: 2 },
            { id: 1, conteudo: "Segunda Noticia para teste, espero que funcione", autor: "Pedro Henrique", publicada: false, views: 0 },
            { id: 2, conteudo: "Terceira", autor: "Pedro Henrique", publicada: true, views: 5 }];
        this.idAtual = 0;
        this.dataSource = {
            "chart": {
                "caption": "Noticias  por Autor",
                "subCaption": "Numero de noticias cadastradas por cada autor.",
                "showValues": "1",
                "showPercentInTooltip": "0",
                "numberPrefix": "Noticias Cadastradas: ",
                "enableMultiSlicing": "1",
                "theme": "fusion"
            },
            "data": []
        };
    }
    NoticiasService.prototype.Listanoticias = function () {
        return this.noticias;
    };
    ;
    NoticiasService.prototype.ListaNoticiasPublicadas = function () {
        var publicadas = [];
        for (var _i = 0, _a = this.noticias; _i < _a.length; _i++) {
            var n = _a[_i];
            if (n.publicada == true) {
                publicadas.push(n);
            }
        }
        return publicadas;
    };
    ;
    NoticiasService.prototype.ListaNoticiasNaoPublicadas = function () {
        var NaoPublicadas = [];
        for (var _i = 0, _a = this.noticias; _i < _a.length; _i++) {
            var n = _a[_i];
            if (n.publicada == false) {
                NaoPublicadas.push(n);
            }
        }
        return NaoPublicadas;
    };
    ;
    NoticiasService.prototype.ListaAutores = function () {
        return this.autores;
    };
    ;
    NoticiasService.prototype.Salvar = function (autor, conteudo) {
        var id = this.noticias.length;
        var n = {
            id: id,
            conteudo: conteudo,
            autor: autor,
            publicada: false,
            views: 0,
        };
        this.noticias.push(n);
        for (var _i = 0, _a = this.autores; _i < _a.length; _i++) {
            var A = _a[_i];
            if (A.nome == autor) {
                A.noticias++;
            }
        }
        ;
    };
    NoticiasService.prototype.Publicar = function (notica) {
        var n;
        for (var _i = 0, _a = this.noticias; _i < _a.length; _i++) {
            n = _a[_i];
            if (n === notica) {
                n.publicada = true;
            }
        }
        for (var _b = 0, _c = this.autores; _b < _c.length; _b++) {
            var a = _c[_b];
            if (a.nome == n.autor) {
                a.publicacoes++;
            }
        }
    };
    NoticiasService.prototype.views = function (id) {
        for (var _i = 0, _a = this.noticias; _i < _a.length; _i++) {
            var n = _a[_i];
            if (id == n.id) {
                n.views++;
            }
        }
    };
    NoticiasService.prototype.Ler = function () {
        for (var _i = 0, _a = this.noticias; _i < _a.length; _i++) {
            var n = _a[_i];
            if (this.idAtual == n.id) {
                this.NoticiaAtualAutor = n.autor;
                this.NoticiaAtualConteudo = n.conteudo;
            }
        }
    };
    NoticiasService.prototype.retornaQtdNoticias = function () {
        this.autores.sort(function (a, b) { return (a.noticias > b.noticias) ? -1 : 1; });
        return this.autores;
    };
    NoticiasService.prototype.Ranking = function () {
        this.noticias.sort(function (a, b) { return (a.views > b.views) ? -1 : 1; });
        return this.noticias.slice(0, 5);
    };
    NoticiasService.prototype.AutorMaisPubicou = function () {
        this.autores.sort(function (a, b) { return (a.publicacoes > b.publicacoes) ? -1 : 1; });
        return this.autores[0];
    };
    NoticiasService.prototype.atualizaDataSource = function () {
        this.dataSource.data = [];
        for (var _i = 0, _a = this.autores; _i < _a.length; _i++) {
            var autor = _a[_i];
            this.dataSource.data.push({ "label": autor.nome, "value": String(autor.noticias) });
        }
        return this.dataSource;
    };
    NoticiasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoticiasService);
    return NoticiasService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\LPWEB\MARC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map