    import { Component } from '@angular/core';
     
    @Component({
      selector: 'app-root',
      styleUrls: ['./app.component.css'],    
      template: `
      <h1>{{title}}</h1>
      <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Панель приборов</a>
          <a routerLink="/purchases" routerLinkActive="active">Покупки</a>
      </nav>
      <router-outlet></router-outlet>
      `
    })
    export class AppComponent {
      title = 'Tour of Heroes';
    }