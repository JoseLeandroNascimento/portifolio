import { Component } from '@angular/core';
import { BoxApresentationComponent } from './components/box-apresentation/box-apresentation.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { SobremimComponent } from './components/sobremim/sobremim.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BoxApresentationComponent,
    SectionComponent,
    SobremimComponent,
    ExperienciaComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
