import { Component, Input } from '@angular/core';
import { NumerarPipe } from '../../pipe/numerar.pipe';

@Component({
  selector: 'app-numerador',
  standalone: true,
  imports: [NumerarPipe],
  templateUrl: './numerador.component.html',
  styleUrl: './numerador.component.scss'
})
export class NumeradorComponent {

  @Input({ required: true }) index!: number

}
