import { Component, Input } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() lessonName: string = ""
}
