import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  animations: [
    trigger('accordionBody', [
      state('open', style({
        height: '*',
        opacity: 1,
        paddingBottom: '*'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        paddingBottom: '0px'
      })),
      transition('open <=> closed', animate('300ms ease-in-out'))
    ])
  ]
})
export class AccordionComponent {
  @Input() title: string = '';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
