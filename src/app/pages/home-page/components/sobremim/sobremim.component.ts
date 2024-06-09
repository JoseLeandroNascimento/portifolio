import { Component } from '@angular/core';
import { UlComponent } from '../../../../shared/components/ul/ul.component';
import { LiComponent } from '../../../../shared/components/li/li.component';

@Component({
  selector: 'app-sobremim',
  standalone: true,
  imports: [
    UlComponent,
    LiComponent
  ],
  templateUrl: './sobremim.component.html',
  styleUrl: './sobremim.component.scss'
})
export class SobremimComponent {

}
