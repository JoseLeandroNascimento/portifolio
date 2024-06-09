import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'ul[app-ul]',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ul.component.html',
  styleUrl: './ul.component.scss'
})
export class UlComponent implements OnInit {



  public repeat!: string;


  ngOnInit(): void {


  }
}
