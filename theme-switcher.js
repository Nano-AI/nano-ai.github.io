// ================================================================
// THEME SWITCHER
// 8 themes: Default / Gruvbox / Nord / Atom One  ×  Dark / Light
// ================================================================
(function () {
  'use strict';

  // ── Theme definitions ──────────────────────────────────────────
  const THEMES = {
    'default-dark': {
      label: 'Default', mode: 'dark',
      swatch: ['#06060d', '#22d3ee', '#a78bfa'],
      vars: {
        '--bg':               '#06060d',
        '--surface':          '#0d0d18',
        '--surface-2':        '#12121f',
        '--border':           'rgba(148,163,184,0.09)',
        '--border-hover':     'rgba(148,163,184,0.18)',
        '--text':             '#e2e8f0',
        '--soft':             '#94a3b8',
        '--muted':            '#64748b',
        '--accent':           '#22d3ee',
        '--accent-dim':       'rgba(34,211,238,0.10)',
        '--accent-2':         '#a78bfa',
        '--accent-2-dim':     'rgba(167,139,250,0.10)',
        '--green':            '#4ade80',
        '--nav-bg':           'rgba(6,6,13,0.75)',
        '--nav-bg-scrolled':  'rgba(6,6,13,0.92)',
        '--grid-line':        'rgba(34,211,238,0.035)',
        '--glow-accent':      'rgba(34,211,238,0.11)',
        '--glow-accent-2':    'rgba(167,139,250,0.06)',
        '--code-bg':          '#0d1117',
        '--name-gradient':    'linear-gradient(135deg,#ffffff 0%,#e2e8f0 45%,#67e8f9 100%)',
      },
      prism: 'dark',
    },
    'default-light': {
      label: 'Default', mode: 'light',
      swatch: ['#f8fafc', '#0891b2', '#7c3aed'],
      vars: {
        '--bg':               '#f8fafc',
        '--surface':          '#f1f5f9',
        '--surface-2':        '#e2e8f0',
        '--border':           'rgba(15,23,42,0.10)',
        '--border-hover':     'rgba(15,23,42,0.20)',
        '--text':             '#0f172a',
        '--soft':             '#334155',
        '--muted':            '#64748b',
        '--accent':           '#0891b2',
        '--accent-dim':       'rgba(8,145,178,0.10)',
        '--accent-2':         '#7c3aed',
        '--accent-2-dim':     'rgba(124,58,237,0.10)',
        '--green':            '#16a34a',
        '--nav-bg':           'rgba(248,250,252,0.85)',
        '--nav-bg-scrolled':  'rgba(248,250,252,0.97)',
        '--grid-line':        'rgba(8,145,178,0.05)',
        '--glow-accent':      'rgba(8,145,178,0.08)',
        '--glow-accent-2':    'rgba(124,58,237,0.04)',
        '--code-bg':          '#f6f8fa',
        '--name-gradient':    'linear-gradient(135deg,#0f172a 0%,#334155 45%,#0891b2 100%)',
      },
      prism: 'light',
    },
    'gruvbox-dark': {
      label: 'Gruvbox', mode: 'dark',
      swatch: ['#1d2021', '#fabd2f', '#d3869b'],
      vars: {
        '--bg':               '#1d2021',
        '--surface':          '#282828',
        '--surface-2':        '#32302f',
        '--border':           'rgba(235,219,178,0.09)',
        '--border-hover':     'rgba(235,219,178,0.18)',
        '--text':             '#ebdbb2',
        '--soft':             '#d5c4a1',
        '--muted':            '#928374',
        '--accent':           '#fabd2f',
        '--accent-dim':       'rgba(250,189,47,0.12)',
        '--accent-2':         '#d3869b',
        '--accent-2-dim':     'rgba(211,134,155,0.10)',
        '--green':            '#b8bb26',
        '--nav-bg':           'rgba(29,32,33,0.80)',
        '--nav-bg-scrolled':  'rgba(29,32,33,0.96)',
        '--grid-line':        'rgba(250,189,47,0.04)',
        '--glow-accent':      'rgba(250,189,47,0.09)',
        '--glow-accent-2':    'rgba(211,134,155,0.06)',
        '--code-bg':          '#1a1a1a',
        '--name-gradient':    'linear-gradient(135deg,#ebdbb2 0%,#d5c4a1 45%,#fabd2f 100%)',
      },
      prism: 'dark',
    },
    'gruvbox-light': {
      label: 'Gruvbox', mode: 'light',
      swatch: ['#f9f5d7', '#b57614', '#8f3f71'],
      vars: {
        '--bg':               '#f9f5d7',
        '--surface':          '#f2e5bc',
        '--surface-2':        '#ebdbb2',
        '--border':           'rgba(60,56,54,0.12)',
        '--border-hover':     'rgba(60,56,54,0.22)',
        '--text':             '#3c3836',
        '--soft':             '#504945',
        '--muted':            '#928374',
        '--accent':           '#b57614',
        '--accent-dim':       'rgba(181,118,20,0.10)',
        '--accent-2':         '#8f3f71',
        '--accent-2-dim':     'rgba(143,63,113,0.10)',
        '--green':            '#79740e',
        '--nav-bg':           'rgba(249,245,215,0.88)',
        '--nav-bg-scrolled':  'rgba(249,245,215,0.97)',
        '--grid-line':        'rgba(181,118,20,0.06)',
        '--glow-accent':      'rgba(181,118,20,0.07)',
        '--glow-accent-2':    'rgba(143,63,113,0.04)',
        '--code-bg':          '#f0e4c0',
        '--name-gradient':    'linear-gradient(135deg,#3c3836 0%,#504945 45%,#b57614 100%)',
      },
      prism: 'light',
    },
    'nord-dark': {
      label: 'Nord', mode: 'dark',
      swatch: ['#2e3440', '#88c0d0', '#b48ead'],
      vars: {
        '--bg':               '#2e3440',
        '--surface':          '#3b4252',
        '--surface-2':        '#434c5e',
        '--border':           'rgba(216,222,233,0.09)',
        '--border-hover':     'rgba(216,222,233,0.18)',
        '--text':             '#eceff4',
        '--soft':             '#d8dee9',
        '--muted':            '#616e88',
        '--accent':           '#88c0d0',
        '--accent-dim':       'rgba(136,192,208,0.12)',
        '--accent-2':         '#b48ead',
        '--accent-2-dim':     'rgba(180,142,173,0.10)',
        '--green':            '#a3be8c',
        '--nav-bg':           'rgba(46,52,64,0.82)',
        '--nav-bg-scrolled':  'rgba(46,52,64,0.96)',
        '--grid-line':        'rgba(136,192,208,0.04)',
        '--glow-accent':      'rgba(136,192,208,0.09)',
        '--glow-accent-2':    'rgba(180,142,173,0.05)',
        '--code-bg':          '#242933',
        '--name-gradient':    'linear-gradient(135deg,#eceff4 0%,#d8dee9 45%,#88c0d0 100%)',
      },
      prism: 'dark',
    },
    'nord-light': {
      label: 'Nord', mode: 'light',
      swatch: ['#eceff4', '#5e81ac', '#b48ead'],
      vars: {
        '--bg':               '#eceff4',
        '--surface':          '#e5e9f0',
        '--surface-2':        '#d8dee9',
        '--border':           'rgba(46,52,64,0.10)',
        '--border-hover':     'rgba(46,52,64,0.20)',
        '--text':             '#2e3440',
        '--soft':             '#3b4252',
        '--muted':            '#4c566a',
        '--accent':           '#5e81ac',
        '--accent-dim':       'rgba(94,129,172,0.10)',
        '--accent-2':         '#b48ead',
        '--accent-2-dim':     'rgba(180,142,173,0.10)',
        '--green':            '#a3be8c',
        '--nav-bg':           'rgba(236,239,244,0.88)',
        '--nav-bg-scrolled':  'rgba(236,239,244,0.97)',
        '--grid-line':        'rgba(94,129,172,0.06)',
        '--glow-accent':      'rgba(94,129,172,0.07)',
        '--glow-accent-2':    'rgba(180,142,173,0.04)',
        '--code-bg':          '#dce0e8',
        '--name-gradient':    'linear-gradient(135deg,#2e3440 0%,#3b4252 45%,#5e81ac 100%)',
      },
      prism: 'light',
    },
    'atom-one-dark': {
      label: 'Atom One', mode: 'dark',
      swatch: ['#21252b', '#61afef', '#c678dd'],
      vars: {
        '--bg':               '#21252b',
        '--surface':          '#282c34',
        '--surface-2':        '#2c313c',
        '--border':           'rgba(171,178,191,0.10)',
        '--border-hover':     'rgba(171,178,191,0.20)',
        '--text':             '#abb2bf',
        '--soft':             '#9da5b4',
        '--muted':            '#5c6370',
        '--accent':           '#61afef',
        '--accent-dim':       'rgba(97,175,239,0.12)',
        '--accent-2':         '#c678dd',
        '--accent-2-dim':     'rgba(198,120,221,0.10)',
        '--green':            '#98c379',
        '--nav-bg':           'rgba(33,37,43,0.82)',
        '--nav-bg-scrolled':  'rgba(33,37,43,0.96)',
        '--grid-line':        'rgba(97,175,239,0.04)',
        '--glow-accent':      'rgba(97,175,239,0.09)',
        '--glow-accent-2':    'rgba(198,120,221,0.05)',
        '--code-bg':          '#1b1e23',
        '--name-gradient':    'linear-gradient(135deg,#abb2bf 0%,#c8cdd6 45%,#61afef 100%)',
      },
      prism: 'dark',
    },
    'atom-one-light': {
      label: 'Atom One', mode: 'light',
      swatch: ['#fafafa', '#4078f2', '#a626a4'],
      vars: {
        '--bg':               '#fafafa',
        '--surface':          '#f0f0f0',
        '--surface-2':        '#e8e8e8',
        '--border':           'rgba(56,58,66,0.12)',
        '--border-hover':     'rgba(56,58,66,0.22)',
        '--text':             '#383a42',
        '--soft':             '#494b54',
        '--muted':            '#a0a1a7',
        '--accent':           '#4078f2',
        '--accent-dim':       'rgba(64,120,242,0.10)',
        '--accent-2':         '#a626a4',
        '--accent-2-dim':     'rgba(166,38,164,0.10)',
        '--green':            '#50a14f',
        '--nav-bg':           'rgba(250,250,250,0.88)',
        '--nav-bg-scrolled':  'rgba(250,250,250,0.97)',
        '--grid-line':        'rgba(64,120,242,0.05)',
        '--glow-accent':      'rgba(64,120,242,0.07)',
        '--glow-accent-2':    'rgba(166,38,164,0.04)',
        '--code-bg':          '#ebebeb',
        '--name-gradient':    'linear-gradient(135deg,#383a42 0%,#494b54 45%,#4078f2 100%)',
      },
      prism: 'light',
    },
  };

  const GROUPS = [
    { prefix: 'default',   name: 'Default'   },
    { prefix: 'gruvbox',   name: 'Gruvbox'   },
    { prefix: 'nord',      name: 'Nord'      },
    { prefix: 'atom-one',  name: 'Atom One'  },
  ];

  const COOKIE_NAME = 'ab-theme';

  // ── Storage: cookie (path=/ → shared across all pages) + localStorage fallback ──
  function saveTheme(id) {
    // Cookie with path=/ works on any server (HTTP/S). Max-age = 1 year.
    try {
      document.cookie = COOKIE_NAME + '=' + encodeURIComponent(id)
        + '; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {}
    // localStorage as belt-and-suspenders
    try { localStorage.setItem(COOKIE_NAME, id); } catch (e) {}
  }

  function loadSavedTheme() {
    // 1. Cookie (reliable cross-subdirectory)
    try {
      const entry = document.cookie.split(';')
        .map(c => c.trim())
        .find(c => c.startsWith(COOKIE_NAME + '='));
      if (entry) {
        const id = decodeURIComponent(entry.slice(COOKIE_NAME.length + 1));
        if (THEMES[id]) return id;
      }
    } catch (e) {}
    // 2. localStorage fallback
    try {
      const id = localStorage.getItem(COOKIE_NAME);
      if (id && THEMES[id]) return id;
    } catch (e) {}
    return null;
  }

  function getInitialTheme() {
    return loadSavedTheme() || 'gruvbox-dark';
  }

  // ── Apply CSS vars immediately (called before DOM ready to prevent FOUC) ──
  function applyVars(id) {
    const theme = THEMES[id];
    if (!theme) return;
    const root = document.documentElement;
    for (const [prop, val] of Object.entries(theme.vars)) {
      root.style.setProperty(prop, val);
    }
  }

  // ── Full theme apply (vars + Prism swap + localStorage + UI state) ────────
  function applyTheme(id) {
    const theme = THEMES[id];
    if (!theme) return;

    applyVars(id);

    // Swap Prism stylesheet (only present on post pages)
    const prismBase = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/';
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (link.href.includes('prismjs') && link.href.includes('/themes/')) {
        link.href = prismBase + (theme.prism === 'light' ? 'prism.min.css' : 'prism-tomorrow.min.css');
      }
    });

    saveTheme(id);

    document.querySelectorAll('.ts-option').forEach(el => {
      el.classList.toggle('ts-active', el.dataset.theme === id);
    });
  }

  // ── Build the floating UI ──────────────────────────────────────
  function buildUI() {
    if (document.getElementById('ts-style')) return; // already injected

    // Styles
    const style = document.createElement('style');
    style.id = 'ts-style';
    style.textContent = `
      .ts-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--border-hover, rgba(148,163,184,0.18));
        background: var(--surface, #0d0d18);
        color: var(--accent, #22d3ee);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        flex-shrink: 0;
      }
      .ts-btn:hover {
        transform: scale(1.12) rotate(22deg);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      }
      .ts-btn svg { pointer-events: none; }

      .ts-panel {
        position: fixed;
        bottom: 74px;
        right: 24px;
        z-index: 9998;
        background: var(--surface, #0d0d18);
        border: 1px solid var(--border-hover, rgba(148,163,184,0.18));
        border-radius: 14px;
        padding: 16px 14px 14px;
        width: 248px;
        box-shadow: 0 20px 56px rgba(0,0,0,0.45);
        opacity: 0;
        transform: translateY(10px) scale(0.96);
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .ts-panel.ts-open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: all;
      }

      .ts-header {
        font-family: var(--font-mono, monospace);
        font-size: 0.63rem;
        color: var(--muted, #64748b);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 13px;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--border, rgba(148,163,184,0.09));
      }

      .ts-groups {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .ts-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .ts-row-name {
        font-family: var(--font-mono, monospace);
        font-size: 0.68rem;
        color: var(--soft, #94a3b8);
        width: 72px;
        flex-shrink: 0;
      }

      .ts-opts {
        display: flex;
        gap: 5px;
      }

      .ts-option {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 4px 9px 4px 7px;
        border-radius: 6px;
        border: 1px solid var(--border, rgba(148,163,184,0.09));
        background: var(--surface-2, #12121f);
        cursor: pointer;
        transition: border-color 0.13s, background 0.13s, color 0.13s;
        font-family: var(--font-mono, monospace);
        font-size: 0.64rem;
        color: var(--muted, #64748b);
        white-space: nowrap;
        line-height: 1;
      }
      .ts-option:hover {
        border-color: var(--border-hover, rgba(148,163,184,0.18));
        color: var(--soft, #94a3b8);
      }
      .ts-option.ts-active {
        border-color: var(--accent, #22d3ee);
        background: var(--accent-dim, rgba(34,211,238,0.1));
        color: var(--accent, #22d3ee);
      }

      .ts-swatch {
        display: flex;
        gap: 2px;
        align-items: center;
      }
      .ts-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .ts-dot-bg {
        border: 1px solid rgba(128,128,128,0.25);
      }
    `;
    document.head.appendChild(style);

    // Button (sun/moon icon — SVG)
    const btn = document.createElement('button');
    btn.className = 'ts-btn';
    btn.setAttribute('aria-label', 'Switch colour theme');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
               M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;

    // Panel
    const panel = document.createElement('div');
    panel.className = 'ts-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Theme picker');

    const header = document.createElement('div');
    header.className = 'ts-header';
    header.textContent = '// colour scheme';
    panel.appendChild(header);

    const groupsEl = document.createElement('div');
    groupsEl.className = 'ts-groups';

    for (const g of GROUPS) {
      const row = document.createElement('div');
      row.className = 'ts-row';

      const name = document.createElement('span');
      name.className = 'ts-row-name';
      name.textContent = g.name;

      const opts = document.createElement('div');
      opts.className = 'ts-opts';

      for (const mode of ['dark', 'light']) {
        const id = `${g.prefix}-${mode}`;
        const theme = THEMES[id];
        if (!theme) continue;

        const btn2 = document.createElement('button');
        btn2.className = 'ts-option';
        btn2.dataset.theme = id;
        btn2.title = `${g.name} ${mode}`;

        // Swatch dots
        const sw = document.createElement('span');
        sw.className = 'ts-swatch';
        theme.swatch.forEach((color, i) => {
          const dot = document.createElement('span');
          dot.className = 'ts-dot' + (i === 0 ? ' ts-dot-bg' : '');
          dot.style.background = color;
          sw.appendChild(dot);
        });

        btn2.appendChild(sw);
        btn2.appendChild(document.createTextNode(mode));
        btn2.addEventListener('click', () => applyTheme(id));
        opts.appendChild(btn2);
      }

      row.appendChild(name);
      row.appendChild(opts);
      groupsEl.appendChild(row);
    }

    panel.appendChild(groupsEl);
    document.body.appendChild(btn);
    document.body.appendChild(panel);

    // Toggle open/close
    let isOpen = false;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen = !isOpen;
      panel.classList.toggle('ts-open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen && !panel.contains(e.target)) {
        isOpen = false;
        panel.classList.remove('ts-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        panel.classList.remove('ts-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  // ── Init ───────────────────────────────────────────────────────
  // Apply CSS vars immediately (synchronous) so there's no flash on navigation.
  // Building the UI requires document.body, so defer that to DOMContentLoaded.
  const _initial = getInitialTheme();
  applyVars(_initial);

  function init() {
    buildUI();
    applyTheme(_initial); // full apply: Prism swap + localStorage + UI active state
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
