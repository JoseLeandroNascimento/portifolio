import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {

  @Input({ required: true }) title!: string
  @Input({ required: true }) descricao!: string



}
