import { Component } from '@angular/core';
import { TypewriterDirective } from '../../directives/typewriter.directive';
import { CONTACT, HERO_ROLES } from '../../core/content';

@Component({
  selector: 'app-hero',
  imports: [TypewriterDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  standalone: true,
})
export class HeroComponent {
  readonly roles = HERO_ROLES;
  readonly contact = CONTACT;
  readonly name = 'Siphosakhe Mathews Msimango';

  goToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}