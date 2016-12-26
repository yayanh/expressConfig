"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//不显示引入，你会得到"Uncaught reflect-metadata shim is required when using class decorators"的错误
require("reflect-metadata");
require("zone.js/dist/zone");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map