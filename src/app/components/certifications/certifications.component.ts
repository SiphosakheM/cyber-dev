import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CERTIFICATIONS } from '../../core/content';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-certifications',
  imports: [RevealDirective, SectionHeaderComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  standalone: true,
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
}