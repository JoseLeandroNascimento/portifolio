import { Component, Input } from '@angular/core';
import { Experiencia } from '../../../../shared/model/experiencia.model';
import { TitleCasePipe } from '@angular/common';
import { PeriodoPipe } from '../../../../shared/pipe/periodo.pipe';
import { UlComponent } from '../../../../shared/components/ul/ul.component';
import { LiComponent } from '../../../../shared/components/li/li.component';

@Component({
  selector: 'app-experiencia-view',
  standalone: true,
  imports: [
    TitleCasePipe,
    PeriodoPipe,
    UlComponent,
    LiComponent
  ],
  templateUrl: './experiencia-view.component.html',
  styleUrl: './experiencia-view.component.scss'
})
export class ExperienciaViewComponent {

  @Input() data!: Experiencia;;

}
