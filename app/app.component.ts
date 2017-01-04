import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/channel" routerLinkActive="active">栏目管理</a>
    <a routerLink="/contentManage" routerLinkActive="active">文章管理</a>
</nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'This is CMS .';
}

