///<reference path="node_modules/angular2/typings/browser.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('core-js');
require('rxjs/Rx');
require('zone.js/dist/zone');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent = __decorate([
        core_1.Component({
            selector: 'hello-world',
            template: "\n        <h1>Hello world!</h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <hello-world></hello-world>\n    ",
            directives: [HelloWorldComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
}());
platform_browser_dynamic_1.bootstrap(MyAppComponent);
