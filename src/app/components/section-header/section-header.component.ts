import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <header class="section-header">
      <span class="section-index">{{ index }}</span>
      <h2 class="section-title glitch" [attr.data-text]="title">
        {{ title }}
      </h2>
      <span class="section-rule" aria-hidden="true"></span>
      @if (sub) {
        <p class="section-sub">{{ sub }}</p>
      }
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .section-sub {
        margin-top: 0.75rem;
      }
    `,
  ],
  standalone: true,
})
export class SectionHeaderComponent {
  @Input() index = '';
  @Input() title = '';
  @Input() sub?: string;
}