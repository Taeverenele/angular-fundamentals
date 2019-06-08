import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <div class="app">
    {{ title }}
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ultimate Angular'

}