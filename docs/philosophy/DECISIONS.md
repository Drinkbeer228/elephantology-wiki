# Elephantology Architectural Decisions

**Purpose:** Log of significant architectural decisions with rationale, alternatives, and status.  
**Format:** ADR (Architecture Decision Record)  
**Last Updated:** 2026-07-23

---

## Decision #001: Knowledge Objects Instead of Articles

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** The platform needs to scale to thousands of interconnected content items while maintaining structure and relationships.

**Decision:** Use Knowledge Objects with structured metadata instead of traditional articles.

**Rationale:**
- Articles become difficult to extend and maintain at scale
- Knowledge Objects enable future graph relationships
- Structured metadata supports search, filtering, and API access
- Relationships between objects are as important as the objects themselves
- Enables machine readability for AI agents

**Alternatives Considered:**
1. **Traditional Articles:** Simple but lacks structure, difficult to scale
2. **Database-Driven Content:** More complex, requires backend infrastructure
3. **Hybrid Approach:** Articles with limited metadata - insufficient for knowledge graph

**Consequences:**
- Positive: Enables knowledge graph, API access, advanced search
- Positive: Scalable to thousands of objects
- Negative: Requires more upfront metadata definition
- Negative: Steeper learning curve for contributors

**Related Decisions:** #002, #003

---

## Decision #002: Evidence Level Rating System

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Users need to assess the reliability of information to make evidence-based decisions.

**Decision:** Implement a 5-star evidence level rating system for all sources.

**Rationale:**
- Not all sources are equally reliable
- Users need to quickly assess information quality
- Enables filtering by evidence level
- Supports scientific neutrality by distinguishing consensus from controversy
- Color-coded badges provide visual indicators

**Alternatives Considered:**
1. **No Evidence Rating:** Simple but users cannot assess reliability
2. **Binary Rating (Reliable/Unreliable):** Too simplistic
3. **Textual Descriptions:** Verbose, not scannable
4. **Academic Citation Style:** Familiar but doesn't indicate reliability

**Consequences:**
- Positive: Users can assess information quality quickly
- Positive: Enables evidence-based filtering
- Negative: Requires editorial judgment
- Negative: May be subjective in some cases

**Evidence Levels:**
- ⭐⭐⭐⭐⭐ Peer-reviewed research
- ⭐⭐⭐⭐ Official organizations
- ⭐⭐⭐ Academic books
- ⭐⭐ Professional publications
- ⭐ Web resources

**Related Decisions:** #001, #005

---

## Decision #003: Relationship-Based Knowledge Graph

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Knowledge exists in a network of relationships, not in isolation. Linear navigation is insufficient for complex topics.

**Decision:** Implement a knowledge graph with defined relationship types between objects.

**Rationale:**
- Knowledge is interconnected
- Relationships enable discovery
- Supports non-linear navigation
- Enables graph visualization
- Future-proof for AI features

**Alternatives Considered:**
1. **Linear Navigation Only:** Simple but insufficient for complex knowledge
2. **Manual Cross-References:** Inconsistent, not scalable
3. **Tag-Based System:** Better but lacks semantic relationships
4. **Full RDF/OWL:** Overly complex for current needs

**Consequences:**
- Positive: Enables knowledge graph visualization
- Positive: Supports semantic search
- Positive: Scalable relationship management
- Negative: Requires relationship type definitions
- Negative: More complex metadata

**Relationship Types:**
- is-a (taxonomic)
- part-of (meronymic)
- causes (causal)
- treats (therapeutic)
- prevents (prophylactic)
- requires (prerequisite)
- contradicts (conflict)
- related-to (association)
- prerequisite-for (learning path)

**Related Decisions:** #001, #004

---

## Decision #004: Three-Level Navigation Hierarchy

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Navigation must scale to thousands of objects while remaining usable.

**Decision:** Limit navigation hierarchy to maximum 3 levels: Domain → Category → Object.

**Rationale:**
- Deep hierarchies frustrate users
- Three clicks is maximum before user patience is tested
- Flat navigation with search is more scalable
- Knowledge graph provides alternative navigation

**Alternatives Considered:**
1. **Two Levels Only:** Too restrictive for complex domains
2. **Four or More Levels:** Too deep, poor user experience
3. **Tag-Based Navigation:** Flexible but lacks structure
4. **Search-Only Navigation:** Powerful but lacks context

