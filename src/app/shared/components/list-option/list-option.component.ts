import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListOption } from './list-options.model';

@Component({
  selector: 'app-list-option',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './list-option.component.html',
  styleUrl: './list-option.component.scss'
})
export class ListOptionComponent implements OnInit {


  @Input() indexCurrent: number = 0;
  @Input({ required: true }) options!: ListOption<any>[]

  @Output() select: EventEmitter<ListOption<any>> = new EventEmitter();

  public heightItem: number = 45;
  public transformY!: string

  ngOnInit(): void {
    this.changeIndex(this.indexCurrent);
  }

  public changeIndex(index: number) {

    this.indexCurrent = index;
    this.calculateScrollPosition()

    this.select.emit(this.options[index]);

  }

  calculateScrollPosition() {

    const scrollValue: number = this.indexCurrent * this.heightItem;

    this.transformY = `translateY(${scrollValue}px)`
  }

}
