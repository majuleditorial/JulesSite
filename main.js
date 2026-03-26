// ╔══════════════════════════════════════════════════════════════╗
// ║              WEEKLY UPDATE ZONE — EDIT HERE ONLY            ║
// ║  Everything you need to update each week lives in this block ║
// ╚══════════════════════════════════════════════════════════════╝

// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
const SITE_CONFIG = {
  name: "Majul Editorial",
  tagline: "Fashion Beyond The Runway · Culture · Context · Commentary",
  footerTagline: "Fashion beyond the runway.",
  footerDesc: "A digital editorial platform built for visual storytelling, sharp commentary, and magazine-style publishing focused on fashion law, culture, and criticism.",
  instagramUrl: "https://instagram.com",
};

// ── HERO SECTION ─────────────────────────────────────────────────
const HERO = {
  eyebrow: "Lead Story",
  headline: "Does <em>originality</em> even matter anymore?",
  body: "This issue leads with a sharp look at nostalgia, revival culture, and the legal fiction of originality in a fashion industry built on recombination, archives, and repetition.",
  heroArticleId: "does-originality-even-matter",
  heroImage: "LeadArticleImage.png",
  heroBadge: "Issue 01 · Lead",
};

// ── FEATURED ARTICLE (Lead Story) ────────────────────────────────
const FEATURED = {
  featuredId: "does-originality-even-matter",
  sectionDesc: "Six essays examine the fault lines where fashion meets law: originality, trademarks, counterfeits, labor, aesthetics, and brand control.",
  editorNote: "Lead essay: a critique of revival culture and the mismatch between fashion’s recursive creativity and legal doctrines built around novelty.",
};