**Consequences:**
- Positive: Maintains usability at scale
- Positive: Clear mental model for users
- Negative: May require broader categories
- Negative: Some topics may feel "shallow"

**Navigation Structure:**
- Level 1: Domain (8 items)
- Level 2: Category (5-8 items per domain)
- Level 3: Knowledge Objects (unlimited)

**Related Decisions:** #003

---

## Decision #005: Editorial Review Process

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Content quality must be maintained as the platform scales. Open editing would compromise scientific credibility.

**Decision:** Implement editorial review process with status tracking (draft → reviewed → published).

**Rationale:**
- Maintains scientific credibility
- Ensures quality standards
- Enables accountability
- Supports evidence-based content
- Prevents misinformation

**Alternatives Considered:**
1. **Open Editing (Wiki Model):** Scalable but quality varies
2. **No Editorial Process:** Fast but quality uncontrolled
3. **Peer Review Only:** Too slow for practical content
4. **Community Voting:** Susceptible to bias

**Consequences:**
- Positive: Maintains quality and credibility
- Positive: Clear accountability
- Negative: Slower content publication
- Negative: Requires editorial resources
- Negative: May limit contributor growth

**Editorial Status:**
- draft: Initial creation
- reviewed: Internal editorial review
- published: Publicly accessible
- update-needed: Flagged for review
- deprecated: Outdated, marked as such

**Related Decisions:** #002

---

## Decision #006: Centralized Glossary

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Terminology consistency is critical for searchability and comprehension. Duplicate definitions create confusion.

**Decision:** Implement centralized glossary with canonical definitions. All terms link to glossary.

**Rationale:**
- One term, one definition
- Improves searchability
- Ensures consistency
- Enables translation
- Supports AI processing

**Alternatives Considered:**
1. **Inline Definitions:** Convenient but inconsistent
2. **Distributed Glossaries:** Hard to maintain
3. **No Glossary:** Simple but terminology inconsistent
4. **External Glossary:** Not integrated with platform

**Consequences:**
- Positive: Consistent terminology
- Positive: Improved searchability
- Positive: Enables translation
- Negative: Requires upfront glossary creation
- Negative: Additional linking overhead

**Related Decisions:** #001

---

## Decision #007: MkDocs with Material Theme

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Need a static site generator that supports structured content, navigation, and customization.

**Decision:** Use MkDocs with Material for MkDocs theme.

**Rationale:**
- Markdown-based (simple, version-controlled)
- Excellent navigation features
- Highly customizable
- Strong search capabilities
- Active community and documentation
- Supports plugins and extensions

**Alternatives Considered:**
1. **Jekyll:** More complex Ruby dependency
2. **Hugo:** Faster but less mature ecosystem
3. **Docusaurus:** React-based, more complex
4. **Custom Solution:** Too much development effort
5. **WordPress:** Overkill, database-dependent

**Consequences:**
- Positive: Simple, markdown-based workflow
- Positive: Excellent navigation and search
- Positive: Highly customizable
- Negative: Limited to static sites
- Negative: Requires Python dependency
- Negative: Some features require plugins

**Related Decisions:** None

---

## Decision #008: YAML Frontmatter for Metadata

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Need structured metadata for every Knowledge Object to support search, filtering, and relationships.

**Decision:** Use YAML frontmatter in Markdown files for metadata.

**Rationale:**
- Native to Markdown
- Human-readable
- Easy to parse
- Supports complex data structures
- Version-controlled with content

**Alternatives Considered:**
1. **JSON Frontmatter:** Less human-readable
2. **TOML Frontmatter:** Less familiar
3. **Separate Metadata Files:** Harder to maintain
4. **Database-Backed Metadata:** Too complex for current needs
5. **No Structured Metadata:** Insufficient for platform features

**Consequences:**
- Positive: Human-readable and editable
- Positive: Version-controlled with content
- Positive: Supports complex data structures
- Negative: Manual editing required
- Negative: No validation by default

**Related Decisions:** #001, #007

---

## Decision #009: Russian as Primary Language

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Target audience is primarily Russian-speaking professionals in veterinary and zoo contexts.

**Decision:** Russian as primary language with English translations for key terms.

**Rationale:**
- Primary audience is Russian-speaking
- Russian veterinary and zoo communities are significant
- English translations enable international accessibility
- Supports bilingual terminology

