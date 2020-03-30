import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Notes App';
  searchText: any;
  heroes = [
    { id: 1, name: 'This is India', country: 'India' },
    { id: 2, name: 'This is USA' , country: 'USA'},
    { id: 3, name: 'This is UK' , country: 'UK'},
    { id: 4, name: 'This is Canada' , country: 'Canada' },
    { id: 5, name: 'This is Russia' , country: 'Russia'},
    { id: 6, name: 'This is China' , country: 'China'},
    { id: 7, name: 'This is Germany' , country: 'Germany'},
    { id: 8, name: 'This is Hong Kong' , country: 'Hong Kong'},
    { id: 9, name: 'This is South Africa' , country: 'South Africa'},
    { id: 10, name: 'This is Sri lanka' , country: 'Sri Lanka'}
  ];
}
