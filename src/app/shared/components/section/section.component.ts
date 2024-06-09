import { Component, Input } from '@angular/core';
import { NumeradorComponent } from '../numerador/numerador.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [NumeradorComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  @Input({ required: true }) indexSection!: number
  @Input({ required: true }) title!: string

}
