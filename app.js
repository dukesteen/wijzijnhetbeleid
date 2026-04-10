(function () {
  const content = window.SITE_CONTENT;
  const app = document.getElementById("app");

  if (!content || !app) {
    return;
  }

  const routeMap = new Map(content.routes.map((route) => [route.slug, route]));
  const storyBySlug = Object.values(content.stories).reduce((map, story) => {
    map[story.slug] = story;
    return map;
  }, {});

  let statObserver = null;
  let revealObserver = null;
  let detachScrollProgress = null;

  function getRouteFromHash() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    return routeMap.get(hash) || content.routes[0];
  }

  function hrefForRoute(slug) {
    return slug ? `#/${slug}` : "#/";
  }

  function applyTheme(themeKey) {
    const theme = content.themes[themeKey] || content.themes.home;
    const root = document.documentElement;
    Object.entries({
      "--paper": theme.paper,
      "--paper-strong": theme.paperStrong,
      "--surface": theme.surface,
      "--ink": theme.ink,
      "--muted": theme.muted,
      "--accent": theme.accent,
      "--accent-soft": theme.accentSoft,
      "--accent-contrast": theme.accentContrast,
      "--line": theme.line,
      "--display-shadow": theme.displayShadow,
    }).forEach(([key, value]) => root.style.setProperty(key, value));
  }

  function renderNav(route) {
    const isArticle = route.id !== "home";
    return `
      <header class="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="#/" class="group flex min-w-0 flex-col">
            <span class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${content.siteMeta.issueLabel}</span>
            <span class="font-display text-2xl uppercase tracking-[0.04em] text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent)]">${content.siteMeta.issueTitle}</span>
          </a>
          <nav class="flex flex-wrap items-center justify-end gap-x-2 gap-y-2 text-sm md:text-base">
            ${content.routes
              .map((item) => {
                const isActive = item.id === route.id;
                return `
                  <a
                    href="${hrefForRoute(item.slug)}"
                    class="rounded-full border px-4 py-2 font-display uppercase tracking-[0.2em] transition-colors ${
                      isActive
                        ? "border-transparent bg-[color:var(--accent)] text-[color:var(--accent-contrast)]"
                        : "border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                    }"
                  >
                    ${item.label}
                  </a>
                `;
              })
              .join("")}
          </nav>
        </div>
        <div class="progress-rail h-1 ${isArticle ? "" : "opacity-0"}">
          <div id="progress-bar" class="progress-bar h-full w-0"></div>
        </div>
      </header>
    `;
  }

  function renderHome() {
    const mainStory = content.stories.main;
    const secondaryStories = [content.stories.lansco, content.stories.markemodel];

    return `
      <main class="route-fade pb-24">
        <section class="relative overflow-hidden border-b border-[color:var(--line)]">
          <div class="accent-wash absolute inset-0"></div>
          <div class="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div class="relative z-10">
              <p class="font-display text-sm uppercase tracking-[0.34em] text-[color:var(--muted)]">${content.siteMeta.projectLabel}</p>
              <div class="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
                <h1 class="display-shadow font-display text-6xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] sm:text-7xl lg:text-[7.25rem]">${content.siteMeta.issueTitle}</h1>
                <span class="rounded-full bg-[color:var(--accent)] px-5 py-2 font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent-contrast)]">web special</span>
              </div>
              <p class="mt-6 max-w-3xl text-xl leading-relaxed text-[color:var(--muted)] md:text-2xl">${content.siteMeta.intro}</p>
              <div class="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
                <div class="paper-panel reveal-block relative overflow-hidden rounded-[2rem] p-6">
                  <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Kern van het project</p>
                  <p class="mt-3 text-lg leading-relaxed text-[color:var(--ink)]">${content.siteMeta.subtitle}</p>
                </div>
                <div class="paper-panel reveal-block relative overflow-hidden rounded-[2rem] p-6">
                  <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Vormtaal</p>
                  <p class="mt-3 text-lg leading-relaxed text-[color:var(--ink)]">${content.siteMeta.editorialNote}</p>
                </div>
              </div>
            </div>
            <aside class="paper-panel reveal-block relative overflow-hidden rounded-[2.4rem] p-8">
              <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Issue navigation</p>
              <div class="mt-5 editorial-rule w-full"></div>
              <ul class="mt-6 space-y-6">
                ${content.routes
                  .filter((route) => route.id !== "home")
                  .map((route, index) => {
                    const story = content.stories[route.id];
                    return `
                      <li class="grid grid-cols-[auto_1fr_auto] items-start gap-4">
                        <span class="font-display text-4xl leading-none text-[color:var(--accent)]">0${index + 1}</span>
                        <div>
                          <p class="font-display text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">${story.kicker}</p>
                          <a href="${hrefForRoute(route.slug)}" class="mt-1 block text-xl leading-tight text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]">${story.title}</a>
                        </div>
                        <span class="vertical-label hidden text-xs font-display uppercase tracking-[0.32em] text-[color:var(--muted)] md:block">${story.shortTitle}</span>
                      </li>
                    `;
                  })
                  .join("")}
              </ul>
            </aside>
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div class="mb-8 flex items-end justify-between gap-6">
            <div>
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Uitgelicht</p>
              <h2 class="mt-3 max-w-3xl font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-6xl">${mainStory.title}</h2>
            </div>
            <a href="${hrefForRoute(mainStory.slug)}" class="hidden rounded-full border border-[color:var(--accent)] px-6 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-contrast)] md:inline-flex">Lees het verhaal</a>
          </div>

          <article class="paper-panel card-hover reveal-block relative overflow-hidden rounded-[2.4rem] p-7 md:p-10">
            <div class="absolute right-0 top-0 hidden h-32 w-32 translate-x-6 -translate-y-6 rounded-full bg-[color:var(--accent-soft)] opacity-80 md:block"></div>
            <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="relative z-10">
                <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${mainStory.kicker}</p>
                <p class="mt-4 max-w-3xl text-lg leading-relaxed text-[color:var(--ink)] md:text-xl">${mainStory.dek}</p>
                <div class="mt-8 flex flex-wrap gap-3">
                  ${mainStory.stats
                    .map(
                      (stat) => `
                        <div class="rounded-full border border-[color:var(--line)] bg-white/70 px-4 py-2 text-sm text-[color:var(--muted)]">
                          <span class="font-display text-lg uppercase tracking-[0.14em] text-[color:var(--accent)]">${stat.display}</span>
                          <span class="ml-2">${stat.label}</span>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
              <div class="grid gap-5">
                <div class="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--paper-strong)] p-6">
                  <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Wat je krijgt</p>
                  <ul class="mt-4 space-y-3 text-lg leading-relaxed text-[color:var(--ink)]">
                    <li>Een lang hoofdverhaal over open multi-stakeholderbeleid.</li>
                    <li>Twee praktische deelverhalen over sociale cooperaties en landbouwbeleid.</li>
                    <li>Een redactionele vormtaal met uitgesproken themakleuren per verhaal.</li>
                  </ul>
                </div>
                <a href="${hrefForRoute(mainStory.slug)}" class="inline-flex w-fit rounded-full bg-[color:var(--accent)] px-6 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent-contrast)] transition-opacity hover:opacity-85 md:hidden">Lees het verhaal</a>
              </div>
            </div>
          </article>
        </section>

        <section class="mx-auto max-w-7xl px-5 md:px-8">
          <div class="mb-8 flex items-end justify-between gap-6">
            <div>
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Deelverhalen</p>
              <h2 class="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">Twee concrete routes vanuit de praktijk</h2>
            </div>
          </div>
          <div class="grid gap-6 lg:grid-cols-2">
            ${secondaryStories
              .map(
                (story) => `
                  <article class="paper-panel card-hover reveal-block relative overflow-hidden rounded-[2.4rem] p-7 md:p-9 flex flex-col">
                    <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${story.kicker}</p>
                    <h3 class="mt-4 max-w-2xl font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)]">${story.title}</h3>
                    <p class="mt-5 text-lg leading-relaxed text-[color:var(--ink)]">${story.summary}</p>
                    <div class="mt-auto flex items-center justify-between gap-5 border-t border-[color:var(--line)] pt-5">
                      <span class="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">${story.label}</span>
                      <a href="${hrefForRoute(story.slug)}" class="font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-opacity hover:opacity-75">Open verhaal</a>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      </main>
    `;
  }

  function renderStoryPage(story) {
    const isMainStory = story.id === "main";
    return `
      <main class="route-fade pb-24">
        <section class="relative overflow-hidden border-b border-[color:var(--line)]">
          <div class="accent-wash absolute inset-0"></div>
          <div class="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[0.18fr_1fr]">
            <div class="hidden justify-center lg:flex">
              <span class="vertical-label font-display text-xs uppercase tracking-[0.36em] text-[color:var(--muted)]">${story.kicker} • ${story.shortTitle}</span>
            </div>
            <div class="relative z-10">
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${content.siteMeta.issueTitle} • ${story.kicker}</p>
              <h1 class="display-shadow mt-5 max-w-5xl font-display text-5xl uppercase leading-[0.92] tracking-[-0.05em] text-[color:var(--ink)] sm:text-6xl lg:text-[6.4rem]">${story.title}</h1>
              <p class="mt-6 max-w-4xl text-xl leading-relaxed text-[color:var(--muted)] md:text-2xl">${story.dek}</p>
              <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--line)] pt-5 text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                <span>${story.byline}</span>
                <span>${content.siteMeta.projectLabel}</span>
              </div>
            </div>
          </div>
        </section>

        ${
          isMainStory
            ? `
              <section class="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
                <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                  ${story.stats
                    .map(
                      (stat) => `
                        <article data-reveal class="paper-panel reveal-block rounded-[2rem] p-6 md:p-8">
                          <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Kerncijfer</p>
                          <div class="mt-5 font-display text-5xl uppercase leading-none tracking-[-0.04em] text-[color:var(--accent)] md:text-6xl">
                            <span class="js-stat" data-value="${stat.value}" data-prefix="${stat.prefix}" data-suffix="${stat.suffix}" data-compact="${stat.compact}">0</span>
                          </div>
                          <p class="mt-4 text-lg leading-relaxed text-[color:var(--ink)]">${stat.label}</p>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
            : ""
        }

        <section class="mx-auto max-w-7xl px-5 md:px-8">
          <article id="story-article" class="grid gap-8 lg:grid-cols-[0.24fr_1fr]">
            <aside class="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div data-reveal class="paper-panel reveal-block rounded-[2rem] p-6">
                <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Route</p>
                <ul class="mt-5 space-y-3 text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">
                  <li><a href="#/" class="transition-colors hover:text-[color:var(--accent)]">Terug naar home</a></li>
                  ${story.relatedStories
                    .map((id) => {
                      const related = content.stories[id];
                      return `<li><a href="${hrefForRoute(related.slug)}" class="transition-colors hover:text-[color:var(--accent)]">${related.shortTitle}</a></li>`;
                    })
                    .join("")}
                </ul>
              </div>
              <div data-reveal class="paper-panel reveal-block rounded-[2rem] p-6">
                <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">In een zin</p>
                <p class="mt-4 text-lg leading-relaxed text-[color:var(--ink)]">${story.summary}</p>
              </div>
            </aside>

            <div class="space-y-12 md:space-y-16">
              ${story.sections
                .map(
                  (section, index) => `
                    <section data-reveal class="reveal-block paper-panel relative overflow-hidden rounded-[2.4rem] p-6 md:p-9 lg:p-10">
                      <div class="flex items-center gap-4 flex-wrap">
                        <span class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">0${index + 1}</span>
                        ${
                          section.asideLabel
                            ? `<span class="inline-flex rounded-full bg-[color:var(--accent-soft)] px-4 py-2 font-display text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">${section.asideLabel}</span>`
                            : ""
                        }
                      </div>
                      <h2 class="mt-4 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">${section.heading}</h2>
                      <div class="mt-8 space-y-6">
                        ${section.paragraphs
                          .map(
                            (paragraph, paragraphIndex) => `
                              <div class="${paragraphIndex === 0 ? "story-copy" : ""}">
                                <p class="text-lg leading-relaxed text-[color:var(--ink)] md:text-[1.28rem]">${paragraph}</p>
                              </div>
                            `
                          )
                          .join("")}
                        ${
                          section.pullQuote
                            ? `
                              <blockquote class="relative border-l-[3px] border-[color:var(--accent)] pl-6 py-2 md:pl-8">
                                <span class="absolute -left-1 -top-3 font-display text-7xl leading-none text-[color:var(--accent)] opacity-20 select-none">\u201C</span>
                                <p class="relative font-serif text-xl italic leading-relaxed text-[color:var(--ink)] md:text-2xl">${section.pullQuote}</p>
                              </blockquote>
                            `
                            : ""
                        }
                      </div>
                    </section>
                  `
                )
                .join("")}
            </div>
          </article>
        </section>

        <section class="mx-auto mt-16 max-w-7xl px-5 md:px-8">
          <div class="mb-7 flex items-end justify-between gap-6">
            <div>
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Lees verder</p>
              <h2 class="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">Verwante verhalen</h2>
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2">
            ${story.relatedStories
              .map((id) => {
                const related = content.stories[id];
                return `
                  <article data-reveal class="paper-panel card-hover reveal-block rounded-[2.2rem] p-7">
                    <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${related.kicker}</p>
                    <h3 class="mt-4 font-display text-3xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)]">${related.title}</h3>
                    <p class="mt-4 text-lg leading-relaxed text-[color:var(--ink)]">${related.summary}</p>
                    <a href="${hrefForRoute(related.slug)}" class="mt-6 inline-flex rounded-full border border-[color:var(--accent)] px-5 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-contrast)]">Open verhaal</a>
                  </article>
                `;
              })
              .join("")}
          </div>
        </section>
      </main>
    `;
  }

  function renderFooter() {
    return `
      <footer class="mt-20 border-t border-[color:var(--line)]">
        <div class="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p>${content.siteMeta.projectLabel}</p>
          <p>${content.siteMeta.issueTitle}</p>
        </div>
      </footer>
    `;
  }

  function mountRevealAnimations() {
    if (revealObserver) {
      revealObserver.disconnect();
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal-block").forEach((element) => {
      revealObserver.observe(element);
    });
  }

  function formatAnimatedValue(prefix, rawValue, compact, suffix) {
    const rounded = Math.round(rawValue);
    if (compact) {
      return `${prefix}${rounded.toLocaleString("nl-NL")}${suffix}`;
    }
    return `${prefix}${rounded}${suffix}`;
  }

  function mountStatCounters() {
    if (statObserver) {
      statObserver.disconnect();
    }

    const statElements = document.querySelectorAll(".js-stat");
    if (!statElements.length) {
      return;
    }

    statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.started === "true") {
            return;
          }

          entry.target.dataset.started = "true";
          const value = Number(entry.target.dataset.value || 0);
          const prefix = entry.target.dataset.prefix || "";
          const suffix = entry.target.dataset.suffix || "";
          const compact = entry.target.dataset.compact;
          const duration = 1100;
          const start = performance.now();

          function tick(timestamp) {
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = formatAnimatedValue(prefix, value * eased, compact, suffix);

            if (progress < 1) {
              window.requestAnimationFrame(tick);
            } else {
              entry.target.textContent = `${prefix}${compact || value.toLocaleString("nl-NL")}${suffix}`;
            }
          }

          window.requestAnimationFrame(tick);
          statObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.32 }
    );

    statElements.forEach((element) => statObserver.observe(element));
  }

  function bindProgressBar(route) {
    const progressBar = document.getElementById("progress-bar");
    if (!progressBar) {
      return;
    }

    if (detachScrollProgress) {
      detachScrollProgress();
      detachScrollProgress = null;
    }

    if (route.id === "home") {
      progressBar.style.width = "0%";
      return;
    }

    const article = document.getElementById("story-article");
    if (!article) {
      return;
    }

    let ticking = false;

    function updateProgress() {
      const rect = article.getBoundingClientRect();
      const totalDistance = article.offsetHeight - window.innerHeight;

      if (totalDistance <= 0) {
        progressBar.style.width = "100%";
        return;
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), totalDistance);
      progressBar.style.width = `${(scrolled / totalDistance) * 100}%`;
    }

    function onScroll() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        updateProgress();
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    detachScrollProgress = () => window.removeEventListener("scroll", onScroll);
    updateProgress();
  }

  function renderRoute() {
    const route = getRouteFromHash();
    applyTheme(route.theme);

    const story = storyBySlug[route.slug];
    const pageMarkup = route.id === "home" ? renderHome() : renderStoryPage(story);

    app.innerHTML = `
      ${renderNav(route)}
      ${pageMarkup}
      ${renderFooter()}
    `;

    window.scrollTo({ top: 0, behavior: "auto" });
    mountRevealAnimations();
    mountStatCounters();
    bindProgressBar(route);
  }

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("DOMContentLoaded", renderRoute);
})();
