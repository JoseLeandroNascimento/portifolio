import { Component, HostListener } from '@angular/core';
import { Menu } from '../../model/menu.model';
import { MENU_OPTIONS } from '../../constants/MENU_OPTIONS';
import { NgClass, TitleCasePipe } from '@angular/common';
import { NumerarPipe } from '../../pipe/numerar.pipe';
import { NumeradorComponent } from '../numerador/numerador.component';
import { BotaoComponent } from '../botao/botao.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TitleCasePipe,
    NumeradorComponent,
    BotaoComponent,
    LogoComponent,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public scrolled: boolean = false;
  public hiddenScrolledMenu: boolean = false;

  public menuOptions: Menu[] = MENU_OPTIONS;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const triggerPosition = 50;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.scrolled = scrollPosition > triggerPosition;
    this.hiddenScrolledMenu = scrollPosition > (triggerPosition + 150)
  }

}
