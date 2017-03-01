import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 template: `

  <div class ="multipageStyling">
      <a routerLink="">Home Page </a>
      <a routerLink="/register">Register Page </a>
      <a routerLink="/encounters">Encounters Page </a>
      <a routerLink="/report">Report Page </a>
      <a routerLink="/notfound">Not Found Page </a>
    <router-outlet></router-outlet>
  </div>
  `,
 styleUrls: ['./app.component.scss']
})

export class AppComponent {

}

//Another Solution
// export class AppComponent {
//  title = 'app works!';
//  newTitle = '';
//  clickCount = 0;
//  changeTitle(event){
//    if(this.title == this.newTitle){
//      this.title = 'You clicked the button...';
//    this.clickCount = this.clickCount + 1;
//  } else {
//    this.title = this.newTitle;
//    this.clickCount++;
//    }
//  }
//  storeTitle(event){
//    this.newTitle = event.target.value;
//   }
// }
//SOLUTION
// export class AppComponent {
//  title = 'app works!';
//  newTitle = '';
//  input = '';
//  clickCount = 0;
//  changeTitle(event){
//    this.input = event.target.value;
//  }
//  updateTitle(){
//   this.title = this.input;
//  }
// }