// ── ARTICLES ─────────────────────────────────────────────────────
const articles = [
  {
    id: "does-originality-even-matter",
    category: "Lead",
    issue: "Issue 01",
    title: "Does Originality Even Matter Anymore?",
    subtitle: "Nostalgia, revival culture, and the limits of fashion law.",
    excerpt: "As 2025 fashion loops back through Y2K, archive revivals, and reboot culture, the real question is no longer whether a look is new, but whether the law can recognize meaning when creativity works through repetition.",
    image: "LeadArticleImage.png",
    readTime: "6 min read",
    quote: "Fashion does not move in a straight line; it loops, mutates, and returns charged with new cultural meaning.",
    body: [
      "Plaid, zebra print, mini-bags, thin brows, and Y2K silhouettes are not simply back; they are the dominant visual language of the moment. The lead article argues that 2025 fashion is saturated with revival culture, where desirability comes from recognition rather than rupture.",
      "That creates a legal problem. Copyright, trade dress, and design protection all assume originality, uniqueness, or novelty. Fashion, by contrast, thrives on reference. Designers pull from archives, old films, subcultures, and past decades, then reassemble those sources into something newly legible for the present.",
      "The article rejects the myth of pure originality. It treats fashion as a system of recombination, where even the most celebrated innovations emerge from adaptation rather than invention from nothing. Consumers, platforms, and brands already behave as though this is true, while the law continues to pretend otherwise.",
      "Its conclusion is blunt: fashion law may need to shift away from protecting firstness and toward protecting meaningful reinterpretation. In a culture built on remembrance, significance may matter more than novelty."
    ],
  },
  {
    id: "jurisprudence-of-color-ownership",
    category: "Trademark",
    issue: "Issue 01",
    title: "The Jurisprudence of Color Ownership in Fashion",
    subtitle: "Trademark law and the boundaries of color protection.",
    excerpt: "From Hermès orange to Tiffany blue and Louboutin red soles, the article examines how trademark law tries to protect color as brand identity without privatizing the visual commons.",
    image: "LeadArticleImage.png",
    readTime: "5 min read",
    quote: "Trademark law permits chromatic exclusivity only when color functions as source, not when it locks away a basic tool of design.",
    body: [
      "Color in fashion carries history, status, and instant recognition. The article opens with iconic examples such as Hermès orange, Tiffany blue, and Louboutin’s red sole to ask whether a company can meaningfully claim ownership over a hue.",
      "It explains the core legal framework: a color mark must acquire secondary meaning so that consumers link the shade to a single source, and it must survive the functionality doctrine, which blocks trademark protection when exclusivity would unfairly burden competitors.",
      "Key cases structure the analysis. Qualitex established that a single color can function as a trademark when it identifies source, while Christian Louboutin v. Yves Saint Laurent narrowed protection by treating the contrasting red sole as protectable, but not an all-red shoe.",
      "The article ends by framing color ownership as a jurisprudential balancing act. Courts protect iconic brand signals, but they do so cautiously in order to preserve creative freedom, competition, and the shared cultural life of color itself."
    ],
  },
  {
    id: "conservative-aesthetics-runway",
    category: "Culture",
    issue: "Issue 01",
    title: "The Rise of Conservative Aesthetics on the Runway",
    subtitle: "Quiet luxury, respectability, and the politics of restraint.",
    excerpt: "Longer hemlines, muted palettes, tailoring, and office-core styling are framed not as neutral chic, but as a wider return to discipline, exclusion, and legally enforced standards of professionalism.",
    image: "LeadArticleImage.png",
    readTime: "6 min read",
    quote: "What appears on the runway as elegance can reappear in the workplace as regulation, conformity, and control.",
    body: [
      "This essay traces luxury fashion’s move toward restraint through quiet luxury, old-money styling, and office-coded silhouettes. What looks like aesthetic minimalism is treated as a deeper social preference for order, discipline, and respectability.",
      "The piece argues that conservative style operates as both rebellion and regression. It rejects algorithmic excess and attention-economy spectacle, yet it also restores classed and gendered signals that historically separated who belonged from who did not.",
      "The legal dimension sharpens the critique. Workplace dress codes have long functioned as disciplinary tools, often colliding with race, gender, and identity. The article connects runway conservatism to real disputes over professionalism, including discriminatory enforcement and evolving human-rights protections.",
      "Its final move is to expose the contradiction: luxury houses romanticize refined discipline on the catwalk while the same ideals can restrict expression in workplaces and institutions. The question is not whether restraint is stylish, but who gets policed through it."
    ],
  },
  {
    id: "counterfeit-culture",
    category: "Enforcement",
    issue: "Issue 01",
    title: "The Rise of Counterfeit Culture",
    subtitle: "Fashion law’s ongoing battle against knockoffs.",
    excerpt: "Counterfeits now move through global online platforms at industrial scale, forcing fashion law to confront a fast, distributed market where enforcement is reactive, expensive, and often too slow.",
    image: "LeadArticleImage.png",
    readTime: "5 min read",
    quote: "Counterfeiting threatens more than exclusivity; it destabilizes trust, labor standards, and the legal value of authenticity itself.",
    body: [
      "The article maps counterfeiting as one of fashion law’s most persistent failures. Fake handbags, copied sneakers, and near-identical luxury replicas circulate through digital marketplaces with a scale and speed that traditional enforcement struggles to match.",
      "Trademark law remains the main legal weapon, but it is often incomplete. Design protection is uneven across jurisdictions, copyright rarely captures useful apparel, and fast trend cycles mean a case may arrive after the market moment has already passed.",
      "Platforms such as Instagram, Amazon, and Alibaba become central battlegrounds. Even with takedown systems and seller screening, counterfeit enforcement remains a legal whack-a-mole, especially for smaller designers who lack in-house legal teams and cannot sustain prolonged disputes.",
      "The article closes by widening the frame. Anti-counterfeit law is not just about brand image. It also intersects with consumer safety, abusive labor, environmental harm, and the broader ethics of how fashion value is produced and falsified."
    ],
  },
  {
    id: "what-a-devil-wears-now",
    category: "Commentary",
    issue: "Issue 01",
    title: "What a Devil Wears Now",
    subtitle: "Fashion law, power, and ethics in a sequel era.",
    excerpt: "Using a modern return to The Devil Wears Prada as its frame, the essay examines how workplace law, design protection, AI, and corporate ethics have transformed the legal terrain of fashion since 2006.",
    image: "LeadArticleImage.png",
    readTime: "5 min read",
    quote: "A fashion empire built on fear and image now has to answer to equity law, AI disputes, and new demands for dignity at work.",
    body: [
      "This article revisits The Devil Wears Prada through contemporary fashion law. The old image of glamour-driven authoritarianism is measured against current expectations around labor standards, harassment prevention, pay equity, and non-discriminatory dress codes.",
      "It argues that a sequel set in the present cannot rely on the old fantasy of unchecked executive power. Today’s fashion workplace sits inside a legal framework that expects investigation procedures, respect for workers, and policies that do not discriminate on gendered or other protected grounds.",
      "The piece then turns to intellectual property and the persistent vulnerability of fashion design, especially for small creators navigating copyright gaps, registration burdens, and fast-fashion copying. From there it moves into AI-generated design, where authorship, training data, and liability remain unsettled.",
      "The result is a law-aware cultural critique. A contemporary ‘Devil’ is no longer defined only by taste and control, but by how power operates inside legal systems that now scrutinize workplace conduct, originality claims, and algorithmic creativity."
    ],
  },
  {
    id: "small-signs-big-stakes",
    category: "Case Study",
    issue: "Issue 01",
    title: "Small Signs, Big Stakes",
    subtitle: "A case study of Levi Strauss & Co. v. Brunello Cucinelli USA.",
    excerpt: "A small fabric tab becomes the center of a major trademark dispute, showing how minimal design details now carry enormous legal force in a logo-averse luxury market.",
    image: "LeadArticleImage.png",
    readTime: "5 min read",
    quote: "In contemporary fashion branding, the smallest detail can carry the largest proprietary claim.",
    body: [
      "This case study centers on Levi Strauss & Co.’s 2024 trademark dispute with Brunello Cucinelli over a pocket tab. The argument is outwardly narrow, but the article treats it as a window into the expanding reach of non-traditional trademarks in fashion.",
      "Levi’s tab is presented as more than decoration. After decades of consistent use and brand recognition, the company argues that consumers read the size, placement, and rectangular silhouette of the tab itself as a source identifier, even without a visible wordmark.",
      "The essay links this to a broader market shift. In a quiet-luxury environment, branding has become smaller and subtler, which means minimalist cues now carry more communicative and legal weight. Trademark law is adapting by taking micro-signifiers increasingly seriously.",
      "But that expansion has costs. Independent designers face a denser and more dangerous design field, where tabs, stitching, placements, and pocket details can trigger claims. The case becomes a study in how brand preservation and creative freedom now collide at the level of the seemingly trivial."
    ],
  },
];

