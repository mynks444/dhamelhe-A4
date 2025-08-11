import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',  // must exist in same folder
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() assignmentTitle = '';
  @Input() name = '';
}
