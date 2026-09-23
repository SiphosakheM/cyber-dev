import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROJECTS } from '../../core/content';
import { SectionHeaderComponent } from '../section-header/section-header.component';

const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#________01';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  /**
   * "Decrypt" animation — rapidly scramble the card title then settle it.
   */
  decrypt(event: MouseEvent, target: string): void {
    const titleEl = (event.currentTarget as HTMLElement | null)?.querySelector(
      '.project-title',
    ) as HTMLElement | null;
    if (!titleEl || titleEl.getAttribute('data-locked') === 'true') {
      return;
    }

    titleEl.setAttribute('data-locked', 'true');
    const frames = 12;
    let frame = 0;

    const step = () => {
      frame += 1;
      const progress = frame / frames;
      const revealed = target
        .split('')
        .map((ch, i) => {
          if (ch === ' ') {
            return ' ';
          }
          const threshold = Math.floor(progress * target.length);
          if (i + 1 <= threshold || progress >= 1) {
            return ch;
          }
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join('');

      titleEl.textContent = revealed;

      if (frame < frames) {
        requestAnimationFrame(step);
      } else {
        titleEl.textContent = target;
        setTimeout(() => titleEl.removeAttribute('data-locked'), 80);
      }
    };

    requestAnimationFrame(step);
  }
}