import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test'
  results = [{name: "test", value: 1}, {name: "test2", value: 2}, {name:"test3", value: 3}]
  isLoading = false
}