// ╔══════════════════════════════════════════════════════════════╗
// ║            END OF WEEKLY UPDATE ZONE                        ║
// ║  Do not edit below this line unless changing site structure  ║
// ╚══════════════════════════════════════════════════════════════╝


// ── APPLY CONFIG TO DOM ──────────────────────────────────────────
function applyConfig() {
  document.querySelector('.hero-headline').innerHTML = HERO.headline;
  document.querySelector('.hero-body').textContent = HERO.body;
  document.querySelector('#hero .label').textContent = HERO.eyebrow;

  const heroWrap = document.querySelector('.hero-image-wrap');
  heroWrap.setAttribute('data-article-id', HERO.heroArticleId);
  heroWrap.onclick = () => openArticle(HERO.heroArticleId);
  heroWrap.querySelector('img').src = HERO.heroImage;
  heroWrap.querySelector('img').alt = articles.find(a => a.id === HERO.heroArticleId)?.title || 'Lead article';
  heroWrap.querySelector('.hero-image-badge').textContent = HERO.heroBadge;

  const featuredArticle = articles.find(a => a.id === FEATURED.featuredId);
  if (featuredArticle) {
    const fc = document.querySelector('.featured-card');
    fc.onclick = () => openArticle(FEATURED.featuredId);
    fc.querySelector('.featured-image-wrap img').src = featuredArticle.image;
    fc.querySelector('.featured-image-wrap img').alt = featuredArticle.title;
    fc.querySelector('.featured-cat-badge').textContent = featuredArticle.category;
    fc.querySelector('.featured-meta').innerHTML = `<span class="label">${featuredArticle.issue}</span><span class="label">${featuredArticle.readTime}</span>`;
    fc.querySelector('.featured-title').textContent = featuredArticle.title;
    fc.querySelector('.featured-subtitle').textContent = featuredArticle.subtitle;
    fc.querySelector('#featured-excerpt-text').textContent = featuredArticle.excerpt;
    fc.querySelector('.read-btn').onclick = (e) => { e.stopPropagation(); openArticle(FEATURED.featuredId); };
    fc.querySelector('.editor-note-text').textContent = FEATURED.editorNote;
  }
  document.querySelector('.section-desc').textContent = FEATURED.sectionDesc;

  document.querySelector('.footer-tagline').textContent = SITE_CONFIG.footerTagline;
  document.querySelector('.footer-desc').textContent = SITE_CONFIG.footerDesc;
  document.querySelector('footer a.footer-icon-btn').href = SITE_CONFIG.instagramUrl;
}


