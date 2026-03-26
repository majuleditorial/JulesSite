// ╔══════════════════════════════════════════════════════════════╗
// ║              WEEKLY UPDATE ZONE — EDIT HERE ONLY            ║
// ║  Everything you need to update each week lives in this block ║
// ╚══════════════════════════════════════════════════════════════╝

// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
const SITE_CONFIG = {
  name: "Majul Editorial",
  tagline: "Fashion Beyond The Runway · Culture · Context · Commentary",
  footerTagline: "Fashion beyond the runway.",
  footerDesc: "Handcrafted for visual storytelling, engaging reading, and a deeper exploration of fashion beyond surface-level expression.",
  instagramUrl: "https://instagram.com",
};

// ── HERO SECTION ─────────────────────────────────────────────────
// heroArticleId must match an id in the articles array below.
const HERO = {
  eyebrow: "New Editorial Platform",
  headline: "A polished digital home for <em>fashion,</em> culture, and commentary.",
  body: "Built for visual storytelling, elegant reading, and scalable magazine publishing. Each story opens into its own article page with a clean preview box and structured layout.",
  heroArticleId: "fashion-journalism",
heroImage: "./../LeadArticleImage.png",
  heroBadge: "Issue 01 · Featured",
};

// ── FEATURED ARTICLE (Lead Story) ────────────────────────────────
// featuredId must match an id in the articles array below.
const FEATURED = {
  featuredId: "fashion-journalism",
  sectionDesc: "A professional homepage flow inspired by modern magazine design: image-forward, spacious, and structured to make discovery feel effortless.",
  editorNote: "This is a placeholder for an editor's note or pull quote. It adds a secondary layer of context and editorial voice to the featured article layout.",
};

