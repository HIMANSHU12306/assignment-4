import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-pipe',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './default-pipe.component.html',
  styleUrl: './default-pipe.component.css'
})
export class DefaultPipeComponent {
todaydate: any = new Date(2024,0, 11);

}
