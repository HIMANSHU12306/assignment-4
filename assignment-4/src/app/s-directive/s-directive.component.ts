import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-s-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-directive.component.html',
  styleUrl: './s-directive.component.css'
})
export class SDirectiveComponent {
  showHeader: boolean = true;
  isUserLoggedIn: boolean = false;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  status: string = 'active';

}
