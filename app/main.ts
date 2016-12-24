import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//不显示引入，你会得到"Uncaught reflect-metadata shim is required when using class decorators"的错误
import 'reflect-metadata';
import  'zone.js/dist/zone';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
