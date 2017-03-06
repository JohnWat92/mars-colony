import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 template: `

  <div class ="multipageStyling">
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
