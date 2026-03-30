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
  body: "Handcrafted for visual storytelling, engaging reading, and a deeper exploration of fashion beyond surface-level expression",
  heroArticleId: "fashion-journalism",
  heroImage: "LeadArticleImage.png",
  heroBadge: "Issue 06 · Featured",
};

// ── FEATURED ARTICLE (Lead Story) ────────────────────────────────
// featuredId must match an id in the articles array below.
const FEATURED = {
  featuredId: "fashion-journalism",
  sectionDesc: "An industry built on repetition now confronts a system built on originality fashion thrives by reviving the past, while the law struggles to define who, if anyone, can claim it.",
  editorNote: "What we call new is often only remembered differently and in that recognition, fashion finds its power while the law loses its footing.",
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
    id: "fashion-journalism",
    category: "Culture",
    issue: "Issue 06",
    title: "Does Originality Even Matter Anymore? Nostalgia, Revival Culture, and the Limits of Fashion Law",
    subtitle: "Where digital publishing, identity, and visual culture intersect.",
    excerpt: "Originality in fashion is increasingly less about invention than reinterpretation, as revival culture turns past aesthetics into present currency and exposes the gap between legal definitions of originality and the industry’s recursive creative reality.",
    image: "Issue06Image.png",
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
    id: "founders-note",
    category: "Culture",
    issue: "Issue 05",
    title: "The Rise of Conservative Aesthetics on the Runway",
    subtitle: "A closer look at the perspective shaping Majul Editorial.",
    excerpt: "As luxury fashion turns toward restraint and “respectability,” the runway becomes more than an aesthetic space, it becomes a site of power. This piece examines how the rise of quiet luxury and conservative silhouettes reflects deeper cultural shifts, revealing how fashion not only mirrors social hierarchies but actively reinforces them through ideals of discipline, professionalism, and belonging.",
    image: "Issue05Image.png",
    readTime: "6 min read",
    quote: "Fashion is never apolitical; it encodes and enforces norms about whose bodies and identities belong",
    body: [
      "Luxury fashion has in recent seasons turned in the direction of restraint. Miu Miu, Prada, The Row, and Bottega Veneta are redefining glamour with longer hemlines, sleek contours, and muted colors. What started as a fashion change, such as quiet luxury, office-core and old money dressing, has become a cultural choice. This is evidenced by the fact that luxury has remained silent not due to fashion being devoid of creativity but because society was tired of being noisy (Stiegman, 2024). Beneath the surface of minimalism lies a deeper longing for structure, discipline, and the familiar order of respectability.",
  
     "Fashion’s current embrace of conservatism can be read as both rebellion and regression. On the one hand, it rejects the quick, ostentatious, and algorithmic in order to oppose the attention economy. Conversely, it resurrects gender- and class-based structures. The old money look, which was made popular by social media in 2023, subtly rebrands inherited wealth as classic style, aestheticizing status. It signals a nostalgic return to pre-digital elegance, where fashion once more becomes a language of exclusion (Chen, 2025), and reflects a broader reaffirmation of conservative standards across workplaces, institutions, and everyday life.",
  
     "Runways that used to be full of Y2K glitter and influencer extravagance now offer a muted palette and tailoring. Miu Miu pleated skirts bring to mind mid-century office style, while the grey wools and leather gloves of Prada suggest discipline and restraint. Quiet luxury emphasizes craftsmanship over logos, creating exclusivity through invisibility. In this context, restraint itself becomes a form of status.",
  
     "Although often interpreted as harmless chic, the resurgence of respectable dressing carries deeper implications. Angela McRobbie (2013) reminds us that fashion is never apolitical; it encodes and enforces norms about whose bodies and identities belong. By restoring the codes of conventional professionalism—modesty, homogeneity, and gender distinction—fashion actively establishes new standards of conformity.",
  
     "II. The Politics of Respectability, Law, and Dress Codes",
  
     "The conservative aesthetic on the runway parallels the return of respectability within workplace regulation and legal frameworks. Corporate dress codes have long functioned as tools of discipline, shaping how individuals present their culture, gender, and class. While fashion industries romanticize professional attire, many employees continue to experience its restrictive consequences.",
  
     "The current conservatism of fashion may be interpreted as both subversion and retrogression. It resists the attention economy while simultaneously reinforcing class and gender hierarchies. The aesthetic of old money popularized by social media aestheticizes privilege by presenting inherited wealth as understated elegance rather than outdated excess (Chen, 2025).",
  
     "Workplace clothing regulations frequently intersect with gender and race discrimination, particularly affecting women and gender-diverse individuals. Legal scholarship and cases such as EEOC v. Catastrophe Management Solutions (2016) illustrate how professionalism can operate as a tool of racialized control. The ideal of the neutral professional body—white, cisgender, and upper-class—is subtly reinforced by the quiet luxury aesthetic rooted in Eurocentric minimalism.",
  
      "From a legal perspective, clothing exists in a grey area between expression and regulation. While laws such as Title VII of the U.S. Civil Rights Act and the Canadian Human Rights Act prohibit discrimination, they do not clearly address how these protections apply to dress. Legal tensions continue to surface, particularly in disputes over gendered uniforms, as seen in policy changes like British Airways allowing non-binary presentations in 2023.",
  
     "The legal reality reveals a contradiction: what is celebrated as elegance on the runway often translates into restriction within the workplace. Luxury fashion’s portrayal of refined discipline echoes systems that continue to regulate bodies under the guise of professionalism.",
  
     "III. Conservatism's Commodification",
  
      "Beyond labor and legal frameworks, the commodification of conservative fashion raises questions of intellectual property and cultural ownership. The line between cultural appreciation and appropriation becomes blurred when classic silhouettes—pencil skirts, blazers, and modest cuts—are rebranded as luxury goods.",
  
     "Designers from modest fashion communities have observed that Western brands frequently reinterpret modesty as minimalism, stripping it of its cultural and religious origins. As Hafsa Lodi (2023) noted, features labeled as quiet luxury by major fashion houses may already exist as traditional expressions within other cultural contexts. This disparity highlights how intellectual property systems privilege Western creators while overlooking cultural innovators.",
  
     "Fashion law, primarily governed by copyright, trademarks, and trade dress, tends to protect brand identity rather than silhouettes or concepts. As a result, traditional aesthetics rooted in historical, religious, or working-class traditions can be commercialized without recognition or compensation. This creates a paradox in which conservatism, once associated with constraint, becomes a site of luxury innovation.",
  
     "This dynamic reveals that quiet luxury is not only an aesthetic but also a legal and cultural construct shaped by power. The ability to define and profit from restraint is closely tied to ownership and exclusionary systems (Chen, 2025).",
  
     "IV. Creating Identity and Legality",
  
     "The return of conservative aesthetics prompts a broader reflection on how fashion shapes societal norms and legal consciousness. By embracing long skirts, subdued palettes, and disciplined silhouettes, luxury fashion engages in cultural signaling that extends beyond style. It reflects a society negotiating tensions between visibility, identity, and control.",
  
     "At a time when diversity and self-expression remain contested, the promotion of restraint reinforces values of self-discipline and tradition. The resurgence of conservatism in fashion mirrors parallel shifts within legal and social structures, where respectability continues to shape perceptions of legitimacy and belonging.",
  
     "However, this shift also opens space for reinterpretation. Designers such as Grace Wales Bonner and Peter Do combine structure with subversion, redefining conservatism through inclusion. Their work demonstrates that structure can function as empowerment rather than restriction.",
  
     "The challenge for fashion law is to move beyond treating clothing solely as commercial property and to recognize it as a medium of personal and collective expression. Fashion operates at the intersection of visibility, identity, and self-worth—domains that legal systems both reflect and regulate."
  ],
  },
  {
    id: "runway-context",
    category: "trend analysis",
    issue: "Issue 04",
    title: "The Rise of Counterfeit Culture: Fashion Law’s Ongoing Battle Against Knockoffs",
    subtitle: "Fashion examined through culture, timing, and social response.",
    excerpt: "As counterfeit fashion floods digital marketplaces, the law struggles to keep pace with an industry built on speed, imitation, and global circulation. This piece explores how fashion law operates at the intersection of creativity and control, revealing the limits of intellectual property in protecting design, the growing responsibility of online platforms, and the ethical stakes behind what we wear.",
    image: "Issue04Image.png",
    readTime: "5 min read",
    quote: "Clothes occupy a grey area between speech and conduct, regulated enough to control, expressive enough to contest",
    body: [
     "The fashion business, centered on exclusivity, originality, and image, has long been a prime target for counterfeiting. From fake Louis Vuitton handbags sold on sidewalks to near-identical replicas of high-end sneakers flooding online marketplaces, counterfeit goods have evolved into a multi-billion-dollar global enterprise. A 2019 OECD survey states that over 60% of all counterfeit products seized worldwide are fashion items. How legal systems can keep up with the speed and scope of copycat culture in the internet age presents a unique challenge for fashion law.",
  
      "The interdisciplinary field of fashion law, which spans intellectual property, consumer protection, contract law, and international trade, has made progress in addressing counterfeit goods, yet enforcement remains difficult. Trademark law continues to be the most widely used legal tool for protecting brands, but it is often insufficient. The protection of designs, particularly clothing and accessories, is notoriously difficult, especially in jurisdictions with limited or slow-moving design patent or copyright systems.",
  
     "The online marketplace has become a central battleground. Platforms such as Instagram, Alibaba, and Amazon serve as major hubs for counterfeit goods. Although these companies attempt to monitor listings and remove infringing products, enforcement becomes a legal whack-a-mole due to the sheer volume of uploads and the adaptability of counterfeiters. Legislative efforts such as the 2020 U.S. SHOP SAFE Act aim to hold platforms more accountable through proactive screening and seller verification, though critics argue this could burden smaller sellers and legitimate resellers.",
  
     "The speed of fashion cycles further complicates enforcement. By the time a designer identifies a knockoff and initiates legal action, the trend may have already passed, leaving limited remedies and potential reputational harm. This disproportionately affects emerging designers, who often lack the financial and legal resources to protect their work, while larger fashion houses maintain a significant advantage through in-house legal teams.",
      
     "Not all imitation is illegal. Fashion thrives on reference and reinvention, blurring the line between inspiration and infringement. Brands such as Zara and Fashion Nova often operate within legal boundaries when producing affordable versions of high-end designs. Unless a trademark or registered design is clearly copied, the law frequently does not favor original creators. This ambiguity has led to calls for stronger design protections, particularly in countries like the United States, where unregistered fashion designs lack comprehensive legal coverage.",
  
     "In response, brands are turning toward technological solutions. Smart tags, blockchain-based supply chains, and digital authentication systems are being used to track products and verify authenticity. Consumer education campaigns are also playing a role, highlighting the ethical and legal consequences of purchasing counterfeit goods and aiming to reduce demand.",
  
      "The fight against counterfeiting extends beyond brand protection. It encompasses design integrity, consumer trust, and broader concerns such as labor rights and environmental impact. The unchecked production of counterfeit goods is often associated with exploitative labor practices and environmental harm, placing fashion law at the intersection of ethics, commerce, and creativity.",
  
     "As the fashion industry continues to evolve within a global, digital-first economy, the need for proactive, adaptable, and internationally coordinated legal frameworks becomes increasingly urgent. To preserve both the integrity of the industry and its creative output, fashion law must evolve alongside it."
  ],
  },
  {
    id: "creative-direction",
    category: "Ethical",
    issue: "Issue 03",
    title: "What a Devil Wears Now: Fashion Law, Power, and Ethics in a Sequel Era",
    subtitle: "The new visual language of editorial storytelling online.",
    excerpt: "Released in 2006, The Devil Wears Prada depicted the fashion industry as a glamorous yet unforgiving environment defined by strict, image-focused authority. Nearly twenty years later, legal, social, and technological shifts have transformed the landscape.",
    image: "Issue03Image.png",
    readTime: "3 min read",
    quote: "A contemporary \"Devil\" must navigate these evolving legal and ethical demands alongside traditional notions of glamour.",
    body: [
     "Released in 2006, The Devil Wears Prada depicted the fashion industry as a glamorous yet unforgiving environment defined by strict, image-focused authority. Nearly twenty years later, legal, social, and technological shifts have transformed the landscape. The new sequel revisits the high-fashion world, now pressured by modern concerns such as labor law, intellectual property, digital ethics, sustainability, and AI regulation. A contemporary “Devil” must navigate these evolving legal and ethical demands alongside traditional notions of glamour.",
  
     "The once-authoritative figures, like Miranda Priestly, may not align with today's legal and cultural standards. Workplace policies now emphasize respect for workers' rights, equity, and dignity. For example, Canadian law, such as the Pay Equity Act, requires federally regulated employers to ensure that jobs predominantly done by women are compensated equally to those predominantly done by men. Employers are also increasingly required to have harassment and violence-prevention policies, conduct fair investigations into complaints, and provide training and clear resolution procedures. When creating a dress code or “corporate image” requirements, the Ontario Human Rights Commission emphasizes that such policies should not have a discriminatory impact based on gender, gender identity/expression, or other grounds of protection.",
  
      "A fashion-industry “Devil” today has to work under a legal framework where workplace equity, diversity, and respect are highly expected, a reality in sharp contrast with the old-school, because-I-said-so model of fashion leadership. A sequel that acknowledges this shift could explore how power relations, authority, and managerial style have been reformed under the law and social pressure.",
  
     "The safeguarding of creative design is one of the most thorny legal issues in fashion, both historically and today. Traditionally, the utility of clothes and other fashion products has meant that many jurisdictions have denied them the same copyright or design protection granted to other artistic works. Since fashion designs are useful articles, critics note that they typically fall outside the scope of copyright protection under most copyright laws.",
  
      "An example of this is in Canada, where the Copyright Act does not automatically grant protection to all new designs of apparel; copyright mainly safeguards original works, which generally excludes designs whose primary value is utilitarian. Although some protections exist through industrial or design-specific laws, like the Industrial Design Act, this protection applies only when the design is properly registered. This legal gap disadvantages independent or small designers who, due to a lack of resources, may be unable to register their designs or enforce their rights against fast-fashion companies that replicate and mass-produce their work.",
  
     "This structural imbalance raises questions about the conflict between creativity, commercial scale, and legal safeguarding, as well as the vulnerability of small designers. It also challenges whether fashion houses can or should be held accountable under intellectual property law for copying practices that may be ethically questionable but legally permissible.",
  
     "Technological transformation, particularly the emergence of generative AI, has reshaped the meaning of creating and copying fashion since 2006. However, the law has been slow to adapt. AI-generated designs are often trained on massive datasets of pre-existing works, some of which are still protected by copyright, raising questions about originality and ownership.",
  
      "The dilemma is clear: if AI-created fashion is too derivative of prior work, it may violate reproduction rights; if it is modified by humans, it may claim originality. This creates further concerns around ethics and transparency, including who owns the output and who is liable if AI reproduces culturally significant or protected designs from opaque training data.",
      
     "Existing intellectual property regimes were largely developed before the rise of AI and often lack clear provisions for authorship or attribution in this context. A contemporary sequel could explore these tensions through narratives centered on authenticity, ownership, and creative credit in a world where algorithmic design competes with human creativity.",
  
      "Ultimately, a modern reinterpretation of The Devil Wears Prada would not only revisit fashion’s aesthetic world but also engage with the legal and ethical complexities shaping the industry today, where power, creativity, and accountability intersect under evolving frameworks of law and technology."
  ],
  },
  {
    id: "emerging-voices",
    category: "Emotion",
    issue: "Issue 02",
    title: "Fashion as Emotional Diplomacy: How Wardrobes Convey Empathy and Accessibility on the World Stage",
    subtitle: "New perspectives from the people shaping visual culture.",
    excerpt: "What we wear does more than just reflect style, it communicates. This piece explores fashion as emotional diplomacy, where clothing shapes perception, signals empathy, and connects people beyond language. From iconic figures to modern leaders, style becomes a quiet but powerful form of influence.",
    image: "Issue02Image.png",
    readTime: "4 min read",
    quote: "Fashion is no longer only about style but also a psychological tool that can help people feel attached, warm, and approachable.",
    body: [
      "In international relations, words and treaties often dominate discussions of diplomacy. Yet, another subtle form of communication wields equal power: the language of clothing. It is no secret to political figures and first ladies that fashion is no longer only about style but also a psychological tool that can help people feel attached, warm, and approachable, where rhetoric is not always able to accomplish the intended effect.",
  
      "One of the most iconic examples of this is Jacqueline Kennedy. In the remaining parts of the world, following the tragedy of the assassination of President John F. Kennedy, the limelight was on the First Lady. Kennedy wore an Oleg Cassini pillbox hat and corresponding coat during her visit to Paris in 1961 which projected connotations of elegance, charm, and tranquility amidst the tensions of the Cold War and also the personal defeat of the American president (Wright, 2016). Not only did her dresses reflect the fashion of those days, but they also served as a means of emotional attachment, meaning that she was stable, graceful, and approachable to her country.",
  
      "Kennedy was not only able to make a fashion impact on clothing but also on accessories, the most popular being the handbag that would be named after her, the Gucci Jackie bag. Invented in the 1960s and popularized by the easy use of the bag by Kennedy when she appeared in public, it was a symbol of discreet sophistication and initial style (Kim, 2024). Unlike ostentatious designer items, the Gucci Jackie was functional, polished, and timeless, a true reflection of Kennedy’s persona that made power feel accessible and relatable. The bag’s continued popularity demonstrates how a single accessory can carry emotional resonance decades later, signaling style, tact, and human connection without words (Kim, 2024).",
  
     "This legacy of emotional diplomacy has been carried on by Jill Biden decades later, in the form of her clothes. Wearing sets of accessible American designers on state visits and diplomatic missions, she sends the message of inclusivity and relatability and reminds the international audience that American leadership is rooted in accessibility and mutual values (Lakritz, 2022). Indicatively, in the presence of foreign dignitaries, her choice of practical but graceful outfits, which are carefully selected to be comfortable, in harmony with colors, and culturally sensitive, reaffirms an image of openness without the necessity of proclamation.",
  
     "Most remarkably, at the 2022 State of the Union, Jill Biden was wearing an indigo satin gown, designed as a midi-length dress by an American designer, Sally LaPointe, with a sunflower embroidered on the right sleeve (Lakritz, 2022). The national flower of Ukraine, the sunflower, had also become an icon of defiance since the invasion by Russia. With such a minor detail, the First Lady was able to convey her unity and compassion toward the Ukrainian people, transforming her wardrobe into an instrument of emotional diplomacy without uttering a word publicly (Lakritz, 2022).",
  
     "The rationale of such a wardrobe is in the sphere of psychology. Clothing can be an emotional trigger, a cue or a way to form perceptions that words cannot sometimes achieve. Pastel colors, cozy materials, and recognizable silhouettes may present the feeling of coziness and reliability, whereas custom-made silhouettes and plain designs relate to competence and esteem (Hagan, 2025). These decisions are frequently calculated, tactical, and subtle, tailored to a certain degree to appeal logically to other leaders and emotionally to the audience around the world (Hagan, 2025).",
      
     "In addition to personal style, fashion in diplomacy is a non-verbal medium of communication, especially when one is confused or faced with tension. The light color scheme of a First Lady in a delicate negotiation or the carefully chosen outfit of a humanitarian visit can help soften the political lines and make human figures appear closer and relatable, who they otherwise might have been considered as being in a different world. In this respect, fashion is like emotional intelligence, a way of crossing cultural boundaries and creating goodwill without the need to politicize (Ferere, 2025).",
  
     "A larger fact that this kind of diplomacy brings to light is that international relations are not done with the help of treaties or speeches alone. Each visual cue counts, and wardrobes are among the fastest and most ubiquitous means of expression of intent and feeling. Using fashion as a means of expression of emotion, the leaders and their allies may convey the feeling of empathy, solidarity, and respect, affecting the perception of the community and the mood in the environment where diplomatic negotiations should take place.",
  
     "From the diplomacy of Jackie Kennedy in Paris to the approachable grace of Jill Biden in modern global interactions, the development of fashion as emotional diplomacy is that style is not simply stylish but a firm but gentle tool of soft power in the international arena."
  ],
  },
  {
    id: "identity-style",
    category: "Fashion",
    issue: "Issue 01",
    title: "The Jurisprudence of Color Ownership in Fashion, Trademark Law, and the Boundaries of Color Protection.",
    subtitle: "How personal image becomes narrative in modern media.",
    excerpt: "From Hermès orange to Tiffany & Co. blue and Christian Louboutin red soles, color in fashion operates as both identity and power. This piece explores how trademark law attempts to regulate that power, balancing brand ownership with creative freedom, while asking a deeper question: can something as culturally embedded as color ever truly belong to one entity?",
    image: "Issue01Image.png",
    readTime: "7 min read",
    quote: "The law walks a fine line: it allows fashion houses to leverage chromatic exclusivity while resisting the temptation to privatize the spectrum itself",
    body: [
     "Fashion is about the narrative a piece conveys, not just about the fabric or cuts. There is a particular weight to color. Hermès' orange boxes evoke heritage leather goods, Tiffany’s blue signals luxury and jewelry, and the red soles of Louboutin shoes communicate status instantly. The difficult legal question is whether a company can truly claim a color as its own. Courts must balance protecting brand identity with preserving creative freedom (Scafidi 2005; Kawamura 2018).",
  
      "Trademark law provides the primary framework for addressing this issue, focusing on protecting symbols that identify the source of goods. However, color marks reveal tension between safeguarding brand value and ensuring that competition and innovation are not restricted.",
  
      "This article examines how trademark law approaches the ownership of color in fashion. It begins with foundational legal principles, then turns to key court cases shaping modern doctrine, and concludes with broader debates about fairness, cultural ownership, and international differences. Ultimately, trademark law operates as a double-edged system, enabling brand identity while preserving shared cultural expression (Scafidi 2005; Kawamura 2018).",
      
     "II. The Legal Framework of Color Trademarks",
  
     "Trademark law generally allows registration of words, logos, and symbols that identify product origin. Colors, however, require proof of “secondary meaning,” meaning consumers associate a specific color with a single brand. Under the U.S. Lanham Act, a color is not inherently distinctive; companies must demonstrate that consumers uniquely link that hue to their goods (Scafidi 2005; Thomas 2019).",
  
      "Another constraint is the functionality doctrine. If granting exclusive rights to a color would disadvantage competitors, the color cannot be trademarked. For example, allowing a single manufacturer to monopolize black for outboard motors would be unfair, as black serves practical and aesthetic functions beyond branding (Scafidi 2005).",
  
     "III. Case Studies in Fashion Color Ownership",
  
      "A. Qualitex Co. v. Jacobson Products Co.",
  
     "In Qualitex (1995), the U.S. Supreme Court confirmed that a single color can be trademarked if it has acquired secondary meaning and is not functional. The case involved a green-gold shade used on dry-cleaning press pads, which consumers had come to associate with the brand. The Court held that color should not be treated differently from other trademark forms.",
  
     "B. Christian Louboutin v. Yves Saint Laurent",
   
     "The Louboutin case tested the limits of color protection in fashion. The brand argued that its red soles were a recognizable trademark. The court ruled in its favor only when the red sole contrasted with the rest of the shoe. Fully red shoes did not qualify. This decision illustrates the balance courts maintain between protecting brand identity and preventing overreach.",
  
     "IV. The Jurisprudential Debate: Can a Color Belong to One Entity?",
  
     "Legal scholars question whether granting ownership of color undermines the shared cultural domain. Protection can prevent consumer confusion and reward brand investment, but excessive protection risks “color depletion,” limiting the availability of basic hues for designers.",
  
     "Color in fashion carries aesthetic, cultural, and emotional meaning beyond source identification. The legal distinction between functional and symbolic use reveals a deeper tension: whether courts should allow private ownership of something embedded in collective cultural expression.",
  
     "V. International Perspectives and Divergence",
  
     "Approaches to color trademarks vary globally. The European Union permits color marks but requires precise graphical representation, often through Pantone codes. Canada also requires distinctiveness but remains cautious where colors may be functional or overly broad. Jurisdictions such as Japan and China increasingly recognize color marks, though enforcement remains inconsistent.",
  
     "These differences complicate global fashion branding. A color protected in one jurisdiction may remain unprotected elsewhere, creating legal uncertainty in international markets.",
  
     "VI. The Limits of Chromatic Protection",
  
     "Legal systems impose limits to prevent monopolization of color. The functionality doctrine ensures practical or widely needed colors remain available. Courts also enforce strict distinctiveness requirements, granting protection only when strong consumer association exists.",
      
     "Other forms of intellectual property, such as design patents and copyright, offer temporary protection for aesthetic features without permanently restricting access. Concerns over color depletion remain central, as excessive privatization could restrict the creative palette available to designers.",
  
     "VII. Conclusion",
  
    "The legal treatment of color in fashion reflects both the flexibility and restraint of trademark law. Courts recognize the commercial and symbolic value of color while maintaining safeguards to preserve competition and cultural accessibility. Trademark law ultimately balances exclusivity and openness, allowing brands to claim identity without privatizing the full spectrum."
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
