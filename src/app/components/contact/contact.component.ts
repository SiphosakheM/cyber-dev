import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { CONTACT } from '../../core/content';
import { SectionHeaderComponent } from '../section-header/section-header.component';

interface TransmissionStatus {
  message: string;
  kind: 'ok' | 'out' | 'err';
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true,
})
export class ContactComponent {
  readonly contact = CONTACT;

  handle = '';
  subject = '';
  message = '';

  status: TransmissionStatus[] = [];
  transmitting = false;
  received = false;

  private readonly steps = [
    { message: 'initializing secure channel...', kind: 'out', delay: 200 },
    { message: 'generating 2048-bit RSA keypair ............ OK', kind: 'ok', delay: 550 },
    { message: 'handshake complete — TLS 1.3 negotiated', kind: 'out', delay: 950 },
    { message: 'encrypting payload [AES-256-GCM] ........... OK', kind: 'ok', delay: 1400 },
    { message: 'opening mail client for transmission...', kind: 'out', delay: 1850 },
  ] as const;

  async transmit(): Promise<void> {
    if (this.transmitting) {
      return;
    }
    if (!this.handle.trim() || !this.message.trim()) {
      this.status = [
        {
          message: '[ERR] integrity check failed — payload and sender handle are mandatory.',
          kind: 'err',
        },
      ];
      return;
    }

    this.transmitting = true;
    this.received = false;
    this.status = [];

    for (const step of this.steps) {
      await this.sleep(step.delay);
      this.status = [...this.status, { message: step.message, kind: step.kind }];
    }

    this.received = true;
    this.openMailClient();

    await this.sleep(1400);
    this.transmitting = false;
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private openMailClient(): void {
    const subject = encodeURIComponent(this.subject.trim() || 'Secure transmission from your portfolio');
    const body = encodeURIComponent(
      `[SECURE MESSAGE — SENT VIA cyber-dev PORTFOLIO]\n\nHandle: ${this.handle}\n\n${this.message}\n\n---\nend transmission\n`,
    );
    window.open(`${this.contact.emailHref}?subject=${subject}&body=${body}`, '_self');
  }
}