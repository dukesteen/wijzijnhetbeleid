(function () {
  const content = window.SITE_CONTENT;
  const app = document.getElementById("app");

  if (!content || !app) {
    return;
  }

  // Pristine copy of original content (never mutated)
  const originalContent = JSON.parse(JSON.stringify(content));

  // Deep clone for editing, restore from localStorage if available
  const STORAGE_KEY = "wijzijnhetbeleid-draft";
  let editData = loadDraft() || JSON.parse(JSON.stringify(content));
  let editMode = false;

  function loadDraft() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  }

  function saveDraft() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(editData));
    } catch (e) {}
  }

  function clearDraft() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  // If a draft exists, apply it to the live content immediately
  if (loadDraft()) {
    content.siteMeta = JSON.parse(JSON.stringify(editData.siteMeta));
    Object.keys(editData.stories).forEach((key) => {
      content.stories[key] = JSON.parse(JSON.stringify(editData.stories[key]));
    });
  }

  const routeMap = new Map(content.routes.map((route) => [route.slug, route]));
  function getStoryBySlug(slug) {
    return Object.values(content.stories).find((s) => s.slug === slug);
  }

  let statObserver = null;
  let revealObserver = null;
  let detachScrollProgress = null;
  let skipScroll = false;

  // Helper: returns data-edit attribute string
  function e(path) {
    return `data-edit="${path}"`;
  }

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
            <span ${e("siteMeta.issueLabel")} class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${content.siteMeta.issueLabel}</span>
            <span ${e("siteMeta.issueTitle")} class="font-display text-2xl uppercase tracking-[0.04em] text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent)]">${content.siteMeta.issueTitle}</span>
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
    const magazinePromo = content.siteMeta.magazinePromo;
    const foreword = content.siteMeta.foreword;
    const author = content.siteMeta.author;
    const secondaryStories = [
      content.stories.lansco,
      content.stories.markemodel,
    ];

    return `
      <main class="route-fade pb-24">
        <section class="relative overflow-hidden border-b border-[color:var(--line)]">
          <div class="accent-wash absolute inset-0"></div>
          <div class="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div class="relative z-10">
              <p ${e("siteMeta.projectLabel")} class="font-display text-sm uppercase tracking-[0.34em] text-[color:var(--muted)]">${content.siteMeta.projectLabel}</p>
              <div class="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
                <h1 class="display-shadow font-display text-6xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] sm:text-7xl lg:text-[7.25rem]">${content.siteMeta.issueTitle}</h1>
                <span class="rounded-full bg-[color:var(--accent)] px-5 py-2 font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent-contrast)]">web special</span>
              </div>
              <p ${e("siteMeta.intro")} class="mt-6 max-w-3xl text-xl leading-relaxed text-[color:var(--muted)] md:text-2xl">${content.siteMeta.intro}</p>
              ${content.siteMeta.subtitle || content.siteMeta.editorialNote ? `
              <div class="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
                ${content.siteMeta.subtitle ? `
                <div class="paper-panel reveal-block relative overflow-hidden rounded-[2rem] p-6">
                  <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Kern van het project</p>
                  <p ${e("siteMeta.subtitle")} class="mt-3 text-lg leading-relaxed text-[color:var(--ink)]">${content.siteMeta.subtitle}</p>
                </div>` : ""}
                ${content.siteMeta.editorialNote ? `
                <div class="paper-panel reveal-block relative overflow-hidden rounded-[2rem] p-6">
                  <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Vormtaal</p>
                  <p ${e("siteMeta.editorialNote")} class="mt-3 text-lg leading-relaxed text-[color:var(--ink)]">${content.siteMeta.editorialNote}</p>
                </div>` : ""}
              </div>` : ""}
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
                          <p ${e(`stories.${route.id}.kicker`)} class="font-display text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">${story.kicker}</p>
                          <a href="${hrefForRoute(route.slug)}" ${e(`stories.${route.id}.title`)} class="mt-1 block text-xl leading-tight text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent)]">${story.title}</a>
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

        <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <article class="paper-panel reveal-block relative overflow-hidden rounded-[2.4rem] p-6 md:p-8 lg:p-10">
            <div class="grid items-center gap-8 lg:grid-cols-[0.78fr_1fr]">
              <a
                href="${magazinePromo.ctaHref}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-full items-center justify-center rounded-[2rem] border border-[color:var(--line)] bg-white p-4 transition-transform hover:scale-[1.01]"
              >
                <img
                  src="${magazinePromo.imageSrc}"
                  alt="${magazinePromo.imageAlt}"
                  class="max-h-[34rem] w-full rounded-[1.4rem] object-contain shadow-editorial"
                />
              </a>
              <div class="relative z-10">
                <p ${e("siteMeta.magazinePromo.eyebrow")} class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${magazinePromo.eyebrow}</p>
                <h2 ${e("siteMeta.magazinePromo.headline")} class="mt-4 max-w-3xl font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-6xl">${magazinePromo.headline}</h2>
                <p ${e("siteMeta.magazinePromo.body")} class="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--ink)] md:text-xl">${magazinePromo.body}</p>
                <div class="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="${magazinePromo.ctaHref}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent-contrast)] transition-opacity hover:opacity-85"
                  >
                    ${magazinePromo.ctaLabel}
                  </a>
                  <span class="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">Optimist Speciale Editie 2025</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section class="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
          <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article class="paper-panel reveal-block relative overflow-hidden rounded-[2.4rem] p-7 md:p-9">
              <p ${e("siteMeta.foreword.eyebrow")} class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${foreword.eyebrow}</p>
              <h2 ${e("siteMeta.foreword.title")} class="mt-4 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">${foreword.title}</h2>
              <div class="mt-7 space-y-5">
                ${foreword.paragraphs
                  .map(
                    (paragraph, index) => `
                      <p ${e(`siteMeta.foreword.paragraphs.${index}`)} class="text-lg leading-relaxed text-[color:var(--ink)]">${paragraph}</p>
                    `,
                  )
                  .join("")}
              </div>
              <blockquote class="mt-8 border-l-[3px] border-[color:var(--accent)] pl-6">
                <p ${e("siteMeta.foreword.pullQuote")} class="font-serif text-xl italic leading-relaxed text-[color:var(--ink)] md:text-2xl">${foreword.pullQuote}</p>
              </blockquote>
            </article>

            <aside class="paper-panel reveal-block relative overflow-hidden rounded-[2.4rem] p-4 md:p-5">
              <div class="overflow-hidden rounded-[2rem]">
                <img
                  src="${author.imageSrc}"
                  alt="${author.imageAlt}"
                  class="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <div class="p-3 md:p-5">
                <p ${e("siteMeta.author.eyebrow")} class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${author.eyebrow}</p>
                <h2 ${e("siteMeta.author.name")} class="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)]">${author.name}</h2>
                <p ${e("siteMeta.author.role")} class="mt-4 text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">${author.role}</p>
                <p ${e("siteMeta.author.bio")} class="mt-5 text-lg leading-relaxed text-[color:var(--ink)]">${author.bio}</p>
              </div>
            </aside>
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div class="mb-8 flex items-end justify-between gap-6">
            <div>
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Uitgelicht</p>
              <h2 ${e("stories.main.title")} class="mt-3 max-w-3xl font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-6xl">${mainStory.title}</h2>
            </div>
            <a href="${hrefForRoute(mainStory.slug)}" class="hidden rounded-full border border-[color:var(--accent)] px-6 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-contrast)] md:inline-flex">Lees het verhaal</a>
          </div>

          <article class="paper-panel card-hover reveal-block relative overflow-hidden rounded-[2.4rem] p-7 md:p-10">
            <div class="absolute right-0 top-0 hidden h-32 w-32 translate-x-6 -translate-y-6 rounded-full bg-[color:var(--accent-soft)] opacity-80 md:block"></div>
            <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="relative z-10">
                <p ${e("stories.main.kicker")} class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${mainStory.kicker}</p>
                <p ${e("stories.main.dek")} class="mt-4 max-w-3xl text-lg leading-relaxed text-[color:var(--ink)] md:text-xl">${mainStory.dek}</p>
                ${mainStory.stats.length ? `
                <div class="mt-8 flex flex-wrap gap-3">
                  ${mainStory.stats
                    .map(
                      (stat, si) => `
                        <div class="rounded-full border border-[color:var(--line)] bg-white/70 px-4 py-2 text-sm text-[color:var(--muted)]">
                          <span class="font-display text-lg uppercase tracking-[0.14em] text-[color:var(--accent)]">${stat.display}</span>
                          <span ${e(`stories.main.stats.${si}.label`)} class="ml-2">${stat.label}</span>
                        </div>
                      `,
                    )
                    .join("")}
                </div>` : ""}
                <a href="${hrefForRoute(mainStory.slug)}" class="mt-8 inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent-contrast)] transition-opacity hover:opacity-85 md:hidden">Lees het verhaal</a>
              </div>
              <div class="overflow-hidden rounded-[2rem]">
                ${mainStory.heroImage
                  ? `<img src="${mainStory.heroImage.src}" alt="${mainStory.heroImage.alt}" class="w-full h-full object-cover aspect-[4/3]" />`
                  : `<div class="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--paper-strong)] p-6">
                      <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Wat je krijgt</p>
                      <ul class="mt-4 space-y-3 text-lg leading-relaxed text-[color:var(--ink)]">
                        <li>Een lang hoofdverhaal over open multi-stakeholderbeleid.</li>
                        <li>Twee praktische deelverhalen over sociale co\u00f6peraties en landbouwbeleid.</li>
                      </ul>
                    </div>`
                }
              </div>
            </div>
          </article>
        </section>

        <section class="mx-auto max-w-7xl px-5 md:px-8">
          <div class="mb-8 flex items-end justify-between gap-6">
            <div>
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Deelverhalen</p>
              <h2 class="mt-3 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">Hoe ziet wij zijn het beleid eruit?</h2>
            </div>
          </div>
          <div class="grid gap-6 lg:grid-cols-2">
            ${secondaryStories
              .map(
                (story) => `
                  <article class="paper-panel card-hover reveal-block relative overflow-hidden rounded-[2.4rem] p-7 md:p-9 flex flex-col">
                    <p ${e(`stories.${story.id}.kicker`)} class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${story.kicker}</p>
                    <h3 ${e(`stories.${story.id}.title`)} class="mt-4 max-w-2xl font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)]">${story.title}</h3>
                    <p ${e(`stories.${story.id}.summary`)} class="mt-5 text-lg leading-relaxed text-[color:var(--ink)]">${story.summary}</p>
                    <div class="mt-auto flex items-center justify-between gap-5 border-t border-[color:var(--line)] pt-5">
                      <span class="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">${story.label}</span>
                      <a href="${hrefForRoute(story.slug)}" class="font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-opacity hover:opacity-75">Open verhaal</a>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      </main>
    `;
  }

  function renderStoryPage(story) {
    const sid = story.id;
    const isMainStory = sid === "main";
    return `
      <main class="route-fade pb-24">
        <section class="relative overflow-hidden border-b border-[color:var(--line)]">
          <div class="accent-wash absolute inset-0"></div>
          <div class="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[0.18fr_1fr]">
            <div class="hidden justify-center lg:flex">
              <span class="vertical-label font-display text-xs uppercase tracking-[0.36em] text-[color:var(--muted)]">${story.kicker} \u2022 ${story.shortTitle}</span>
            </div>
            <div class="relative z-10">
              <p class="font-display text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">${content.siteMeta.issueTitle} \u2022 ${story.kicker}</p>
              <h1 ${e(`stories.${sid}.title`)} class="display-shadow mt-5 max-w-5xl font-display text-5xl uppercase leading-[0.92] tracking-[-0.05em] text-[color:var(--ink)] sm:text-6xl lg:text-[6.4rem]">${story.title}</h1>
              <p ${e(`stories.${sid}.dek`)} class="mt-6 max-w-4xl text-xl leading-relaxed text-[color:var(--muted)] md:text-2xl">${story.dek}</p>
              <div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[color:var(--line)] pt-5 text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                <span ${e(`stories.${sid}.byline`)}>${story.byline}</span>
                <span>${content.siteMeta.projectLabel}</span>
              </div>
            </div>
          </div>
        </section>

        ${
          story.heroImage
            ? `
              <section class="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
                <div class="overflow-hidden rounded-[2rem] shadow-editorial">
                  <img
                    src="${story.heroImage.src}"
                    alt="${story.heroImage.alt}"
                    class="w-full max-h-[40rem] object-cover"
                  />
                </div>
              </section>
            `
            : ""
        }

        ${
          isMainStory && story.stats && story.stats.length
            ? `
              <section class="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
                <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                  ${story.stats
                    .map(
                      (stat, si) => `
                        <article data-reveal class="paper-panel reveal-block rounded-[2rem] p-6 md:p-8">
                          <p class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Kerncijfer</p>
                          <div class="mt-5 font-display text-5xl uppercase leading-none tracking-[-0.04em] text-[color:var(--accent)] md:text-6xl">
                            <span class="js-stat" data-value="${stat.value}" data-prefix="${stat.prefix}" data-suffix="${stat.suffix}" data-compact="${stat.compact}">0</span>
                          </div>
                          <p ${e(`stories.main.stats.${si}.label`)} class="mt-4 text-lg leading-relaxed text-[color:var(--ink)]">${stat.label}</p>
                        </article>
                      `,
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
                <p ${e(`stories.${sid}.summary`)} class="mt-4 text-lg leading-relaxed text-[color:var(--ink)]">${story.summary}</p>
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
                            ? `<span ${e(`stories.${sid}.sections.${index}.asideLabel`)} class="inline-flex rounded-full bg-[color:var(--accent-soft)] px-4 py-2 font-display text-xs uppercase tracking-[0.28em] text-[color:var(--accent)]">${section.asideLabel}</span>`
                            : ""
                        }
                      </div>
                      <h2 ${e(`stories.${sid}.sections.${index}.heading`)} class="mt-4 font-display text-4xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)] md:text-5xl">${section.heading}</h2>
                      <div class="mt-8 space-y-6">
                      ${
                        section.sectionImage
                          ? `
                            <figure class="float-right ml-6 mb-4 w-2/5 max-w-[240px] overflow-hidden rounded-[1.2rem] md:max-w-[280px]">
                              <img
                                src="${section.sectionImage.src}"
                                alt="${section.sectionImage.alt}"
                                class="w-full aspect-[3/4] object-cover object-top"
                              />
                              ${section.sectionImage.alt ? `<figcaption class="mt-2 text-xs text-[color:var(--muted)] text-center">${section.sectionImage.alt}</figcaption>` : ""}
                            </figure>
                          `
                          : ""
                      }
                        ${section.paragraphs
                          .map(
                            (paragraph, paragraphIndex) => `
                              <div class="${paragraphIndex === 0 ? "story-copy" : ""}">
                                <p ${e(`stories.${sid}.sections.${index}.paragraphs.${paragraphIndex}`)} class="text-lg leading-relaxed text-[color:var(--ink)] md:text-[1.28rem]">${paragraph}</p>
                              </div>
                            `,
                          )
                          .join("")}
                        ${editMode ? `<button class="edit-add-para visible" data-story="${sid}" data-section="${index}">+ Alinea toevoegen</button>` : ""}
                        ${
                          section.pullQuote
                            ? `
                              <blockquote class="relative border-l-[3px] border-[color:var(--accent)] pl-6 py-2 md:pl-8">
                                <span class="absolute -left-1 -top-3 font-display text-7xl leading-none text-[color:var(--accent)] opacity-20 select-none">\u201C</span>
                                <p ${e(`stories.${sid}.sections.${index}.pullQuote`)} class="relative font-serif text-xl italic leading-relaxed text-[color:var(--ink)] md:text-2xl">${section.pullQuote}</p>
                              </blockquote>
                            `
                            : ""
                        }
                      </div>
                    </section>
                  `,
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
                  <article data-reveal class="paper-panel card-hover reveal-block rounded-[2.2rem] p-7 flex flex-col h-full">
                    <p ${e(`stories.${id}.kicker`)} class="font-display text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">${related.kicker}</p>
                    <h3 ${e(`stories.${id}.title`)} class="mt-4 font-display text-3xl uppercase leading-none tracking-[-0.04em] text-[color:var(--ink)]">${related.title}</h3>
                    <p ${e(`stories.${id}.summary`)} class="mt-4 flex-1 text-lg leading-relaxed text-[color:var(--ink)]">${related.summary}</p>
                    <a href="${hrefForRoute(related.slug)}" class="mt-6 inline-flex rounded-full border border-[color:var(--accent)] px-5 py-3 font-display text-sm uppercase tracking-[0.24em] text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--accent-contrast)] w-fit">Open verhaal</a>
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
      { threshold: 0.16 },
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
          if (
            !entry.isIntersecting ||
            entry.target.dataset.started === "true"
          ) {
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
            entry.target.textContent = formatAnimatedValue(
              prefix,
              value * eased,
              compact,
              suffix,
            );

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
      { threshold: 0.32 },
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

  let skipCollect = false;

  function renderRoute() {
    // Collect any in-progress edits before re-rendering
    if (editMode && !skipCollect) {
      collectEdits();
      applyEditsToContent();
    }
    skipCollect = false;

    const route = getRouteFromHash();
    applyTheme(route.theme);

    const story = getStoryBySlug(route.slug);
    const pageMarkup =
      route.id === "home" ? renderHome() : renderStoryPage(story);

    app.innerHTML = `
      ${renderNav(route)}
      ${pageMarkup}
      ${renderFooter()}
    `;

    if (!skipScroll) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    skipScroll = false;
    mountRevealAnimations();
    mountStatCounters();
    mountTooltips();
    bindProgressBar(route);

    if (editMode) {
      activateEditable();
    }
  }

  function applyEditsToContent() {
    // Write editData back into the live content object so re-renders pick up changes
    content.siteMeta = JSON.parse(JSON.stringify(editData.siteMeta));
    Object.keys(editData.stories).forEach((key) => {
      content.stories[key] = JSON.parse(JSON.stringify(editData.stories[key]));
    });
  }

  // ─── Tooltips & Story Links CSS ──────────────────────────
  (function injectInteractiveStyles() {
    const s = document.createElement("style");
    s.textContent = `
      .story-link {
        color: var(--accent);
        text-decoration: underline;
        text-decoration-thickness: 1.5px;
        text-underline-offset: 2px;
        transition: opacity 0.15s;
      }
      .story-link:hover { opacity: 0.75; }
      .tooltip-trigger {
        color: var(--accent);
        border-bottom: 1.5px dashed var(--accent);
        cursor: help;
        position: relative;
      }
      .tooltip-trigger:hover { opacity: 0.8; }
      .tooltip-popup {
        position: absolute;
        bottom: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        width: max(280px, min(90vw, 420px));
        background: var(--ink, #111);
        color: var(--surface, #faf6f0);
        font-size: 0.875rem;
        line-height: 1.6;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.22);
        z-index: 100;
        pointer-events: auto;
        opacity: 0;
        animation: tooltipIn 0.18s ease forwards;
      }
      .tooltip-popup::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 8px solid transparent;
        border-top-color: var(--ink, #111);
      }
      @keyframes tooltipIn {
        from { opacity: 0; transform: translateX(-50%) translateY(4px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
      .shadow-editorial {
        box-shadow: 0 4px 24px rgba(0,0,0,0.10);
      }
    `;
    document.head.appendChild(s);
  })();

  // ─── Tooltip Mounting ──────────────────────────────────────
  function mountTooltips() {
    document.querySelectorAll(".tooltip-trigger").forEach((trigger) => {
      const tooltipId = trigger.dataset.tooltip;
      // Find tooltip data from story content
      const route = getRouteFromHash();
      const story = getStoryBySlug(route.slug);
      if (!story) return;

      let tooltipContent = "";
      for (const section of story.sections) {
        if (section.tooltips) {
          const match = section.tooltips.find((t) => t.id === tooltipId);
          if (match) {
            tooltipContent = match.content;
            break;
          }
        }
      }
      if (!tooltipContent) return;

      let popup = null;

      function show() {
        if (popup) return;
        popup = document.createElement("div");
        popup.className = "tooltip-popup";
        popup.textContent = tooltipContent;
        trigger.style.position = "relative";
        trigger.appendChild(popup);
      }

      function hide() {
        if (popup) {
          popup.remove();
          popup = null;
        }
      }

      trigger.addEventListener("mouseenter", show);
      trigger.addEventListener("mouseleave", hide);
      trigger.addEventListener("click", (ev) => {
        ev.preventDefault();
        popup ? hide() : show();
      });
    });
  }

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("DOMContentLoaded", renderRoute);

  // ─── Edit Mode ───────────────────────────────────────────

  function setNestedValue(obj, path, value) {
    const keys = path.split(".");
    let cur = obj;
    for (let i = 0; i < keys.length - 1; i++) {
      cur = cur[keys[i]];
    }
    cur[keys[keys.length - 1]] = value;
  }

  function collectEdits() {
    document.querySelectorAll("[data-edit]").forEach((el) => {
      const path = el.dataset.edit;
      const text = el.innerText.trim();
      setNestedValue(editData, path, text);
    });
    if (editMode) saveDraft();
  }

  function generateContentJS() {
    collectEdits();
    // Rebuild stat display values
    Object.values(editData.stories).forEach((story) => {
      if (story.stats) {
        story.stats.forEach((stat) => {
          stat.display = `${stat.prefix}${stat.compact || stat.value}${stat.suffix}`;
        });
      }
    });
    return (
      "const SITE_CONTENT = " +
      JSON.stringify(editData, null, 2) +
      ";\n\nwindow.SITE_CONTENT = SITE_CONTENT;\n"
    );
  }

  function downloadFile(filename, text) {
    const blob = new Blob([text], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function onEditInput(ev) {
    const el = ev.target.closest("[data-edit]");
    if (!el || !editMode) return;
    setNestedValue(editData, el.dataset.edit, el.innerText.trim());
    saveDraft();
  }

  function activateEditable() {
    document.querySelectorAll("[data-edit]").forEach((el) => {
      el.setAttribute("contenteditable", "true");
      el.classList.add("edit-target");
      el.addEventListener("input", onEditInput);
    });
    document.querySelectorAll(".edit-add-para").forEach((btn) => {
      btn.classList.add("visible");
    });
  }

  function deactivateEditable() {
    document.querySelectorAll("[data-edit]").forEach((el) => {
      el.removeAttribute("contenteditable");
      el.classList.remove("edit-target");
    });
    document.querySelectorAll(".edit-add-para").forEach((btn) => {
      btn.classList.remove("visible");
    });
  }

  // Build editor toolbar (injected into DOM once)
  function createEditorUI() {
    // CSS
    const style = document.createElement("style");
    style.textContent = `
      .edit-target {
        outline: 2px dashed transparent;
        outline-offset: 4px;
        border-radius: 4px;
        transition: outline-color 0.15s;
        cursor: text;
      }
      .edit-target:hover {
        outline-color: rgba(194, 29, 52, 0.35);
      }
      .edit-target:focus {
        outline-color: rgba(194, 29, 52, 0.7);
        outline-style: solid;
      }
      .edit-toolbar {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        gap: 8px;
        align-items: center;
        background: #111;
        padding: 10px 16px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.28);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .edit-toolbar button {
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.15s;
      }
      .edit-toolbar button:hover { opacity: 0.85; }
      .edit-toolbar .edit-btn-toggle {
        background: #c21d34;
        color: #fff;
      }
      .edit-toolbar .edit-btn-toggle.active {
        background: #fff;
        color: #111;
      }
      .edit-toolbar .edit-btn-export {
        background: #1a6b34;
        color: #fff;
        display: none;
      }
      .edit-toolbar .edit-btn-export.visible,
      .edit-toolbar .edit-btn-clear.visible {
        display: inline-flex;
      }
      .edit-toolbar .edit-btn-clear {
        background: #444;
        color: #fff;
        display: none;
      }
      .edit-toolbar .edit-label {
        color: rgba(255,255,255,0.5);
        font-size: 12px;
        letter-spacing: 0.05em;
      }
      .edit-add-para {
        display: none;
        width: 100%;
        padding: 10px;
        border: 2px dashed rgba(17,17,17,0.2);
        border-radius: 12px;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: rgba(17,17,17,0.4);
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
      }
      .edit-add-para.visible {
        display: block;
      }
      .edit-add-para:hover {
        border-color: rgba(194, 29, 52, 0.5);
        color: rgba(194, 29, 52, 0.8);
      }
    `;
    document.head.appendChild(style);

    // Toolbar
    const toolbar = document.createElement("div");
    toolbar.className = "edit-toolbar";
    toolbar.innerHTML = `
      <span class="edit-label">EDITOR</span>
      <button class="edit-btn-toggle">Bewerken</button>
      <button class="edit-btn-clear">Wis wijzigingen</button>
      <button class="edit-btn-export">Exporteer content.js</button>
    `;
    document.body.appendChild(toolbar);

    const toggleBtn = toolbar.querySelector(".edit-btn-toggle");
    const exportBtn = toolbar.querySelector(".edit-btn-export");
    const clearBtn = toolbar.querySelector(".edit-btn-clear");

    toggleBtn.addEventListener("click", () => {
      editMode = !editMode;
      toggleBtn.textContent = editMode ? "Stop bewerken" : "Bewerken";
      toggleBtn.classList.toggle("active", editMode);
      exportBtn.classList.toggle("visible", editMode);
      clearBtn.classList.toggle("visible", editMode);

      if (editMode) {
        activateEditable();
      } else {
        collectEdits();
        deactivateEditable();
      }
    });

    exportBtn.addEventListener("click", () => {
      downloadFile("content.js", generateContentJS());
      clearDraft();
    });

    clearBtn.addEventListener("click", () => {
      if (!confirm("Alle wijzigingen wissen? Dit kan niet ongedaan worden."))
        return;
      // Exit edit mode first to prevent any saves
      editMode = false;
      toggleBtn.textContent = "Bewerken";
      toggleBtn.classList.remove("active");
      exportBtn.classList.remove("visible");
      clearBtn.classList.remove("visible");
      // Clear storage and reset data
      clearDraft();
      editData = JSON.parse(JSON.stringify(originalContent));
      content.siteMeta = JSON.parse(JSON.stringify(originalContent.siteMeta));
      Object.keys(originalContent.stories).forEach((key) => {
        content.stories[key] = JSON.parse(
          JSON.stringify(originalContent.stories[key]),
        );
      });
      skipCollect = true;
      renderRoute();
    });

    // Delegated listener for "add paragraph" buttons
    document.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".edit-add-para");
      if (!btn) return;
      const storyId = btn.dataset.story;
      const secIdx = Number(btn.dataset.section);
      // Collect current edits first
      collectEdits();
      applyEditsToContent();
      // Add new paragraph
      content.stories[storyId].sections[secIdx].paragraphs.push(
        "Nieuwe alinea...",
      );
      editData = JSON.parse(JSON.stringify(content));
      saveDraft();
      // Re-render without scrolling to top
      skipScroll = true;
      renderRoute();
    });
  }

  // Activate editor with Ctrl/Cmd+K or ?edit in URL
  let editorCreated = false;

  function ensureEditor() {
    if (!editorCreated) {
      editorCreated = true;
      createEditorUI();
    }
  }

  if (window.location.search.includes("edit")) {
    document.addEventListener("DOMContentLoaded", ensureEditor);
  }

  document.addEventListener("keydown", (ev) => {
    if ((ev.metaKey || ev.ctrlKey) && ev.key === "k") {
      ev.preventDefault();
      ensureEditor();
      // Also toggle edit mode
      document.querySelector(".edit-btn-toggle")?.click();
    }
  });
})();
