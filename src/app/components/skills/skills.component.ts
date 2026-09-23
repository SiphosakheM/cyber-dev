import { Component, computed } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CERTIFICATIONS, PROJECTS, SKILLS } from '../../core/content';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { TerminalComponent } from '../terminal/terminal.component';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, SectionHeaderComponent, TerminalComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  standalone: true,
})
export class SkillsComponent {
  readonly skills = SKILLS;

  readonly capabilityCount = computed(() =>
    this.skills.reduce((total, cat) => total + cat.items.length, 0),
  );
  readonly projectCount = PROJECTS.length;
  readonly certCount = CERTIFICATIONS.length;
}