**Alternatives Considered:**
1. **English Only:** Excludes Russian-speaking audience
2. **Russian Only:** Limits international accessibility
3. **Full Bilingual:** Doubles content maintenance burden
4. **Multi-Language:** Too complex for current resources

**Consequences:**
- Positive: Serves primary audience effectively
- Positive: English translations enable international access
- Negative: Limited non-Russian content
- Negative: Translation maintenance overhead

**Related Decisions:** None

---

## Decision #010: Premium Academic Design System

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Platform must convey scientific credibility and support long reading sessions.

**Decision:** Implement Premium Academic design system with clean typography, high readability, and evidence-based color palette.

**Rationale:**
- Conveys scientific credibility
- Optimized for long reading sessions
- Reduces eye strain
- Professional appearance
- Distinct from "wiki" aesthetic

**Alternatives Considered:**
1. **Gaming/Thematic Design:** Conveys wrong message
2. **Minimalist Design:** May lack character
3. **Corporate Design:** Too formal
4. **Blog Design:** Too casual

**Consequences:**
- Positive: Professional, credible appearance
- Positive: Optimized for readability
- Positive: Distinct from typical wikis
- Negative: May feel less "modern"
- Negative: Requires careful color contrast testing

**Design Elements:**
- System fonts for readability
- High line-height (1.7)
- Slate color palette
- Teal accents
- Evidence level color coding

**Related Decisions:** None

---

## Decision #011: Unique Immutable IDs

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Need stable identifiers for Knowledge Objects that don't change when content is renamed or restructured.

**Decision:** Implement unique immutable IDs in format: ELE-DOM-CATE-TYPE-NNN

**Rationale:**
- Stable URLs even when titles change
- Enables reliable linking
- Supports API access
- Prevents broken links
- Clear object identification

**Alternatives Considered:**
1. **Title-Based URLs:** Break when titles change
2. **Random UUIDs:** Unreadable, no semantic meaning
3. **Database Auto-Increment:** Not semantic
4. **No IDs:** Unreliable linking

**Consequences:**
- Positive: Stable, reliable linking
- Positive: Semantic, readable IDs
- Positive: Supports API access
- Negative: Manual ID assignment required
- Negative: ID collision risk if not managed

**ID Format:**
- ELE: Platform prefix
- DOM: Domain (3-letter code)
- CATE: Category (4-letter code)
- TYPE: Type (4-letter code)
- NNN: Sequential number

**Example:** ELE-BIO-ANAT-CARD-001

**Related Decisions:** #001

---

## Decision #012: Content Type Taxonomy

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Different types of content require different structures, metadata, and presentation.

**Decision:** Implement content type taxonomy with 8 primary types: article, protocol, case-study, glossary, reference, timeline, faq, organization.

**Rationale:**
- Different content needs different structures
- Enables type-specific features
- Supports filtering and search
- Clear user expectations
- Scalable content model

**Alternatives Considered:**
1. **Single Content Type:** Simple but inflexible
2. **More Granular Types:** Too complex to manage
3. **Tag-Based Typing:** Less structured
4. **No Content Types:** No differentiation

**Consequences:**
- Positive: Type-specific features and templates
- Positive: Clear user expectations
- Positive: Scalable content model
- Negative: Requires type definition and maintenance
- Negative: More complex content creation

**Content Types:**
- article: Standard educational content
- protocol: Step-by-step procedures
- case-study: Real-world examples
- glossary: Term definitions
- reference: Quick reference materials
- timeline: Historical development
- faq: Common questions
- organization: Institutional profiles

**Related Decisions:** #001

---

## Decision #013: Scientific Neutrality Policy

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Platform must maintain scientific credibility and avoid advocacy.

**Decision:** Implement strict scientific neutrality policy. Present facts without advocacy, acknowledge uncertainty, distinguish consensus from controversy.

**Rationale:**
- Maintains scientific credibility
- Avoids bias
- Enables evidence-based decision-making
- Distinguishes platform from advocacy sites
- Supports diverse viewpoints

**Alternatives Considered**
1. **Advocacy Position:** Compromises credibility
2. **No Position on Controversy:** Avoids important topics
3. **Multiple Viewpoints Without Context:** Confusing for users
4. **Editorial Opinion:** Introduces bias

**Consequences:**
- Positive: Maintains scientific credibility
- Positive: Avoids bias
- Positive: Enables evidence-based decisions
- Negative: May seem "wishy-washy" on controversial topics
- Negative: Requires careful editorial judgment

