import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ElevationFixedInfoComponent } from './shared/components/elevation-fixed-info/elevation-fixed-info.component';
import { ListRedesSociaisComponent } from './shared/components/list-redes-sociais/list-redes-sociais.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    ElevationFixedInfoComponent,
    ListRedesSociaisComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
