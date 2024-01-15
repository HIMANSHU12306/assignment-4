import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DefaultPipeComponent } from './default-pipe/default-pipe.component';
import { SDirectiveComponent } from './s-directive/s-directive.component';





@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EmulatedEncapsulationComponent,NoEncapsulationComponent,ShadowDomEncapsulationComponent,LifecycleHooksComponent,DefaultPipeComponent,SDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