**Policy Elements:**
- Present facts without advocacy
- Acknowledge uncertainty explicitly
- Distinguish consensus from controversy
- Attribute claims to sources
- Present multiple viewpoints when appropriate

**Related Decisions:** #005

---

## Decision #014: Open Access Policy

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Knowledge should be accessible to all who need it, regardless of ability to pay.

**Decision:** All content is free to access with proper attribution. No paywalls, no subscriptions.

**Rationale:**
- Maximizes impact
- Serves global audience
- Supports conservation and veterinary work in resource-limited areas
- Aligns with scientific principles
- Encourages contribution

**Alternatives Considered:**
1. **Paywall:** Generates revenue but limits access
2. **Subscription Model:** Recurring revenue but excludes many users
3. **Freemium:** Complex to implement
4. **Donation-Based:** Unreliable revenue

**Consequences:**
- Positive: Maximum accessibility
- Positive: Global impact
- Positive: Aligns with scientific principles
- Negative: No direct revenue model
- Negative: Requires alternative funding

**Related Decisions:** None

---

## Decision #015: Philosophy Documentation Structure

**Status:** Accepted  
**Date:** 2026-07-23  
**Context:** Architectural and philosophical decisions must be documented for long-term maintainability and future contributors.

**Decision:** Create dedicated `docs/philosophy/` directory for all philosophical and architectural documentation.

**Rationale:**
- Separates philosophy from content
- Provides clear governance documentation
- Enables future contributor onboarding
- Documents architectural decisions
- Maintains project vision over time

**Alternatives Considered:**
1. **Root Level Files:** Clutters repository root
2. **Wiki-Based Documentation:** External dependency
3. **No Philosophy Documentation:** Loss of institutional knowledge
4. **README Only:** Insufficient for complex architecture

**Consequences:**
- Positive: Clear separation of concerns
- Positive: Comprehensive governance documentation
- Positive: Future contributor onboarding
- Negative: Additional documentation maintenance
- Negative: May seem "bureaucratic"

**Philosophy Documents:**
- PROJECT_MANIFESTO.md
- ARCHITECTURE.md
- DESIGN_PRINCIPLES.md
- DECISIONS.md
- CONTENT_MODEL.md (future)
- EDITORIAL_GUIDE.md (future)
- STYLE_GUIDE.md (future)
- TERMINOLOGY.md (future)
- ONTOLOGY.md (future)
- ROADMAP.md (future)

**Related Decisions:** None

---

## Future Decisions

The following decisions are anticipated but not yet finalized:

- **#016:** API Design and Authentication
- **#017:** Mobile Application Strategy
- **#018:** AI-Powered Search Implementation
- **#019:** Multilingual Expansion Strategy
- **#020:** Contribution and Collaboration Platform

---

## Decision Template

For future decisions, use this template:

```markdown
## Decision #XXX: [Decision Title]

**Status:** [Proposed|Accepted|Rejected|Deprecated]  
**Date:** [YYYY-MM-DD]  
**Context:** [Background and problem statement]

**Decision:** [The decision made]

**Rationale:** [Why this decision was made]

**Alternatives Considered:**
1. [Alternative 1]: [Pros/Cons]
2. [Alternative 2]: [Pros/Cons]
3. [Alternative 3]: [Pros/Cons]

**Consequences:**
- Positive: [Positive impacts]
- Negative: [Negative impacts]

**Related Decisions:** [#XXX, #XXX]
```

---

## Decision Review Process

Decisions should be reviewed annually or when:
- New information suggests the decision may be suboptimal
- Technology changes make alternatives more attractive
- Project scale reveals unforeseen consequences
- User feedback indicates problems

To revise a decision:
1. Document the need for revision
2. Propose alternatives
3. Evaluate impact
4. Update decision record with new status
5. Communicate changes to contributors
6. Implement changes if approved

---

## Conclusion

This decision log serves as the historical record of architectural choices for the Elephantology Knowledge Platform. Each decision is made with careful consideration of alternatives, consequences, and long-term impact.

When questions arise about why something is implemented a certain way, this document provides the answer. Future contributors and AI agents can understand the evolution of the platform by reviewing these decisions.

Decisions are not set in stone—they may be revised as the platform evolves. However, changes require careful consideration and documentation to maintain architectural coherence.
