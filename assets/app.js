(() => {
  const ds = window.DESIGN_SYSTEM;
  const main = document.getElementById('main');
  const nav = document.getElementById('sidebarNav');
  const sidebar = document.getElementById('sidebar');
  const menuButton = document.getElementById('menuButton');
  const searchButton = document.getElementById('searchButton');
  const searchDialog = document.getElementById('searchDialog');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  function allItems(section) {
    if (section.items) return section.items;
    return section.groups.flatMap(g => g.items);
  }

  function renderNav() {
    nav.innerHTML = `<a class="nav-heading" href="#/">Home</a>` + ds.sections.map(section => {
      let items = '';
      if (section.items) {
        items = `<ul class="nav-list">${section.items.map(i => `<li><a data-route="${section.slug}/${i[0]}" href="#/${section.slug}/${i[0]}">${i[1]}</a></li>`).join('')}</ul>`;
      } else {
        items = section.groups.map(g => `${g.label ? `<div class="nav-subgroup"><div class="nav-subgroup-label">${g.label}</div>` : ''}<ul class="nav-list">${g.items.map(i => `<li><a data-route="${section.slug}/${i[0]}" href="#/${section.slug}/${i[0]}">${i[1]}</a></li>`).join('')}</ul>${g.label ? `</div>` : ''}`).join('');
      }
      return `<div class="nav-group"><div class="nav-heading">${section.title}</div>${items}</div>`;
    }).join('');
  }

  function home() {
    return `<div class="content">
      <section class="hero">
        <p class="eyebrow">Generic public prototype</p>
        <h1>A system for making better design decisions.</h1>
        <p class="lede">Foundations, content guidance, reusable components, patterns and practical playbooks — connected in one place.</p>
        <div class="hero-actions"><a class="button" href="#/about/what-it-is">Explore the system</a><a class="button secondary" href="#/components/button">View a component</a></div>
      </section>
      <h2>Browse the system</h2>
      <div class="grid">${ds.sections.map(s => {
        const first = allItems(s)[0];
        return `<a class="card" href="#/${s.slug}/${first[0]}"><h3>${s.title}</h3><p>${s.description}</p><span class="arrow">Explore ${s.title.toLowerCase()} →</span></a>`;
      }).join('')}</div>
      <h2>How the parts fit together</h2>
      <div class="grid"><div class="card"><h3>Foundations</h3><p>Underlying visual and structural decisions.</p></div><div class="card"><h3>Components</h3><p>Reusable interface elements.</p></div><div class="card"><h3>Patterns</h3><p>Approaches to recurring user needs.</p></div><div class="card"><h3>Content</h3><p>Shared language and writing standards.</p></div><div class="card"><h3>Playbooks</h3><p>How to tackle broader design tasks.</p></div><div class="card"><h3>Contribute</h3><p>How the system evolves safely.</p></div></div>
      <div class="callout"><strong>Public-safe by design</strong>This prototype contains generic guidance only. It intentionally excludes organisation-specific names, tokens, internal links, commercial information and proprietary implementation details.</div>
    </div>`;
  }

  function pageMeta(page) {
    if (page.component) return `<div class="meta-row"><span class="badge supported">Supported example</span><span class="badge">Component</span></div>`;
    if (page.pattern) return `<div class="meta-row"><span class="badge">Pattern</span></div>`;
    return '';
  }

  function findSection(route) {
    return ds.sections.find(s => route.startsWith(s.slug + '/'));
  }

  function prevNext(route) {
    const flat = [];
    ds.sections.forEach(s => allItems(s).forEach(i => flat.push({route:`${s.slug}/${i[0]}`, title:i[1]})));
    const idx = flat.findIndex(x => x.route === route);
    const prev = idx > 0 ? flat[idx-1] : null;
    const next = idx >= 0 && idx < flat.length-1 ? flat[idx+1] : null;
    return `<nav class="page-links" aria-label="Previous and next pages"><div>${prev ? `<a href="#/${prev.route}">← ${prev.title}</a>` : ''}</div><div>${next ? `<a href="#/${next.route}">${next.title} →</a>` : ''}</div></nav>`;
  }

  function renderPage(route, page) {
    const section = findSection(route);
    return `<article class="content"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>${section ? section.title : ''}</span><span>${page.title}</span></nav><p class="eyebrow">${section ? section.title : 'Design System'}</p><h1>${page.title}</h1><p class="lede">${page.lede}</p>${pageMeta(page)}${page.body}${prevNext(route)}</article>`;
  }

  function updateCurrent(route) {
    document.querySelectorAll('[data-route]').forEach(a => {
      if (a.dataset.route === route) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
  }

  function render() {
    const route = location.hash.replace(/^#\/?/, '');
    if (!route) {
      main.innerHTML = home();
      document.title = 'Design System';
      updateCurrent('');
    } else {
      const page = ds.pages[route];
      if (page) {
        main.innerHTML = renderPage(route, page);
        document.title = `${page.title} — Design System`;
        updateCurrent(route);
      } else {
        main.innerHTML = `<div class="content"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lede">The page you tried to open does not exist.</p><p><a class="button" href="#/">Go to the homepage</a></p></div>`;
        document.title = 'Page not found — Design System';
      }
    }
    main.focus({preventScroll:true});
    window.scrollTo(0,0);
    sidebar.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) { searchResults.innerHTML = `<div class="empty">Type to search the system.</div>`; return; }
    const results = Object.entries(ds.pages).map(([route,p]) => {
      const plain = `${p.title} ${p.lede} ${p.body.replace(/<[^>]+>/g,' ')}`.toLowerCase();
      const score = (p.title.toLowerCase().includes(q) ? 3 : 0) + (p.lede.toLowerCase().includes(q) ? 2 : 0) + (plain.includes(q) ? 1 : 0);
      return {route, p, score};
    }).filter(x => x.score > 0).sort((a,b) => b.score-a.score).slice(0,12);
    searchResults.innerHTML = results.length ? results.map(x => `<a class="search-result" href="#/${x.route}" data-search-route><strong>${x.p.title}</strong><span>${x.p.lede}</span></a>`).join('') : `<div class="empty">No results for “${query}”.</div>`;
  }

  renderNav();
  render();
  window.addEventListener('hashchange', render);

  menuButton.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.value = '';
    searchResults.innerHTML = `<div class="empty">Type to search the system.</div>`;
    setTimeout(() => searchInput.focus(), 0);
  }
  searchButton.addEventListener('click', openSearch);
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !e.metaKey && !e.ctrlKey && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); openSearch(); }
  });
  searchInput.addEventListener('input', e => search(e.target.value));
  searchResults.addEventListener('click', e => { if (e.target.closest('[data-search-route]')) searchDialog.close(); });
})();
