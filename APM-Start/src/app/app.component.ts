import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bh-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
        <li>
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,

  // `
  //   <div>
  //     <h1>{{ pageTitle }}</h1>
  //     <pm-products></pm-products>
  //   </div>
  // `,
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
