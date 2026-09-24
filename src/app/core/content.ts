export interface NavLinkDef {
  id: string;
  label: string;
}

export interface SkillItem {
  label: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  accent: 'green' | 'cyan' | 'purple';
  icon: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  kind: 'security' | 'backend' | 'cli' | 'game';
  url: string;
  icon: string;
  wip?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  accent: 'green' | 'cyan' | 'purple';
}

export interface FocusItem {
  label: string;
  icon: string;
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
  'Full-Stack Developer | Aspiring DevSecOps & Red Team Pentester | Peer Tutor',
];

export const ABOUT = {
  headline: 'Engineering Secure Systems',
  body: [
    'I am a full-stack software developer and peer tutor at WeThinkCode_, where I am currently studying software engineering.',
    'With a diverse foundational background in mechanical drafting and design, electrical work, and diesel mechanics, I transitioned into full-stack engineering to build robust, scalable architectures.',
    'I am an aspiring DevSecOps engineer and Red Team pentester, actively blending secure coding practices with hands-on offensive security methodologies.',
  ].join(' '),
  focuses: [
    { label: 'Full-Stack Engineering', icon: 'fa-solid fa-code' },
    { label: 'DevSecOps Pipelines', icon: 'fa-solid fa-gears' },
    { label: 'Red Team Pentesting', icon: 'fa-solid fa-user-secret' },
    { label: 'Peer Tutoring / Mentorship', icon: 'fa-solid fa-graduation-cap' },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    id: 'dev',
    label: 'Full-Stack Development',
    accent: 'green',
    icon: 'fa-solid fa-code',
    items: [
      { label: 'Angular', icon: 'fa-brands fa-angular' },
      { label: 'TypeScript', icon: 'fa-brands fa-js' },
      { label: 'HTML', icon: 'fa-brands fa-html5' },
      { label: 'CSS', icon: 'fa-brands fa-css3-alt' },
      { label: 'Tailwind CSS', icon: 'fa-solid fa-wind' },
      { label: 'Java 26', icon: 'fa-brands fa-java' },
      { label: 'Python', icon: 'fa-brands fa-python' },
      { label: 'SQL', icon: 'fa-solid fa-database' },
      { label: 'MySQL', icon: 'fa-solid fa-server' },
      { label: 'OOP', icon: 'fa-solid fa-cubes' },
    ],
  },
  {
    id: 'sec',
    label: 'Cybersecurity & Red Team',
    accent: 'cyan',
    icon: 'fa-solid fa-shield-halved',
    items: [
      { label: 'Ethical Hacking', icon: 'fa-solid fa-user-secret' },
      { label: 'Red Team Pentesting', icon: 'fa-solid fa-crosshairs' },
      { label: 'Burp Suite', icon: 'fa-solid fa-bug' },
      { label: 'Nmap', icon: 'fa-solid fa-network-wired' },
      { label: 'Metasploit', icon: 'fa-solid fa-satellite-dish' },
      { label: 'CyberChef', icon: 'fa-solid fa-wand-magic-sparkles' },
      { label: 'OpenVPN', icon: 'fa-solid fa-lock' },
      { label: 'Web Security', icon: 'fa-solid fa-globe' },
    ],
  },
  {
    id: 'env',
    label: 'DevOps, Environments & Tools',
    accent: 'purple',
    icon: 'fa-solid fa-terminal',
    items: [
      { label: 'Docker', icon: 'fa-brands fa-docker' },
      { label: 'CI/CD Pipelines', icon: 'fa-solid fa-code-branch' },
      { label: 'Git', icon: 'fa-brands fa-git-alt' },
      { label: 'GitHub Actions', icon: 'fa-brands fa-github' },
      {
        label: 'Linux (Parrot OS, Zorin OS, Pop!_OS)',
        icon: 'fa-brands fa-linux',
      },
      { label: 'IntelliJ IDEA', icon: 'fa-solid fa-lightbulb' },
      { label: 'VS Code', icon: 'fa-solid fa-code' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'digiguard',
    title: 'DigiGuard — Real-Time URL Interceptor',
    context: 'SS26Hack IDEATHON',
    description:
      'Real-time URL interception and threat-mitigation system bridging backend development and network security. Offensive-first defense, actively in development.',
    tags: ['Cybersecurity', 'Networking', 'Real-Time'],
    kind: 'security',
    url: 'https://github.com/SiphosakheM/DigiGuard',
    icon: 'fa-solid fa-shield-halved',
    wip: true,
  },
  {
    id: 'hackit-photospheria',
    title: 'HackIT Photospheria — Simulation Engines',
    context: 'Entelect Hack<IT> 2026',
    description:
      'High-performance multi-level simulation engines built for the hackathon arena, exercised against rigorous test suites.',
    tags: ['Java 26', 'Simulation', 'Algorithms'],
    kind: 'backend',
    url: 'https://github.com/SiphosakheM/hackit_photospheria',
    icon: 'fa-solid fa-gears',
  },
  {
    id: 'pyquiz',
    title: 'PyQuiz Engine',
    context: 'Personal Development',
    description:
      'Python CLI quiz engine and auto-grader featuring JSON question-bank parsing and CSV result logging.',
    tags: ['Python', 'CLI', 'JSON', 'CSV'],
    kind: 'cli',
    url: 'https://github.com/SiphosakheM/PyQuiz',
    icon: 'fa-brands fa-python',
  },
  {
    id: 'echo-escape',
    title: 'Echo Escape',
    context: 'Game Jam Entry (JavaScript)',
    description:
      'Interactive escape-game jam entry built with raw JavaScript and canvas — pure browser play, no frameworks.',
    tags: ['JavaScript', 'Game Design', 'Canvas'],
    kind: 'game',
    url: 'https://siphosakhem.github.io/game-jam-echo-escape/',
    icon: 'fa-solid fa-gamepad',
  },
  {
    id: 'ssh-gateway',
    title: 'SSH Defense Gateway',
    context: 'School Electives',
    description:
      'Hardened SSH gateway lab — defense recipes, audit logging, and lockdown policies for remote-access infrastructure.',
    tags: ['SSH', 'Linux', 'Hardening'],
    kind: 'security',
    url: 'https://github.com/SiphosakheM/ssh-defense-gatway',
    icon: 'fa-solid fa-key',
  },
  {
    id: 'quantium-sim',
    title: 'Quantium Software Engineering Simulation',
    context: 'Professional Simulation',
    description:
      'Real-world job simulation — data pipelines, programmatic analysis, and rigorous test-driven quality checks in Python.',
    tags: ['Python', 'Data', 'TDD'],
    kind: 'backend',
    url: 'https://github.com/SiphosakheM/quantium-starter-repo',
    icon: 'fa-solid fa-briefcase',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'FNB App Academy Full Stack Developer Certification',
    issuer: 'FNB App Academy',
    icon: 'fa-solid fa-code',
    accent: 'green',
  },
  {
    title: 'TryHackMe Pre-Security Path',
    issuer: 'TryHackMe',
    icon: 'fa-solid fa-flag',
    accent: 'cyan',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    icon: 'fa-solid fa-user-shield',
    accent: 'purple',
  },
];

export const CONTACT = {
  email: 'Siphosakhemsimanngo@gmail.com',
  emailHref: 'mailto:Siphosakhemsimanngo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siphosakhe',
  linkedinLabel: 'linkedin.com/in/siphosakhe',
  github: 'https://github.com/SiphosakheM',
  githubLabel: 'github.com/SiphosakheM',
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
'> role:       Full-Stack Developer | Aspiring DevSecOps & Red Team Pentester | Student & Peer Tutor',
        '> clearance:  SECURE',
        '> origin:     WeThinkCode_ · Johannesburg, ZA — currently a student',
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
    output: () => [
      'logout',
      'Session terminated. Re-authenticate by typing any command.',
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
        lines.push(
          `  [${cat.id}] ${cat.label}: ${cat.items
            .map((item) => item.label)
            .join(', ')}`,
        );
      }
      return lines;
    },
  },
  {
    command: 'projects',
    output: () => {
      const lines: string[] = ['deployed projects:'];
      PROJECTS.forEach((p, i) =>
        lines.push(`  ${i + 1}. ${p.title} — ${p.context}  (${p.url})`),
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
      `email:    ${CONTACT.email}`,
      `linkedin: ${CONTACT.linkedin}`,
      `github:   ${CONTACT.github}`,
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