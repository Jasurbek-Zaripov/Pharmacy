import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pharmacy';
  selectedRegion = 'Hudud';
  pageName = 'home';
  hudud = [{ name: 'Farqi', regions: ["yo'q"] }, { name: 'Toshkent viloyati', regions: ['Olmazor', 'Chilonzor'] }, { name: 'Jizzax viloyati', regions: ['Jizzax shahar', 'Forish tumani', 'Baxmal tumani', 'Zomin tumani'] }];
  getDate(ms?: number) {
    if (ms) {
      return new Date(Date.now() - ms).toLocaleDateString();
    }
    return new Date().toLocaleDateString();
  }
}
