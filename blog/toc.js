(function () {
  const prose = document.querySelector('.prose');
  if (!prose) return;

  const headings = prose.querySelectorAll('h2, h3');
  if (headings.length < 2) return;

  // Assign IDs to headings that don't have one
  const slugCounts = {};
  headings.forEach(h => {
    if (!h.id) {
      let slug = h.textContent.trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
      const key = slug;
      if (slugCounts[key] !== undefined) {
        slugCounts[key]++;
        slug = slug + '-' + slugCounts[key];
      } else {
        slugCounts[key] = 0;
      }
      h.id = slug;
    }
  });

  // Build sidebar
  const sidebar = document.createElement('aside');
  sidebar.className = 'toc-sidebar';
  sidebar.innerHTML = '<div class="toc-title">Contents</div><nav class="toc-nav"></nav>';
  const tocNav = sidebar.querySelector('.toc-nav');

  headings.forEach(h => {
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'toc-link toc-' + h.tagName.toLowerCase();
    a.textContent = h.textContent.trim();
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(h.id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
    tocNav.appendChild(a);
  });

  document.body.appendChild(sidebar);

  // Highlight active section on scroll
  let activeLink = null;

  const setActive = link => {
    if (activeLink === link) return;
    if (activeLink) activeLink.classList.remove('active');
    activeLink = link;
    if (activeLink) activeLink.classList.add('active');
  };

  const observer = new IntersectionObserver(entries => {
    // Find the topmost visible heading
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = tocNav.querySelector(`a[href="#${id}"]`);
      if (entry.isIntersecting && link) {
        setActive(link);
      }
    });
  }, {
    rootMargin: '-64px 0px -60% 0px',
    threshold: 0,
  });

  headings.forEach(h => observer.observe(h));
})();
