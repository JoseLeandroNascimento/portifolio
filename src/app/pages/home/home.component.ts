import { Component } from '@angular/core';
import { BoxApresentationComponent } from './components/box-apresentation/box-apresentation.component';
import { SectionComponent } from '../../shared/components/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BoxApresentationComponent,
    SectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
