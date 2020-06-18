import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayItem: string = 'recipe';
  displayPage(displayItem: string){
    this.displayItem = displayItem;
  }
  
}
