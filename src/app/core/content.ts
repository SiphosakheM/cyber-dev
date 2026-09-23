export interface NavLinkDef {
  id: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  accent: 'green' | 'cyan' | 'purple';
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  kind: 'security' | 'backend' | 'cli' | 'game';
}

export interface Certification {
  title: string;
  issuer: string;
  kind: 'code' | 'shield' | 'network';
}

export interface TermCommand {
  command: string;
  output: (args: string) => string[];
}

export const NAV_LINKS: NavLinkDef[] = [
  { id: 'hero', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'certs', label: 'certs' },
  { id: 'contact', label: 'contact' },
];

export const HERO_ROLES = [
  'Software Developer',
  'Cybersecurity Enthusiast',
  'Peer Tutor',
];

export const ABOUT = {
  headline: 'Engineering Secure Systems',
  body: [
    'I am a backend-focused software developer and peer tutor at WeThinkCode_. With a foundational background in mechanical draughting and system design, I transitioned into full-stack development to build robust, scalable architectures. I have a deep passion for web security and ethical hacking, actively blending secure coding practices with hands-on penetration testing methodologies.',
  ].join(' '),
  focuses: ['Backend Architecture', 'Web Security', 'Ethical Hacking', 'Mentorship / Peer Tutoring'],
};

export const SKILLS: SkillCategory[] = [
  {
    id: 'dev',
    label: 'Software Development',
    accent: 'green',
    items: [
      'Java 26',
      'Python',
      'SQL',
      'MySQL',
      'JavaScript',
      'Angular',
      'Object-Oriented Programming',
      'JUnit 5 Testing',
      'System Architecture',
    ],
  },
  {
    id: 'sec',
    label: 'Cybersecurity',
    accent: 'cyan',
    items: [
      'Ethical Hacking',
      'Burp Suite',
      'Nmap',
      'Metasploit',
      'CyberChef',
      'OpenVPN',
      'Web Security',
    ],
  },
  {
    id: 'env',
    label: 'Environments & Tools',
    accent: 'purple',
    items: [
      'Linux (Parrot OS, Zorin OS, Pop!_OS)',
      'Git',
      'GitHub Actions',
      'IntelliJ IDEA',
      'VS Code',
      'OpenCode AI',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'url-interceptor',
    title: 'Real-Time URL Interceptor & Threat Mitigator',
    context: 'SS26Hack IDEATHON · Team Digiguards',
    description:
      'Architected a threat mitigation system bridging backend development and network security to intercept and analyze URLs in real time.',
    tags: ['Cybersecurity', 'Backend', 'Networking'],
    kind: 'security',
  },
  {
    id: 'java-sims',
    title: 'Multi-Level Java Simulation Engines',
    context: 'Entelect Hack<IT> 2026',
    description:
      'Developed high-performance backend logic and multi-level simulation engines utilizing Java 26 and JUnit 5 testing frameworks.',
    tags: ['Java 26', 'JUnit 5', 'Simulation'],
    kind: 'backend',
  },
  {
    id: 'pyquiz',
    title: 'PyQuiz Engine',
    context: 'Personal Development',
    description:
      'Built a robust Command Line Interface (CLI) quiz engine and auto-grader in Python, featuring JSON question bank parsing and CSV result logging.',
    tags: ['Python', 'CLI', 'JSON', 'CSV'],
    kind: 'cli',
  },
  {
    id: 'echo-escape',
    title: 'Echo Escape',
    context: 'Game Jam Entry',
    description:
      'Designed and developed "Echo Escape," an interactive game created during a game jam using JavaScript.',
    tags: ['JavaScript', 'Game Design', 'Canvas'],
    kind: 'game',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'FNB App Academy Full Stack Developer Certification',
    issuer: 'FNB App Academy',
    kind: 'code',
  },
  {
    title: 'TryHackMe Pre-Security Path',
    issuer: 'TryHackMe',
    kind: 'shield',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    kind: 'network',
  },
];

export const CONTACT = {
  email: 'Siphosakhemsimanngo@gmail.com',
  emailHref: 'mailto:Siphosakhemsimanngo@gmail.com',
  github: 'https://github.com/siphosakhe-dev',
  githubLabel: 'github.com/siphosakhe-dev',
  githubNote: 'verify token — link placeholder until repo live',
  message:
    'Open for secure communications, project collaborations, and hackathons.',
  location: 'Johannesburg · South Africa (UTC+2)',
};

export const TERM_COMMANDS: TermCommand[] = [
  {
    command: 'help',
    output: () => [
      'Available commands:',
      '  help                 list available commands',
      '  whoami               who am i?',
      '  about                read the operator profile',
      '  skills               dump capability matrix',
      '  projects             enumerate deployed projects',
      '  certs                verify certifications',
      '  contact              open secure channel',
      '  ls / pwd             inspect the environment',
      '  matrix               enter the matrix',
      '  ping <host>          test connectivity',
      '  sudo <cmd>           escalate privileges (denied by policy)',
      '  clear                purge terminal history',
    ],
  },
  {
    command: 'whoami',
    output: () => [
      'siphosakhe',
      '> role:       Software Developer | Cybersecurity Enthusiast | Peer Tutor',
      '> clearance:  SECURE',
      '> origin:     WeThinkCode_ · Johannesburg, ZA',
    ],
  },
  {
    command: 'ls',
    output: () => [
      'about.txt   skills.json   projects/   certs.crt   contact.gpg',
    ],
  },
  {
    command: 'pwd',
    output: () => ['/var/www/cyber-dev'],
  },
  {
    command: 'date',
    output: () => [`${new Date().toUTCString()} — all systems nominal`],
  },
  {
    command: 'exit',
    output: () => ['logout',
      'Session terminated. Re-authenticate by typing any command.'],
  },
  {
    command: 'whoami',
    output: () => [
      'siphosakhe',
      '> role:       Software Developer | Cybersecurity Enthusiast | Peer Tutor',
      '> clearance:  SECURE',
      '> origin:     WeThinkCode_ · Johannesburg, ZA',
    ],
  },
  {
    command: 'about',
    output: () => [ABOUT.headline, `> ${ABOUT.body}`],
  },
  {
    command: 'skills',
    output: () => {
      const lines: string[] = ['capability matrix:'];
      for (const cat of SKILLS) {
        lines.push(`  [${cat.id}] ${cat.label}: ${cat.items.join(', ')}`);
      }
      return lines;
    },
  },
  {
    command: 'projects',
    output: () => {
      const lines: string[] = ['deployed projects:'];
      PROJECTS.forEach((p, i) =>
        lines.push(`  ${i + 1}. ${p.title} — ${p.context}`),
      );
      return lines;
    },
  },
  {
    command: 'certs',
    output: () => [
      'verified certificates:',
      ...CERTIFICATIONS.map((c) => `  [OK] ${c.title} — ${c.issuer}`),
    ],
  },
  {
    command: 'contact',
    output: () => [
      `email: ${CONTACT.email}`,
      `github: ${CONTACT.github}`,
      CONTACT.message,
    ],
  },
  {
    command: 'matrix',
    output: () =>
      Array.from({ length: 8 }, () =>
        Array.from({ length: 44 }, () =>
          Math.round(Math.random()) ? '0' : '1',
        ).join(''),
      ),
  },
  {
    command: 'ping',
    output: () => [
      'PONG — latency 42ms stable',
      'packets: transmitted 1, received 1, 0% packet loss',
    ],
  },
  {
    command: 'sudo',
    output: () => [
      'siphosakhe is not in the sudoers file.',
      'This incident will be reported to the sysadmin.',
    ],
  },
];