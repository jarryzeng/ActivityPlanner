import { Component, Input, Output, EventEmitter } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() title: string = "";
  @Output("setTitle") setTitle: EventEmitter<any> = new EventEmitter(true);

  allItems = [
    { description: "教師課程表", url: "#" },
    { description: "教師管理", url: "#" }
  ];

  settitle(new_title: string){
    this.setTitle.emit(new_title);
  }

  navbar_switch(){
    document.querySelector(".navbar-container .open_navbar_btn")?.classList.toggle("close");
    document.querySelector(".navbar-container .navbar_btn_text")?.classList.toggle("close");
    document.querySelector(".navbar-container .sidebar")?.classList.toggle("close");
  }

  toggleTheme() {
    document.querySelector(".navbar-container")?.classList.toggle('dark-mode');
  }
}
