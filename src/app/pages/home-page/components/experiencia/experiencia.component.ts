import { Component } from '@angular/core';
import { ListOptionComponent } from '../../../../shared/components/list-option/list-option.component';
import { ListOption } from '../../../../shared/components/list-option/list-options.model';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    ListOptionComponent
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  public listOptions: ListOption[] = [
    { title: "Upstatement" },
    { title: "Apple" },
    { title: "Scout Studio" },
    { title: "Starry" }
  ]
}
