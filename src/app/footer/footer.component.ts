import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() name = '';
  @Input() studentNumber = '';
  @Input() loginName = '';
  @Input() campus = '';
}
