import { Component } from '@angular/core';
import { CONTACT } from '../../core/content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly contact = CONTACT;
}