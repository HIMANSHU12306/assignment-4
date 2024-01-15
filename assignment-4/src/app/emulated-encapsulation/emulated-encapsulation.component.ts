import { Component,ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  selector: 'app-emulated-encapsulation',
  standalone: true,
  imports: [NoEncapsulationComponent],
  templateUrl: './emulated-encapsulation.component.html',
  styleUrl: './emulated-encapsulation.component.css',
  encapsulation: ViewEncapsulation.Emulated,
   

})
export class EmulatedEncapsulationComponent {

}
