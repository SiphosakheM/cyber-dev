import { Component, HostListener, signal } from '@angular/core';
import { NAV_LINKS } from '../../core/content';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  readonly links = NAV_LINKS;
  readonly active = signal('hero');
  readonly menuOpen = signal(false);

  private readonly sections = new Map<string, HTMLElement>();

  ngAfterViewInit(): void {
    for (const link of this.links) {
      const el = document.getElementById(`section-${link.id}`);
      if (el) {
        this.sections.set(link.id, el);
      }
    }
    this.updateActive();
  }

  scrollToId(event: Event, id: string): void {
    event.preventDefault();
    document.getElementById(`section-${id}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.updateActive();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 860) {
      this.menuOpen.set(false);
    }
  }

  private updateActive(): void {
    const probe = 140;
    let current = 'hero';
    for (const [id, el] of this.sections) {
      if (el.getBoundingClientRect().top <= probe) {
        current = id;
      }
    }
    this.active.set(current);
  }
}