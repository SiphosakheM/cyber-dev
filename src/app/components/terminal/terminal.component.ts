import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TERM_COMMANDS } from '../../core/content';

interface TermLine {
  text: string;
  kind: 'cmd' | 'out' | 'ok' | 'err';
}

@Component({
  selector: 'app-terminal',
  imports: [FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss',
  standalone: true,
})
export class TerminalComponent implements AfterViewChecked {
  @ViewChild('bodyRef') private bodyRef: ElementRef<HTMLElement> | undefined;

  prompt = 'guest@cyber-dev:~$';
  input = '';
  lines: TermLine[] = [];

  constructor() {
    this.lines.push(
      { text: 'cyber-dev secure shell v2.0.1 — uplink encrypted', kind: 'ok' },
      { text: 'type "help" to list available commands.', kind: 'out' },
    );
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  run(): void {
    const raw = this.input.trim();
    this.input = '';
    if (raw) {
      this.lines.push({ text: raw, kind: 'cmd' });
    }
    if (!raw) {
      return;
    }

    const [cmd, ...args] = raw.toLowerCase().split(/\s+/);
    const argStr = args.join(' ');

    if (cmd === 'clear') {
      this.lines = [];
      return;
    }

    const def = TERM_COMMANDS.find((c) => c.command === cmd);
    if (def) {
      for (const line of def.output(argStr)) {
        this.lines.push({
          text: line,
          kind: line.startsWith('[ERR]') ? 'err' : 'out',
        });
      }
    } else {
      this.lines.push({
        text: `bash: ${cmd}: command not found. try [help].`,
        kind: 'err',
      });
    }
  }

  focusInput(): void {
    document.getElementById('term-input')?.focus();
  }

  private scrollToBottom(): void {
    const el = this.bodyRef?.nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }
}