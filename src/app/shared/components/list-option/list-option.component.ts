import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListOption } from './list-options.model';

@Component({
  selector: 'app-list-option',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './list-option.component.html',
  styleUrl: './list-option.component.scss'
})
export class ListOptionComponent {

  @Input() indexCurrent: number = 0;
  @Input({ required: true }) options!: ListOption[]

  public heightItem: number = 45;
  public transformY!: string


  public changeInde(index: number) {

    this.indexCurrent = index;
    this.calculateScrollPosition()

  }

  calculateScrollPosition() {

    const scrollValue: number = this.indexCurrent * this.heightItem;

    this.transformY = `translateY(${scrollValue}px)`
  }
}
