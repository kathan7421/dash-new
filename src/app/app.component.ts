import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';


  showLayout: boolean = true;

  constructor(private router: Router) {
    // Subscribe to router events to update showLayout flag
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateShowLayout(event.url);
      }
    });
  }

  // Method to update showLayout flag based on current route
  updateShowLayout(url: string): void {
    // Exclude layout, sidebar, and footer components for the login route
    this.showLayout = !url.includes('/login');
  }
}
