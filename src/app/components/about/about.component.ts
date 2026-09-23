import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ABOUT } from '../../core/content';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {
  readonly about = ABOUT;
}