// ── RENDER ARTICLE CARDS ─────────────────────────────────────────
function renderCards(list) {
  const grid = document.getElementById('articles-grid');
  if (!list.length) {
    grid.innerHTML = '<p class="no-results">No articles found.</p>';
    return;
  }
  grid.innerHTML = list.map(a => `
    <article class="article-card" onclick="openArticle('${a.id}')">
      <div class="card-img-wrap">
        <img src="${a.image}" alt="${a.title}" loading="lazy" />
        <div class="card-img-overlay"></div>
        <span class="card-cat-badge">${a.category}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${a.issue}</span>
          <span>${a.readTime}</span>
        </div>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-subtitle">${a.subtitle}</p>
        <div class="card-excerpt">${a.excerpt}</div>
        <span class="card-read-btn">
          Open Article
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </article>
  `).join('');
}


// ── SEARCH ───────────────────────────────────────────────────────
function filterArticles(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderCards(articles); return; }
  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.subtitle.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.issue.toLowerCase().includes(q)
  );
  renderCards(filtered);
}

function focusSearch() {
  document.getElementById('journal').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('search-input').focus(), 600);
}


// ── OPEN / CLOSE ARTICLE ─────────────────────────────────────────
function openArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  document.getElementById('a-category').textContent = article.category;
  document.getElementById('a-issue').textContent = article.issue;
  document.getElementById('a-readtime').textContent = article.readTime;
  document.getElementById('a-title').textContent = article.title;
  document.getElementById('a-subtitle').textContent = article.subtitle;
  document.getElementById('a-excerpt').textContent = article.excerpt;
  document.getElementById('a-image').src = article.image;
  document.getElementById('a-image').alt = article.title;
  document.getElementById('d-category').textContent = article.category;
  document.getElementById('d-issue').textContent = article.issue;
  document.getElementById('d-readtime').textContent = article.readTime;

  document.querySelector('.article-quote-block blockquote').textContent = article.quote || '';

  const bodyBlock = document.querySelector('.article-body-block');
  bodyBlock.querySelectorAll('p').forEach(p => p.remove());
  (article.body || []).forEach(para => {
    const p = document.createElement('p');
    p.textContent = para;
    bodyBlock.appendChild(p);
  });

  const related = articles.filter(a => a.id !== id).slice(0, 3);
  document.getElementById('related-items').innerHTML = related.map(r => `
    <div class="related-item" onclick="openArticle('${r.id}')">
      <div class="related-cat">${r.category}</div>
      <div class="related-title">${r.title}</div>
    </div>
  `).join('');

  document.getElementById('homepage').style.display = 'none';
  document.getElementById('article-page').classList.add('visible');
  window.scrollTo(0, 0);
  history.pushState({ articleId: id }, '', '#' + id);
}

function closeArticle() {
  document.getElementById('article-page').classList.remove('visible');
  document.getElementById('homepage').style.display = 'block';
  window.scrollTo(0, 0);
  history.pushState({}, '', window.location.pathname);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.articleId) {
    openArticle(e.state.articleId);
  } else {
    closeArticle();
  }
});


// ── INIT ─────────────────────────────────────────────────────────
applyConfig();
renderCards(articles);

