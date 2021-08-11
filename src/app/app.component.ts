import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date = new Date();
  alter_links: any[] = ["About", "Experience", "Projects", "Education"];
}
