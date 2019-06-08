import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <div>
    {{ title }}
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ultimate Angular'

}