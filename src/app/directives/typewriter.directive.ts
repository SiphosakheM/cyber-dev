import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Typewriter directive — types out each phrase, holds, then deletes it
 * and moves on to the next phrase in the array.
 */
@Directive({
  selector: '[appTypewriter]',
})
export class TypewriterDirective implements OnInit, OnDestroy {
  @Input({ required: true }) words: string[] = [];
  @Input() typeSpeed = 85;
  @Input() deleteSpeed = 45;
  @Input() holdTime = 1700;

  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.setAttribute('aria-label', this.words?.join(', '));
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
    }
  }

  private tick(): void {
    const word = this.words[this.wordIndex % this.words.length] ?? '';
    this.charIndex = this.deleting ? this.charIndex - 1 : this.charIndex + 1;
    this.el.nativeElement.textContent = word.substring(0, this.charIndex);

    let delay = this.deleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.deleting && this.charIndex === word.length) {
      this.deleting = true;
      delay = this.holdTime;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delay = 400;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}