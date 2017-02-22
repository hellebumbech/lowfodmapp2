import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header>
              <nav id="header-nav" class="navbar navbar-default">
                <div class="container">
                  <div class="navbar-header">
                    <div class="navbar-brand">
                      <a routerLink="/"><h1>Home</h1></a>
                    </div>
                  </div>
                  </div>
                </nav>
            </header>
          <router-outlet></router-outlet>`,
})
export class AppComponent  { 
  
}
