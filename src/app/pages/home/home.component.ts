import { Component } from '@angular/core';
import { BoxApresentationComponent } from './components/box-apresentation/box-apresentation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoxApresentationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
