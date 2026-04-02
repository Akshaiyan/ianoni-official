export interface BlogBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "callout";
  content: string | string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  coverImage: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "best-padel-racket-beginners-uk",
    title: "Best Padel Racket for Beginners UK (2026)",
    metaDescription:
      "Looking for the best padel racket for beginners in the UK? We break down exactly what to look for and why the IANONI PR8100 is the top pick for new players in 2026.",
    excerpt:
      "Starting padel can feel overwhelming with so many rackets on the market. We cut through the noise — here's what actually matters for beginners, and the one racket we keep recommending.",
    publishDate: "2026-03-15",
    readTime: "6 min read",
    category: "Buying Guides",
    coverImage: "/blog/beginners-guide-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "Padel is one of the fastest-growing sports in the UK, and for good reason. It's more social than tennis, easier to pick up than squash, and you can start competing with friends after just a handful of sessions. But one question comes up constantly: what's the best padel racket for a beginner?",
      },
      {
        type: "p",
        content:
          "The honest answer is that most beginners don't need an expensive racket. What you need is a forgiving racket — one that helps you get the ball back consistently while you're still learning footwork, positioning, and shot selection.",
      },
      {
        type: "h2",
        content: "What to Look For in a Beginner Padel Racket",
      },
      {
        type: "p",
        content:
          "Before we get to specific picks, here are the four things that actually matter for beginners:",
      },
      {
        type: "ul",
        content: [
          "Round shape — Round-headed rackets have a larger sweet spot lower on the face, which is where most beginners make contact. This reduces mishits significantly compared to diamond or teardrop shapes.",
          "Balanced or low balance point — A head-light or medium-balance racket is much easier to manoeuvre, especially at the net. High-balance rackets generate more power but demand better timing you may not have yet.",
          "EVA or foam core — A softer core absorbs more impact and gives you better feel and control. Harder cores produce more power, but power is useless if you can't place the ball.",
          "Carbon fibre or fibreglass face — Carbon fibre provides better energy transfer and durability. Even entry-level carbon fibre rackets outperform fibreglass equivalents in the long run.",
        ],
      },
      {
        type: "h2",
        content: "Our Top Pick: IANONI PR8100",
      },
      {
        type: "p",
        content:
          "The IANONI PR8100 ticks every box above — and at £39.99, it's one of the best-value padel rackets available in the UK right now. Here's why it consistently comes out on top for beginners:",
      },
      {
        type: "ul",
        content: [
          "3-layer carbon fibre face — Most rackets at this price point use fibreglass. The PR8100's carbon fibre construction gives it better durability and cleaner ball response.",
          "Extended impact zone — The sweet spot is intentionally designed to be more forgiving, which means cleaner shots even when your technique isn't perfect.",
          "Hybrid shape — Sits between round and teardrop, giving you more of the sweet spot area of a round racket while adding a bit more power potential as you progress.",
          "Medium balance — Easy to swing quickly for volleys, but stable enough for baseline shots and smashes.",
          "Anti-slip grip — Comfortable for longer sessions and doesn't require immediate re-gripping.",
        ],
      },
      {
        type: "h2",
        content: "How Does It Compare to More Expensive Rackets?",
      },
      {
        type: "p",
        content:
          "This is the question most beginners ask. The honest answer: the performance difference between a £40 racket and a £120 racket is almost entirely irrelevant for beginners and most intermediate players.",
      },
      {
        type: "p",
        content:
          "Premium rackets from brands like Babolat, Head, and Bullpadel are optimised for experienced players who already have reliable technique. The harder cores and higher balance points they use demand precise timing to get the most out of them — timing that takes months or years to develop.",
      },
      {
        type: "p",
        content:
          "For most new players, a forgiving £40 racket will help you improve faster than a stiff £150 racket that punishes mistimed shots.",
      },
      {
        type: "h2",
        content: "What Players Say About the PR8100",
      },
      {
        type: "ul",
        content: [
          "\"Bought this for my first padel session and couldn't believe how forgiving it is. Already booked my third session this week.\"",
          "\"Been playing 6 months now and still loving it. My coach asked what racket I was using — was surprised when I said under £50.\"",
          "\"The sweet spot is noticeably larger than the branded rackets my friends use. Easy recommendation.\"",
        ],
      },
      {
        type: "h2",
        content: "Starter Kit Option",
      },
      {
        type: "p",
        content:
          "If you're just getting started and want everything in one go, the IANONI PR8100 Starter Kit includes the racket, three premium IANONI balls, and a carry bag — all for £44.99. It's the easiest way to get court-ready without buying everything separately.",
      },
      {
        type: "h2",
        content: "Final Verdict",
      },
      {
        type: "p",
        content:
          "For the vast majority of beginners in the UK, the IANONI PR8100 is the best padel racket you can buy. It's built with carbon fibre at a fibreglass price, has a forgiving sweet spot that suits developing technique, and comes backed by a 1-year warranty and 30-day returns.",
      },
      {
        type: "p",
        content:
          "There's no reason to spend £100+ before you know the game. Start with the PR8100, play regularly for six months, and then consider upgrading once you know exactly what you want from a racket.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-choose-padel-racket",
    title: "How to Choose a Padel Racket: The Complete Buying Guide",
    metaDescription:
      "Not sure how to choose a padel racket? This complete buying guide explains racket shapes, weight, materials, balance, and which type suits your level.",
    excerpt:
      "Shape, weight, balance, core, material — there's a lot to consider when buying a padel racket. This guide cuts through the jargon and tells you exactly what matters at each skill level.",
    publishDate: "2026-03-01",
    readTime: "8 min read",
    category: "Buying Guides",
    coverImage: "/blog/buying-guide-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "Walk into any padel shop or browse online and you'll be faced with dozens of rackets, each making bold claims about power, control, and performance. The specs and jargon can make choosing one feel far more complicated than it needs to be.",
      },
      {
        type: "p",
        content:
          "This guide breaks down every variable that matters — shape, weight, balance, core, and material — and explains what each one means for your game. By the end, you'll know exactly what to look for.",
      },
      {
        type: "h2",
        content: "1. Racket Shape",
      },
      {
        type: "p",
        content:
          "Shape is the most important factor in determining how a racket plays. There are three main shapes:",
      },
      {
        type: "ul",
        content: [
          "Round — The sweet spot sits centrally and low on the face, making it forgiving for mishits. Best for beginners and players who prioritise control. Examples: most beginner and intermediate rackets.",
          "Diamond — The sweet spot is high on the face, generating more power on overhead shots and smashes. Demands precise technique to use effectively. Used by advanced and professional players.",
          "Teardrop / Hybrid — A middle ground. Sits between round and diamond in terms of power and forgiveness. The most versatile shape, suitable for beginner through to intermediate-advanced players.",
        ],
      },
      {
        type: "p",
        content:
          "If you're new to padel or have been playing less than a year, start with a round or hybrid shape. You can always move to a diamond shape once your technique is consistent.",
      },
      {
        type: "h2",
        content: "2. Weight",
      },
      {
        type: "p",
        content:
          "Padel rackets typically weigh between 340g and 385g. Most recreational rackets sit in the 355–370g range. Here's how weight affects play:",
      },
      {
        type: "ul",
        content: [
          "Lighter (340–360g) — Easier to manoeuvre, better for net play and quick volleys, less tiring over long sessions. Good for beginners and players with arm or shoulder issues.",
          "Medium (360–370g) — Balanced handling and power. The most common range for recreational and club players.",
          "Heavier (370–385g) — More momentum behind smashes and groundstrokes, but harder to swing quickly. Generally preferred by advanced players with strong technique.",
        ],
      },
      {
        type: "p",
        content:
          "Don't overthink weight. Most players do best in the 355–370g range. What matters more is how the racket feels in your hand — which is determined more by balance point than raw weight.",
      },
      {
        type: "h2",
        content: "3. Balance Point",
      },
      {
        type: "p",
        content:
          "Balance point refers to where the weight is distributed along the racket:",
      },
      {
        type: "ul",
        content: [
          "Low balance (head-light) — Weight is towards the handle. Easier to swing quickly, better for defensive play and volleys. Typically found in control-oriented rackets.",
          "Medium balance — Weight is evenly distributed. The most versatile option. Good for players who play all areas of the court.",
          "High balance (head-heavy) — Weight is towards the top of the face. Adds punch to overhead shots and smashes but slows down swing speed. Used in power-oriented rackets.",
        ],
      },
      {
        type: "h2",
        content: "4. Core Material",
      },
      {
        type: "p",
        content:
          "The core is the foam inside the racket frame. It's what gives the racket its feel and bounce characteristics:",
      },
      {
        type: "ul",
        content: [
          "EVA foam — Denser, produces a harder feel and crisper ball response. Provides good control and durability. The most common core material in quality rackets.",
          "Foam (softer compounds) — Softer feel, more power on slower swings, but less durable over time. Often found in budget rackets.",
        ],
      },
      {
        type: "p",
        content:
          "EVA foam cores are the standard in mid-range and premium rackets for good reason — they age well and maintain consistent performance through heavy use.",
      },
      {
        type: "h2",
        content: "5. Face Material",
      },
      {
        type: "ul",
        content: [
          "Carbon fibre — Stiff, lightweight, and durable. Transfers energy efficiently from swing to ball. Found in mid-range and premium rackets. Worth paying for even at the entry level.",
          "Fibreglass — More flexible than carbon fibre. Provides a softer feel and some extra power from the flex, but wears faster and offers less precision.",
          "Carbon + fibreglass hybrid — Some entry-level rackets use carbon on the face and fibreglass on the frame for cost reduction.",
        ],
      },
      {
        type: "p",
        content:
          "If your budget allows it, carbon fibre is worth choosing over fibreglass even at entry level. The performance difference is noticeable, particularly in durability and ball feel.",
      },
      {
        type: "h2",
        content: "Which Racket Suits Your Level?",
      },
      {
        type: "ul",
        content: [
          "Beginner — Round or hybrid shape, medium balance, carbon fibre face, EVA core, 355–365g. The IANONI PR8100 fits this perfectly.",
          "Intermediate — Hybrid or teardrop shape, medium-high balance, carbon fibre face, EVA core, 360–370g. The IANONI PR8200 is designed for this transition.",
          "Advanced — Diamond shape, high balance, full carbon construction, 365–380g. Premium brands at £100+.",
        ],
      },
      {
        type: "h2",
        content: "Budget Guidance",
      },
      {
        type: "p",
        content:
          "You don't need to spend more than £50 to get a genuinely high-quality beginner or intermediate padel racket. The IANONI range offers carbon fibre construction from £39.99 — performance that typically costs £80–£120 from established brands.",
      },
      {
        type: "p",
        content:
          "Save the premium budget for when you know the game well enough to notice the difference. For most players, that's after at least a year of regular play.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "carbon-fibre-padel-rackets",
    title: "Carbon Fibre Padel Rackets: Are They Worth It?",
    metaDescription:
      "Carbon fibre padel rackets used to cost £100+. Now you can get genuine carbon fibre performance from £39.99. Here's what carbon fibre actually does and whether it's worth it.",
    excerpt:
      "Carbon fibre has long been the material of choice for serious padel players — but it used to come with a serious price tag. Here's what it actually does, and why it's now accessible to everyone.",
    publishDate: "2026-02-18",
    readTime: "5 min read",
    category: "Equipment",
    coverImage: "/blog/carbon-fibre-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "A few years ago, carbon fibre padel rackets were firmly in premium territory — £100 to £200 or more for branded options from Head, Babolat, or Nox. The assumption was that quality materials came at a premium price, and most beginners or casual players made do with fibreglass.",
      },
      {
        type: "p",
        content:
          "That's changed. You can now get carbon fibre construction in a padel racket for under £50. But does the material actually matter, or is it just a marketing term?",
      },
      {
        type: "h2",
        content: "What Is Carbon Fibre and Why Does It Matter in Padel Rackets?",
      },
      {
        type: "p",
        content:
          "Carbon fibre is a composite material made from thin strands of carbon woven into a fabric and bonded with resin. In padel rackets, it's used for the face (the hitting surface), and sometimes the frame.",
      },
      {
        type: "p",
        content:
          "The properties that make it valuable in racket sports are:",
      },
      {
        type: "ul",
        content: [
          "High stiffness-to-weight ratio — Carbon fibre is significantly stiffer than fibreglass at the same weight, which means more energy is transferred from your swing to the ball rather than being absorbed by the racket face.",
          "Durability — Carbon fibre rackets maintain their performance characteristics longer than fibreglass equivalents, which can soften and deform over time.",
          "Consistent ball response — Because carbon fibre doesn't flex as much, the ball leaves the racket face more predictably. This is what players mean when they talk about a racket having 'good feel'.",
          "Lightweight — Carbon fibre is lighter than fibreglass for the same structural strength, which affects swing speed and manoeuvrability.",
        ],
      },
      {
        type: "h2",
        content: "Carbon Fibre vs Fibreglass: Real Differences on Court",
      },
      {
        type: "p",
        content:
          "If you've only ever used a fibreglass racket, picking up a carbon fibre model for the first time tends to feel noticeably different:",
      },
      {
        type: "ul",
        content: [
          "Crisper contact — The ball pops off the face more cleanly. You'll feel the difference most clearly on volleys and smashes.",
          "More control — Less flex means more predictable shot direction. When you aim cross-court, the ball goes where you intended.",
          "Better feedback — Carbon fibre transmits more vibration to your hand, which experienced players use to gauge shot quality and adjust.",
          "Less 'trampoline' effect — Fibreglass rackets can feel bouncy or unpredictable, especially on off-centre hits. Carbon fibre is more consistent across the face.",
        ],
      },
      {
        type: "h2",
        content: "3-Layer Carbon Fibre: What Does It Mean?",
      },
      {
        type: "p",
        content:
          "The IANONI PR8100 uses a 3-layer carbon fibre face — a construction detail worth understanding. Layering carbon fibre in multiple orientations (a process called laminating) increases the structural integrity of the face and distributes impact forces more evenly across the surface.",
      },
      {
        type: "p",
        content:
          "In practical terms, 3-layer construction means greater durability and a more uniform sweet spot response across a larger hitting area. It's a feature typically found in mid-range rackets (£80–£120), not budget ones.",
      },
      {
        type: "h2",
        content: "Is Carbon Fibre Worth It for Beginners?",
      },
      {
        type: "p",
        content:
          "Yes — and here's why: the durability argument alone makes it worth it. A fibreglass racket used regularly by a beginner (who inevitably mishits more often) will wear out faster and start performing inconsistently within a year. A carbon fibre racket will hold up much longer.",
      },
      {
        type: "p",
        content:
          "The control benefits also help beginners more than many people expect. When a racket is more consistent in its ball response, you get clearer feedback about what you're doing right and wrong — which accelerates learning.",
      },
      {
        type: "h2",
        content: "The Value Shift",
      },
      {
        type: "p",
        content:
          "IANONI rackets offer 3-layer carbon fibre construction from £39.99. A comparable racket from a premium brand with the same construction would typically cost £80–£120. The price gap exists because of brand premiums and retail markups — not material quality.",
      },
      {
        type: "p",
        content:
          "If you're choosing between a fibreglass racket at £35 and a carbon fibre racket at £40, there's no question which is the better investment. The performance gap at that price difference is real and noticeable.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "padel-vs-tennis-differences",
    title: "Padel vs Tennis: Key Differences You Need to Know",
    metaDescription:
      "Padel and tennis look similar but play very differently. Here's a clear breakdown of the court, rules, scoring, equipment, and skill differences between padel and tennis.",
    excerpt:
      "Both sports use a ball and a racket, but padel and tennis are very different games. Here's a clear breakdown of every key difference — from the court to the scoring to the equipment.",
    publishDate: "2026-02-05",
    readTime: "7 min read",
    category: "Padel 101",
    coverImage: "/blog/padel-vs-tennis-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "Padel has exploded in popularity across the UK over the past five years, and most people come to it with a tennis background — or at least a passing familiarity with tennis. The two sports share a lot of visual similarities, but anyone who's played both knows they feel completely different.",
      },
      {
        type: "p",
        content:
          "Here's a full breakdown of the key differences between padel and tennis.",
      },
      {
        type: "h2",
        content: "The Court",
      },
      {
        type: "ul",
        content: [
          "Padel court: 20m × 10m, always played as doubles. Enclosed by glass walls and metal mesh on all sides.",
          "Tennis court: 23.77m × 8.23m (singles) or 10.97m wide (doubles). Open — no walls.",
          "The padel court is about a third of the size of a tennis doubles court. This smaller space is what makes padel inherently social — you're always close to your partner and opponents.",
        ],
      },
      {
        type: "h2",
        content: "The Walls",
      },
      {
        type: "p",
        content:
          "This is the biggest gameplay difference. In padel, the walls are in play. After the ball bounces on the floor, it can hit any wall and remain playable. This creates a completely different tactical dimension — players use the back wall and side walls to extend rallies, set up shots, and execute lob plays that come back off the rear glass.",
      },
      {
        type: "p",
        content:
          "Learning to use and read the walls is the skill that takes most tennis converts the longest to develop. But it's also what makes padel so fun — long rallies are the norm, not the exception.",
      },
      {
        type: "h2",
        content: "The Racket",
      },
      {
        type: "ul",
        content: [
          "Padel racket: Solid, no strings. A perforated carbon fibre or fibreglass face with a foam core. Maximum dimensions 45.5cm × 26cm.",
          "Tennis racket: Strung with a woven string bed. Much larger, longer (up to 73.7cm), and with a different sweet spot dynamic.",
          "Padel rackets have no strings — the solid face produces a different type of ball contact that rewards compact, wrist-controlled strokes rather than the full swing mechanics of tennis.",
        ],
      },
      {
        type: "h2",
        content: "The Ball",
      },
      {
        type: "p",
        content:
          "Padel balls look almost identical to tennis balls but have lower internal pressure (typically 4–4.6 psi vs 12–14 psi in tennis). This makes them slightly slower and gives them a more predictable bounce — important for the wall-play elements of the game.",
      },
      {
        type: "h2",
        content: "Serving",
      },
      {
        type: "ul",
        content: [
          "Padel: Underarm serve only. The ball must be dropped and struck below waist height. Must land in the diagonal service box, and the ball is allowed to hit the back wall after bouncing.",
          "Tennis: Overhead serve from a standing position. No restrictions on serve height (apart from feet and racket). One of the most powerful shots in the game.",
          "The padel serve is deliberately less dominant than in tennis. It starts the point neutrally, which leads to longer, more tactical rallies.",
        ],
      },
      {
        type: "h2",
        content: "Scoring",
      },
      {
        type: "p",
        content:
          "Padel uses the same scoring system as tennis: 15, 30, 40, game. Sets are won at 6 games, with a tiebreak at 6-6. Matches are typically best of three sets.",
      },
      {
        type: "p",
        content:
          "The only notable difference is that padel uses the golden point at deuce in professional play (one point decides the game, alternating between the receiving team choosing which side the serve comes from). This is increasingly common in amateur play too.",
      },
      {
        type: "h2",
        content: "Difficulty and Learning Curve",
      },
      {
        type: "p",
        content:
          "Padel is widely regarded as the easier sport to pick up. The smaller court reduces the physical demands, the underarm serve removes one of tennis's most technically challenging shots, and the walls help keep balls in play — meaning beginners can have competitive rallies from their first session.",
      },
      {
        type: "p",
        content:
          "Tennis players typically adapt quickly to padel. The grip, footwork principles, and tactical thinking transfer well. The main adjustment is learning compact strokes (you can't take full tennis swings in a padel court) and learning to read and use the walls.",
      },
      {
        type: "h2",
        content: "Which Should You Try?",
      },
      {
        type: "p",
        content:
          "If you've never played either, padel is the easier sport to start enjoying quickly. If you already play tennis, padel makes an excellent complement — same fitness demands, different tactics, and a much more social format since it's always doubles.",
      },
      {
        type: "p",
        content:
          "The growth of padel in the UK means courts are now available in most cities. If you haven't tried it yet, it's worth booking a session.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "best-padel-racket-under-50",
    title: "Best Padel Racket Under £50 in the UK (2026)",
    metaDescription:
      "You don't need to spend over £100 to get a great padel racket. Here are the best padel rackets under £50 in the UK for 2026, including our top pick with carbon fibre construction.",
    excerpt:
      "The padel market is full of overpriced equipment. We tested what's actually available under £50 in the UK and picked the one racket that delivers genuine value without compromises.",
    publishDate: "2026-01-22",
    readTime: "5 min read",
    category: "Buying Guides",
    coverImage: "/blog/under-50-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "The padel equipment market in the UK is dominated by premium brands charging £100–£250 for their flagship rackets. These are genuinely good rackets — for advanced players who can take advantage of the differences. For everyone else, they're expensive overkill.",
      },
      {
        type: "p",
        content:
          "The good news is that the sub-£50 market has improved dramatically over the past two years. You can now find rackets with carbon fibre construction, proper EVA foam cores, and solid build quality for under £50. Here's what to look for — and what to avoid.",
      },
      {
        type: "h2",
        content: "What to Watch Out for Under £50",
      },
      {
        type: "ul",
        content: [
          "Fibreglass faces marketed as 'carbon look' — Some budget rackets use fibreglass with a carbon-style graphic. The performance difference is significant. Look for explicit 'carbon fibre' in the spec sheet.",
          "Cheap foam cores — Very budget rackets use low-density foam that compresses over time and loses its bounce characteristics within months. EVA foam cores hold their performance much longer.",
          "No warranty — Any reputable brand selling a padel racket should offer at least a 6-month warranty. A 1-year warranty is standard for quality products.",
          "Vague or missing specs — If a product listing doesn't tell you the weight, shape, material, and balance point, that's usually a red flag.",
        ],
      },
      {
        type: "h2",
        content: "Our Top Pick: IANONI PR8100 (£39.99)",
      },
      {
        type: "p",
        content:
          "The IANONI PR8100 is the standout option under £50 and genuinely one of the best-value padel rackets available in the UK at any price. Here's why:",
      },
      {
        type: "ul",
        content: [
          "3-layer carbon fibre face — Not fibreglass, not a carbon 'coating'. Actual multi-layer carbon fibre construction, the same material used in rackets costing 2–3× the price.",
          "EVA foam core — Long-lasting, consistent performance. You won't be looking for a replacement after 6 months.",
          "360g — In the lightweight range for easy handling, particularly good for net play.",
          "1-year warranty — IANONI back the PR8100 for a full year, which reflects confidence in the build quality.",
          "30-day returns — If it's not right for you, you can send it back.",
          "Free UK shipping — No hidden costs on top of the purchase price.",
        ],
      },
      {
        type: "h2",
        content: "Alternatives to Consider",
      },
      {
        type: "p",
        content:
          "There are other options in the under-£50 space, but most fall into the fibreglass or vague-spec category described above. If you want something slightly different in terms of colour or feel, the IANONI PR8200 (also £39.99) offers a slightly different construction focused on stability and shot consistency. Both are solid options at the same price point.",
      },
      {
        type: "h2",
        content: "Should You Spend More?",
      },
      {
        type: "p",
        content:
          "For beginners and most intermediate players, no. The performance gains from spending £100+ on a padel racket are real, but they're gains you can only take advantage of if your technique is already developed enough to feel the difference.",
      },
      {
        type: "p",
        content:
          "Start with a quality carbon fibre racket under £50, play regularly, and only upgrade when you've outgrown it. That's the sensible approach — and the PR8100 gives you a genuinely high ceiling before you get to that point.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-play-padel-beginners-guide",
    title: "How to Play Padel: Rules, Scoring & Tips for Beginners",
    metaDescription:
      "New to padel? This complete beginner's guide covers the rules, scoring, serving, court layout, and tips to help you get started and improve quickly.",
    excerpt:
      "Padel is easy to pick up but hard to master — the perfect sport. Here's everything you need to know to go from complete beginner to competitive club player.",
    publishDate: "2026-01-08",
    readTime: "9 min read",
    category: "Padel 101",
    coverImage: "/blog/how-to-play-cover.jpg",
    body: [
      {
        type: "p",
        content:
          "Padel is one of the most enjoyable sports you can start as an adult. Unlike tennis, you don't need months of lessons before you can have a proper rally. Unlike squash, the court is bright, open, and social. And unlike almost anything else, the wall-play mechanic turns what would be losing balls into extended, exciting rallies.",
      },
      {
        type: "p",
        content:
          "Here's everything you need to know to start playing — rules, scoring, serving, positioning, and the tips that will help you improve fastest.",
      },
      {
        type: "h2",
        content: "The Court",
      },
      {
        type: "p",
        content:
          "A padel court is 20 metres long and 10 metres wide — roughly a third the size of a tennis doubles court. It's always enclosed: glass walls at the back and sides, metal mesh above. The court is divided in half by a net (88cm at the centre, 92cm at the sides), and each half is divided into a service box by a service line.",
      },
      {
        type: "p",
        content:
          "Padel is always played as doubles — four players, two on each side. There's no singles format in official play, which is a big part of why it's such a social sport.",
      },
      {
        type: "h2",
        content: "Serving",
      },
      {
        type: "p",
        content:
          "The padel serve is underarm — very different from tennis. Here's how it works:",
      },
      {
        type: "ul",
        content: [
          "The server must stand behind the service line (the central line on their side of the court), either in the right or left service box.",
          "The ball must be bounced on the floor first, then struck at or below waist height.",
          "The serve must land in the diagonal service box on the other side of the net.",
          "After bouncing in the service box, the ball is allowed to hit the back wall — this is still a valid serve.",
          "If the serve hits the side wall before or instead of the back wall, it's a fault.",
          "Two faults in a row = double fault = point to the receivers.",
        ],
      },
      {
        type: "h2",
        content: "Scoring",
      },
      {
        type: "p",
        content:
          "Padel uses the same scoring as tennis: 15, 30, 40, game. A game is won when one side reaches 40 and their opponents are behind, or wins a deuce (40-40) situation. Sets are won at 6 games, with a tiebreak at 6-6. Matches are best of 3 sets.",
      },
      {
        type: "p",
        content:
          "One difference from traditional tennis: many padel formats use the 'golden point' at deuce, where a single rally decides the game. The receiving team chooses which side of the court they'd like the serve from.",
      },
      {
        type: "h2",
        content: "How Points Are Won",
      },
      {
        type: "ul",
        content: [
          "The ball bounces twice on your side = you lose the point.",
          "The ball hits the net = you lose the point.",
          "The ball goes out of bounds before bouncing on your side = you lose the point.",
          "You hit the ball into the wall on your own side before it goes over the net = you lose the point.",
          "After bouncing on your side, the ball CAN hit your own walls — and you can still play it.",
          "You can play the ball off the opponent's back or side wall on your side of the net.",
        ],
      },
      {
        type: "h2",
        content: "The Wall Rules (Most Important for Beginners)",
      },
      {
        type: "p",
        content:
          "This is where padel gets interesting. After the ball bounces on the floor on your side, it can hit any wall and remain in play. This means:",
      },
      {
        type: "ul",
        content: [
          "A ball that bounces and then hits the back wall is still playable — you must return it before it bounces a second time.",
          "You can deliberately play balls off the back or side walls as an offensive or defensive tactic.",
          "The lob over the net that lands, hits the back wall, and angles away is one of padel's signature plays — and one of the hardest to deal with.",
        ],
      },
      {
        type: "h2",
        content: "Basic Positioning",
      },
      {
        type: "p",
        content:
          "In padel, the net position is dominant — like doubles tennis. The team at the net controls the point. Most points are won and lost at the net, through volleys and smashes, not from the baseline.",
      },
      {
        type: "p",
        content:
          "As a beginner, your main goal should be getting to the net whenever possible and working with your partner to hold that position. When you're pushed back to the baseline, your job is to defend and look for a lob that gives you time to advance.",
      },
      {
        type: "h2",
        content: "6 Tips That Will Help You Improve Fastest",
      },
      {
        type: "ol",
        content: [
          "Play more, think less. Padel rewards instinct. The more sessions you play, the more your reading of the ball off the walls improves automatically.",
          "Use the lob early. A high lob over your opponents when you're under pressure is one of the most effective shots in beginner padel — and many new players underuse it.",
          "Stay low at the net. Bend your knees, keep your racket up, and be ready to volley at face height or below.",
          "Communicate with your partner. Call 'mine' or 'yours' for anything in the middle. Most beginner mistakes come from miscommunication, not poor technique.",
          "Don't over-swing. Padel rewards compact strokes. Huge backswings and full-power shots lead to errors in the confined space of the court.",
          "Get the right racket. A forgiving, lightweight carbon fibre racket helps beginners develop consistent technique faster than a stiff power racket.",
        ],
      },
      {
        type: "h2",
        content: "Getting Started",
      },
      {
        type: "p",
        content:
          "Most padel venues offer beginner sessions and racket hire. If you want your own racket, you don't need to spend a lot — a quality carbon fibre beginner racket like the IANONI PR8100 at £39.99 is all you need to get started and stay competitive for your first year or more of regular play.",
      },
      {
        type: "p",
        content:
          "Book a court with three others, focus on keeping the ball in play, and let the enjoyment of the game do the rest. You'll be back for a second session before the first one's over.",
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getBlogPostsByCategory = (category: string) =>
  blogPosts.filter((p) => p.category === category);
