import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  standalone: true,
  imports: [],
  templateUrl: './no-encapsulation.component.html',
  styleUrl: './no-encapsulation.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {
[x: string]: any;
  constructor(private el: ElementRef, private renderer: Renderer2){
 
  }
  @Input() set appHighlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
  
}
