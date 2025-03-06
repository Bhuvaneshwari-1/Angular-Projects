import { Component } from '@angular/core';
import { HelloComponent } from './HelloComponent/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent], // ✅ Include HelloComponent in imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
