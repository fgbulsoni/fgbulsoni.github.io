import { formatDuration } from '../lib/formatDuration';

type ContractInput = {
  role: string;
  org: string;
  domain: string;
  tease: string;
  /** Languages & platforms first; frameworks next; infra after. */
  stack: string[];
  /** Impact / scope proof — rendered after stack. */
  signals: string[];
  featured: boolean;
} & ({ started: string; duration?: never } | { duration: string; started?: never });

const contracts: ContractInput[] = [
  {
    role: 'AI Tutor — Software Engineering Expert',
    org: 'xAI',
    domain: 'AI · human data',
    tease:
      'Human data for coding LLMs — build software with the models, evaluate the code and SE quality; that signal feeds training.',
    /** Live contract: display duration is now − started (computed at build time). */
    started: '2026-05-01',
    stack: ['system design', 'architecture', 'backend', 'DevOps'],
    signals: ['human data', 'LLM-assisted coding', 'code evaluation'],
    featured: false,
  },
  {
    role: 'Senior Platform Engineer',
    org: 'Super Evil Megacorp',
    domain: 'Gaming',
    tease:
      'Multiplayer game backends for live titles — auth, economy, matchmaking, social, and the platform underneath.',
    duration: '~4 years',
    stack: [
      'Go / Gin',
      'Python / Flask',
      'Kubernetes',
      'Docker',
      'Azure',
      'GCP',
      'PlayFab',
      'MQTT',
    ],
    signals: ['30K+ DAU', 'multiplayer platform'],
    featured: true,
  },
];

export const site = {
  name: 'Felipe Bulsoni',
  /** Display login for terminal chrome (not GitHub username). */
  login: 'felipe.bulsoni',
  /** Real GitHub / profile handle. */
  handle: 'fgbulsoni',
  title: 'Software Engineering Manager & Senior Software Engineer',
  tagline:
    'Hands-on engineering leader across backends, platforms, and integrations — from healthtech and finance to games and coding-LLM human data.',
  location: 'Santos, SP — Brazil',
  email: 'felipe.bulsoni@gmail.com',
  links: {
    github: 'https://github.com/fgbulsoni',
    linkedin: 'https://www.linkedin.com/in/fgbulsoni/',
    site: 'https://fgbulsoni.github.io',
    resume: '/resume/',
  },
  focus:
    'Engineering leadership · backend & platform · integrations · data pipelines · production systems',
  domains: [
    { id: 'healthtech', label: 'Healthtech', hint: 'Marketplace platform · integrations' },
    { id: 'finance', label: 'Finance', hint: 'Credit data · payment rails' },
    { id: 'devops', label: 'DevOps tooling', hint: 'SDKs · Ansible/Puppet/Chef' },
    { id: 'bigtech', label: 'Big tech', hint: 'DevOps tooling · data platforms' },
    { id: 'gaming', label: 'Gaming', hint: 'Multiplayer backends · 30K+ DAU' },
    { id: 'ai', label: 'AI for code', hint: 'Build with LLMs · evaluate code' },
  ],
  about: [
    'I build and lead software where reliability matters: APIs, integration platforms, data pipelines, and the delivery systems around them. Still hands-on as a manager.',
    'I care about clear boundaries, operability, and teams that can ship without heroics. Prefer boring production paths over clever one-offs.',
    'Stack depth in Python, Go, and C#/.NET, plus containers, Kubernetes, CI/CD, and cloud. Public projects on this site are labs and demos; deeper work narratives stay offline for now.',
  ],
  skills: [
    {
      group: 'Languages',
      items: ['Python', 'Go', 'C# / .NET', 'SQL', 'TypeScript', 'React', 'Ruby', 'Shell'],
    },
    {
      group: 'Backend & data',
      items: [
        'FastAPI',
        'Gin',
        'Flask',
        '.NET Core',
        'REST APIs',
        'PostgreSQL',
        'PySpark / EMR',
        'data lakes',
      ],
    },
    {
      group: 'Platform & DevOps',
      items: [
        'Docker',
        'Kubernetes',
        'Terraform',
        'CI/CD',
        'Ansible / Puppet / Chef',
        'Linux',
      ],
    },
    {
      group: 'Observability & realtime',
      items: ['Grafana', 'Loki', 'Sentry', 'Kibana', 'MQTT'],
    },
  ],
  /**
   * Staff roles. Chip order on cards: stack (languages → frameworks → infra), then signals (impact).
   */
  experience: [
    {
      role: 'Software Engineering Manager & Senior Software Engineer',
      org: 'Bionexo',
      domain: 'Healthtech',
      tease:
        'Leading the healthcare marketplace platform team (hands-on manager). Earlier focus was ERP integrations and external platforms connecting the marketplace to customer systems — that path grew the team and the product surface I lead now.',
      period: '2019 — Present',
      stack: ['C# / .NET', 'Python', 'AWS', 'Docker', 'microservices'],
      signals: ['team 4 → 15+', 'marketplace platform', 'ERP integrations'],
      featured: true,
    },
    {
      role: 'Software Engineer',
      org: 'LexisNexis Risk Solutions',
      domain: 'Finance · credit bureau',
      tease:
        'Large-scale data processing for Brazil’s positive credit database and the inter-bank payment rail (CIP).',
      period: '2018 — 2019',
      stack: ['Python', 'data pipelines', 'GitLab CI'],
      signals: ['CIP / credit data', 'inter-bank payments'],
      featured: false,
    },
    {
      role: 'Software Engineer',
      org: 'Hewlett-Packard',
      domain: 'Big tech · DevOps tooling',
      tease:
        'Open-source SDKs and modules for DevOps tools (Ansible, Puppet, Chef) and OneView REST APIs — product engineering for operators.',
      period: '2016 — 2018',
      stack: ['Python', 'Ruby', 'Ansible', 'Puppet', 'Chef'],
      signals: ['DevOps SDKs', 'OneView REST APIs'],
      featured: false,
    },
    {
      role: 'Software Engineer',
      org: 'IBM',
      domain: 'Big tech · data platforms',
      tease:
        'Test automation, deployment flows, and QA for database and analytics products (DB2 / PureData).',
      period: '2009 — 2015',
      stack: ['Python', 'Shell', 'DB2'],
      signals: ['QA automation', 'deployment', 'PureData'],
      featured: false,
    },
  ],
  /** Contract engagements — same card language as staff, not “side gigs” */
  contracts: contracts.map((item) => ({
    role: item.role,
    org: item.org,
    domain: item.domain,
    tease: item.tease,
    stack: item.stack,
    signals: item.signals,
    featured: item.featured,
    duration: item.duration ?? formatDuration(item.started),
  })),
} as const;

