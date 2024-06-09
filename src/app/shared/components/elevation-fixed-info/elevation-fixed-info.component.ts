import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elevation-fixed-info',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './elevation-fixed-info.component.html',
  styleUrl: './elevation-fixed-info.component.scss'
})
export class ElevationFixedInfoComponent {

  @Input() position: "LEFT" | "RIGHT" = 'LEFT';

}
