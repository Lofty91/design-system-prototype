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

  function navItems(section, items) {
    return `<ul class="nav-list">${items.map(i =>
      `<li><a data-route="${section.slug}/${i[0]}" href="#/${section.slug}/${i[0]}">${i[1]}</a></li>`
    ).join('')}</ul>`;
  }

  function renderNav() {
    nav.innerHTML =
      `<a class="nav-heading nav-home" href="#/">Home</a>` +
      ds.sections.map(section => {
        const sectionId = `nav-section-${section.slug}`;
        let items = '';

        if (section.items) {
          items = navItems(section, section.items);
        } else {
          items = section.groups.map((group, index) => {
            if (!group.label) {
              return navItems(section, group.items);
            }

            const groupId = `nav-group-${section.slug}-${index}`;

            return `
              <div class="nav-subgroup">
                <button
                  class="nav-heading nav-toggle nav-subgroup-toggle"
                  type="button"
                  aria-expanded="false"
                  aria-controls="${groupId}">
                  <span>${group.label}</span>
                  <span class="nav-chevron" aria-hidden="true">›</span>
                </button>

                <div
                  class="nav-panel nav-subgroup-panel"
                  id="${groupId}"
                  hidden>
                  ${navItems(section, group.items)}
                </div>
              </div>
            `;
          }).join('');
        }

        return `
          <div class="nav-group">
            <button
              class="nav-heading nav-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="${sectionId}">
              <span>${section.title}</span>
              <span class="nav-chevron" aria-hidden="true">›</span>
            </button>

            <div
              class="nav-panel"
              id="${sectionId}"
              hidden>
              ${items}
            </div>
          </div>
        `;
      }).join('');

    nav.addEventListener('click', e => {
      const button = e.target.closest('.nav-toggle');

      if (!button) return;

      const panel = document.getElementById(
        button.getAttribute('aria-controls')
      );

      if (!panel) return;

      const isOpen =
        button.getAttribute('aria-expanded') === 'true';

      button.setAttribute(
        'aria-expanded',
        String(!isOpen)
      );

      panel.hidden = isOpen;
    });
  }

  function home() {
    return `
      <div class="content">
        <section class="hero">
          <p class="eyebrow">Generic public prototype</p>

          <h1>
            A system for making better design decisions.
          </h1>

          <p class="lede">
            Foundations, content guidance, reusable components,
            patterns and practical playbooks — connected in one place.
          </p>

          <div class="hero-actions">
            <a class="button" href="#/about/what-it-is">
              Explore the system
            </a>

            <a class="button secondary" href="#/components/button">
              View a component
            </a>
          </div>
        </section>

        <h2>Browse the system</h2>

        <div class="grid">
          ${ds.sections.map(section => {
            const first = allItems(section)[0];

            return `
              <a
                class="card"
                href="#/${section.slug}/${first[0]}">

                <h3>${section.title}</h3>

                <p>${section.description}</p>

                <span class="arrow">
                  Explore ${section.title.toLowerCase()} →
                </span>
              </a>
            `;
          }).join('')}
        </div>

        <h2>How the parts fit together</h2>

        <div class="grid">
          <div class="card">
            <h3>Foundations</h3>
            <p>Underlying visual and structural decisions.</p>
          </div>

          <div class="card">
            <h3>Components</h3>
            <p>Reusable interface elements.</p>
          </div>

          <div class="card">
            <h3>Patterns</h3>
            <p>Approaches to recurring user needs.</p>
          </div>

          <div class="card">
            <h3>Content</h3>
            <p>Shared language and writing standards.</p>
          </div>

          <div class="card">
            <h3>Playbooks</h3>
            <p>How to tackle broader design tasks.</p>
          </div>

          <div class="card">
            <h3>Contribute</h3>
            <p>How the system evolves safely.</p>
          </div>
        </div>
      </div>
    `;
  }

  function pageMeta(page) {
    if (page.component) {
      return `
        <div class="meta-row">
          <span class="badge supported">
            Supported example
          </span>

          <span class="badge">
            Component
          </span>
        </div>
      `;
    }

    if (page.pattern) {
      return `
        <div class="meta-row">
          <span class="badge">
            Pattern
          </span>
        </div>
      `;
    }

    return '';
  }

  function findSection(route) {
    return ds.sections.find(
      section =>
        route.startsWith(section.slug + '/')
    );
  }

  function prevNext(route) {
    const flat = [];

    ds.sections.forEach(section => {
      allItems(section).forEach(item => {
        flat.push({
          route: `${section.slug}/${item[0]}`,
          title: item[1]
        });
      });
    });

    const index =
      flat.findIndex(item => item.route === route);

    const previous =
      index > 0
        ? flat[index - 1]
        : null;

    const next =
      index >= 0 && index < flat.length - 1
        ? flat[index + 1]
        : null;

    return `
      <nav
        class="page-links"
        aria-label="Previous and next pages">

        <div>
          ${
            previous
              ? `<a href="#/${previous.route}">
                  ← ${previous.title}
                </a>`
              : ''
          }
        </div>

        <div>
          ${
            next
              ? `<a href="#/${next.route}">
                  ${next.title} →
                </a>`
              : ''
          }
        </div>
      </nav>
    `;
  }

  function renderPage(route, page) {
    const section = findSection(route);

    return `
      <article class="content">

        <nav
          class="breadcrumbs"
          aria-label="Breadcrumb">

          <a href="#/">Home</a>

          <span>
            ${section ? section.title : ''}
          </span>

          <span>
            ${page.title}
          </span>
        </nav>

        <p class="eyebrow">
          ${section ? section.title : 'Design System'}
        </p>

        <h1>${page.title}</h1>

        <p class="lede">
          ${page.lede}
        </p>

        ${pageMeta(page)}

        ${page.body}

        ${prevNext(route)}

      </article>
    `;
  }

  function openNavPanel(panel) {
    if (!panel) return;

    panel.hidden = false;

    const button =
      document.querySelector(
        `[aria-controls="${panel.id}"]`
      );

    if (button) {
      button.setAttribute(
        'aria-expanded',
        'true'
      );
    }
  }

  function updateCurrent(route) {
    let currentLink = null;

    document
      .querySelectorAll('[data-route]')
      .forEach(link => {
        if (link.dataset.route === route) {
          link.setAttribute(
            'aria-current',
            'page'
          );

          currentLink = link;
        } else {
          link.removeAttribute(
            'aria-current'
          );
        }
      });

    if (!currentLink) return;

    let panel =
      currentLink.closest('.nav-panel');

    while (panel) {
      openNavPanel(panel);

      panel =
        panel.parentElement.closest(
          '.nav-panel'
        );
    }
  }

  function render() {
    const route =
      location.hash.replace(/^#\/?/, '');

    if (!route) {
      main.innerHTML = home();

      document.title =
        'Design System';

      updateCurrent('');
    } else {
      const page =
        ds.pages[route];

      if (page) {
        main.innerHTML =
          renderPage(route, page);

        document.title =
          `${page.title} — Design System`;

        updateCurrent(route);
      } else {
        main.innerHTML = `
          <div class="content">
            <p class="eyebrow">404</p>

            <h1>Page not found</h1>

            <p class="lede">
              The page you tried to open does not exist.
            </p>

            <p>
              <a class="button" href="#/">
                Go to the homepage
              </a>
            </p>
          </div>
        `;

        document.title =
          'Page not found — Design System';
      }
    }

    main.focus({
      preventScroll: true
    });

    window.scrollTo(0, 0);

    sidebar.classList.remove('open');

    menuButton.setAttribute(
      'aria-expanded',
      'false'
    );
  }

  function search(query) {
    const q =
      query.trim().toLowerCase();

    if (!q) {
      searchResults.innerHTML =
        `<div class="empty">
          Type to search the system.
        </div>`;

      return;
    }

    const results =
      Object.entries(ds.pages)
        .map(([route, page]) => {
          const plain =
            `${page.title}
             ${page.lede}
             ${page.body.replace(/<[^>]+>/g, ' ')}`.toLowerCase();

          const score =
            (page.title.toLowerCase().includes(q) ? 3 : 0) +
            (page.lede.toLowerCase().includes(q) ? 2 : 0) +
            (plain.includes(q) ? 1 : 0);

          return {
            route,
            page,
            score
          };
        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12);

    searchResults.innerHTML =
      results.length
        ? results.map(result => `
            <a
              class="search-result"
              href="#/${result.route}"
              data-search-route>

              <strong>
                ${result.page.title}
              </strong>

              <span>
                ${result.page.lede}
              </span>
            </a>
          `).join('')
        : `
          <div class="empty">
            No results for “${query}”.
          </div>
        `;
  }

  renderNav();
  render();

  window.addEventListener(
    'hashchange',
    render
  );

  menuButton.addEventListener(
    'click',
    () => {
      const open =
        sidebar.classList.toggle('open');

      menuButton.setAttribute(
        'aria-expanded',
        String(open)
      );
    }
  );

  function openSearch() {
    if (!searchDialog.open) {
      searchDialog.showModal();
    }

    searchInput.value = '';

    searchResults.innerHTML =
      `<div class="empty">
        Type to search the system.
      </div>`;

    setTimeout(
      () => searchInput.focus(),
      0
    );
  }

  searchButton.addEventListener(
    'click',
    openSearch
  );

  document.addEventListener(
    'keydown',
    event => {
      if (
        event.key === '/' &&
        !event.metaKey &&
        !event.ctrlKey &&
        document.activeElement.tagName !== 'INPUT'
      ) {
        event.preventDefault();
        openSearch();
      }
    }
  );

  searchInput.addEventListener(
    'input',
    event =>
      search(event.target.value)
  );

  searchResults.addEventListener(
    'click',
    event => {
      if (
        event.target.closest(
          '[data-search-route]'
        )
      ) {
        searchDialog.close();
      }
    }
  );
})();