// ── ARTICLES ─────────────────────────────────────────────────────
// Add, remove, or edit articles here each week.
//
// Fields:
//   id        — unique slug, no spaces (used in URLs)
//   category  — badge label on the card
//   issue     — e.g. "Issue 01"
//   title     — headline
//   subtitle  — short descriptor shown under the title
//   excerpt   — preview snippet shown on the card and article header
//   image     — full URL to the cover image
//   readTime  — e.g. "4 min read"
//   quote     — pull quote shown large inside the article page
//   body      — array of paragraph strings (the full article text)
const articles = [
  {
    id: "founders-note",
    category: "Editorial",
    issue: "Issue 01",
    title: "Who's That Girl? Meet the Co-Founders.",
    subtitle: "A closer look at the perspective shaping Majul Editorial.",
    excerpt: "Sample text. This space holds a short article preview that introduces the piece, frames the tone, and gives readers a reason to continue into the full page.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
    readTime: "4 min read",
    quote: "Replace this with a pull quote from the article — one strong sentence that earns its own space.",
    body: [
      "Replace this paragraph with the article's opening. Set the scene, establish the voice, and make the reader want to stay.",
      "This second paragraph continues the story. Use it for context, detail, or a shift in perspective.",
      "The third paragraph can deepen the argument or introduce a turn. Keep the tone editorial throughout.",
    ],
  },
  {
    id: "fashion-journalism",
    category: "Culture",
    issue: "Issue 01",
    title: "Does Originality Even Matter Anymore? Nostalgia, Revival Culture, and the Limits of Fashion Law",
    subtitle: "Where digital publishing, identity, and visual culture intersect.",
    excerpt: "Originality in fashion is increasingly less about invention than reinterpretation, as revival culture turns past aesthetics into present currency and exposes the gap between legal definitions of originality and the industry’s recursive creative reality.",
image: "./../LeadArticleImage.png",
    readTime: "6 min read",
    quote: "Everything that is new is actually an ingenious reworking of the already present",
    body: [
  "Plaid is back. Zebra print is back. Capri pants, thinner eyebrows, Y2K mini-bags, and even a Devil Wears Prada re-sequel are back. The 2025 fashion is a rebranded version of the same deja vu, the same cycle of aesthetic referrals and reminiscences. But as the runways, social feeds, and resale markets are dominated by nostalgia, it reveals a bigger legal and philosophical dilemma: what, in the eyes of the law, is considered originality?",
  "The article investigates the ways in which intellectual property principles, copyright, trade dress, and design protection find it difficult to survive in the era where newness is merely recontextualized memory (Hogan, 2024). Fashion is cyclical, but the pace and overload of the revival culture raises a more difficult question than ever: whether creativity can be safeguarded when creativity is founded on reproduction",
  "I. The Legal Problem: Fashion Has a Recycling Habit, the Law Isn’t Built For",
  "Fashion law encourages originality. Copyright involves original expression. Trade dress requires uniqueness. Design patents have novelty and non-obviousness. However, the fashion world lives by imitation. The trends recur every 20 years; silhouettes are reused with slight modifications, and complete collections are created from archives.",
  "In 2022, Fendi reused its ruffles from the 2000s. The 2025 Heaven campaign of Marc Jacobs was a direct pull from the film Thirteen. The Y2K resurgence has made low-rise denim and baby tees, which were viewed as outdated, the new bestsellers (Chokrane, 2025). Designers are not rewarded for creating new visual languages, but for reviving old ones and rebranding them with modern styling.",
  "This does not align with fashion law, which presupposes a sharp distinction between inspiration and imitation. Should a plaid pattern of 1997 be recycled on the runway in 2025, can it be considered original again? In case zebra print comes back after every ten years, who is the one to boast of uniqueness (Sarac, 2025)? Would it be protectable in law when what makes something appealing is that it is recognizable? The answers to the current legal doctrine do not align well with the creative reality of the industry.",
  "II. The Myth of Originality: Why Fashion Is Built on Recombination",
  "We pretend originality is a sacred currency, an individual genius moment, lightning pulled from the void. But that myth collapses under scrutiny. Shakespeare borrowed plots. Picasso borrowed aesthetics. Steve Jobs borrowed Xerox’s interface. TikTok culture is built on remixes of remixes.",
  "Everything that is new is actually an ingenious reworking of the already present.",
  "This is more so when it comes to fashion. Designers do not create out of nothing; they draw upon archives, films, subcultures, world references, and previous decades. Even the most celebrated of the original fashion events, such as bumsters by McQueen, deconstruction by Margiela, and historical couture by Galliano, were all based on recombination (Chawla, 2025).",
  "The industry knows this. Consumers know this. The law only feigns the opposite.",
  "IIII. The Revival Culture: The Surge - Why the 2020s Are More Referential Than Ever.",
  "The 2020s are more referential than ever, shaped by a cultural landscape where Hollywood’s business model depends on constantly recycling IP, and every week brings a reboot, remake, or prequel. Fashion is a direct reflection of this atmosphere, drawing inspiration from movies, catwalks, and celebrity images that collectively form a shared visual memory. Platforms now reward instant recognition; the faster something is read and referenced, the faster it spreads, making nostalgic aesthetics powerful precisely because they are legible at a glance. In an economy where creativity feels risky and nostalgia feels safe, reissued handbags and revived collections succeed because they come with built-in emotional appeal, often overriding the limited legal protections around them. Algorithms further amplify what resembles past successes, revising a default rather than a deviation from it. The result is a fashion environment in which the new is, in truth, what we have simply remembered.",
  "IV. The Law Tension: When It All Becomes a Reference, What?",
  "When a microbrand puts up a Y2K-inspired zebra mini-skirt, does it infringe on a print created in the 1990s? By doing the Baguette the fifth time, will it be a revival or a legal move of trying to revive the individuality (Chawla, 2025)? The legislation assumes linear creative development; fashion is recursive. It loops, mutates, and revives. The same silhouette of 2001 may be new again in 2025, just because culture has changed around it. However, judicial bodies find it difficult to deal with designs whose market value is based on being familiar, even anticipated.",
  "V. Does Originality Even Sell? Probably Not--But Meaning Does.",
  "Cultural exhaustion of nostalgia. Gen Z is making a growing joke that our generation has no aesthetic since there is nothing but a reference. But viewers prefer the already known. It is emotionally safe, economically predictable and algorithmically enhanced. Consumers do not desire originality, but they desire recognition in the form of innovation.",
  "Legally, this crowds out even the very works of which copyright doctrine is supposed to protect: daring, innovative designs. Nonetheless, the word unprecedented hardly became viral.",
  "\"Newness\" in the conventional sense is not necessary for fashion. It requires creativity, the capacity to reassemble, reinterpret, and revitalize in ways that are relevant today. However, the legal system still upholds a definition of originality that is out of step with how artists operate and how culture is consumed.",
  "Whether fashion law can transition from safeguarding originality to safeguarding significant reinterpretation will determine its future, as the objective is to perceive differently rather than to be first in a world based on references.",
  "And genuine creativity resides there."
],
  },
  {
    id: "runway-context",
    category: "Commentary",
    issue: "Issue 01",
    title: "Beyond the Runway: Context Matters",
    subtitle: "Fashion examined through culture, timing, and social response.",
    excerpt: "Sample text. This preview box can later be replaced with a custom excerpt for each article.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    readTime: "5 min read",
    quote: "Replace this with a pull quote from the article — one strong sentence that earns its own space.",
    body: [
      "Replace this paragraph with the article's opening. Set the scene, establish the voice, and make the reader want to stay.",
      "This second paragraph continues the story. Use it for context, detail, or a shift in perspective.",
      "The third paragraph can deepen the argument or introduce a turn. Keep the tone editorial throughout.",
    ],
  },
  {
    id: "creative-direction",
    category: "Fashion",
    issue: "Issue 01",
    title: "Creative Direction in the Digital Age",
    subtitle: "The new visual language of editorial storytelling online.",
    excerpt: "Sample text. Place a brief preview here so readers understand the tone and subject before opening the full article page.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80",
    readTime: "3 min read",
    quote: "Replace this with a pull quote from the article — one strong sentence that earns its own space.",
    body: [
      "Replace this paragraph with the article's opening. Set the scene, establish the voice, and make the reader want to stay.",
      "This second paragraph continues the story. Use it for context, detail, or a shift in perspective.",
      "The third paragraph can deepen the argument or introduce a turn. Keep the tone editorial throughout.",
    ],
  },
  {
    id: "emerging-voices",
    category: "Profiles",
    issue: "Issue 02",
    title: "Emerging Voices, Distinct Points of View",
    subtitle: "New perspectives from the people shaping visual culture.",
    excerpt: "Sample text. This is a placeholder snippet inside a structured text box that can later be swapped for real preview copy.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    readTime: "4 min read",
    quote: "Replace this with a pull quote from the article — one strong sentence that earns its own space.",
    body: [
      "Replace this paragraph with the article's opening. Set the scene, establish the voice, and make the reader want to stay.",
      "This second paragraph continues the story. Use it for context, detail, or a shift in perspective.",
      "The third paragraph can deepen the argument or introduce a turn. Keep the tone editorial throughout.",
    ],
  },
  {
    id: "identity-style",
    category: "Style",
    issue: "Issue 02",
    title: "Style, Identity, and Editorial Presence",
    subtitle: "How personal image becomes narrative in modern media.",
    excerpt: "Sample text. Keep this concise and elegant. It acts as a visual snippet that supports the homepage flow without overcrowding the design.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80",
    readTime: "5 min read",
    quote: "Replace this with a pull quote from the article — one strong sentence that earns its own space.",
    body: [
      "Replace this paragraph with the article's opening. Set the scene, establish the voice, and make the reader want to stay.",
      "This second paragraph continues the story. Use it for context, detail, or a shift in perspective.",
      "The third paragraph can deepen the argument or introduce a turn. Keep the tone editorial throughout.",
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

  bodyBlock.querySelectorAll('p:not(.label), h2').forEach(el => el.remove());

  const subtitlePattern = /^(I|II|III|IIII|IV|V|VI|VII|VIII|IX|X)\.\s/;

  (article.body || []).forEach(item => {
    const el = document.createElement(subtitlePattern.test(item) ? 'h2' : 'p');
    el.textContent = item;
    bodyBlock.appendChild(el);
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
