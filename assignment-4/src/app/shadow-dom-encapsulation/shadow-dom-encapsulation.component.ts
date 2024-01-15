
import { Component, ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  standalone: true,
  imports: [NoEncapsulationComponent,EmulatedEncapsulationComponent],
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrl: './shadow-dom-encapsulation.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {

}
