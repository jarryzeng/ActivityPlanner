import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ActivityListComponent } from './activity-list/activity-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ActivityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '教師課表排程';
  
  setTitle(new_title: string){
    this.title = new_title;
  }
  public isLightTheme = true;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
}
