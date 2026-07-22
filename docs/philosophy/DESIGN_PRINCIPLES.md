# Elephantology Design Principles

**Version:** 1.0  
**Status:** Foundational Document  
**Last Updated:** 2026-07-23

---

## Core Principles

These principles guide every design decision, from content structure to user interface, from metadata schema to navigation architecture. They are read by humans, AI agents, and future contributors to understand the fundamental philosophy of the platform.

---

## Content Principles

### Every page should answer one question

**Rationale:** Focused content is more discoverable, more maintainable, and more useful. When a page tries to answer multiple questions, it becomes difficult to navigate and update.

**Implementation:**
- Each Knowledge Object has a single primary focus
- Secondary topics are linked to separate objects
- Clear summary states the single question answered

**Example:**
- ✅ "What is the cardiovascular system of elephants?"
- ❌ "What is the cardiovascular system and how does it relate to respiration?"

---

### Every page should be understandable independently

**Rationale:** Users may arrive at any page via search, external links, or direct navigation. Each page must provide sufficient context to be understood without reading prerequisite content first.

**Implementation:**
- Brief context provided at the top of each object
- Key terms defined or linked to glossary
- Prerequisites listed but not required for basic understanding
- Self-contained summaries

**Example:**
- ✅ "The cardiovascular system circulates blood throughout the elephant's body..." (with context)
- ❌ "As discussed in the previous section, the system..." (without context)

---

### No article should exceed the reader's working memory

**Rationale:** Cognitive science shows that humans can hold only 5-7 items in working memory. Long, complex articles overwhelm readers and reduce comprehension.

**Implementation:**
- Articles broken into logical sections
- Each section focuses on one concept
- Use of progressive disclosure
- Recommended maximum: 2,000 words per object
- Complex topics split into multiple linked objects

**Example:**
- ✅ Separate objects for "Heart Anatomy" and "Cardiovascular Physiology"
- ❌ One massive object covering all cardiovascular topics

---

## Structural Principles

### One concept → one canonical page

**Rationale:** Duplicate information creates maintenance burden, confusion, and inconsistency. When information changes, it must be updated in multiple places.

**Implementation:**
- Each concept exists in exactly one location
- All references point to the canonical source
- No content duplication across objects
- Use relationships, not repetition

**Example:**
- ✅ "Musth" exists as one glossary object; all references link to it
- ❌ "Musth" explained separately in behavior, veterinary, and husbandry sections

---

### One term → one definition

**Rationale:** Inconsistent terminology creates confusion and reduces searchability. Users cannot find information if they don't know which term to search for.

**Implementation:**
- Centralized glossary with canonical definitions
- All terms link to glossary
- Aliases redirect to canonical term
- Deprecated terms noted with current equivalent

**Example:**
- ✅ "Mahout" defined once in glossary; all uses link to it
- ❌ "Mahout" defined differently in multiple articles

---

### One source → one citation format

**Rationale:** Inconsistent citations make it difficult to verify sources, assess reliability, and maintain content. Standardization enables automated validation and filtering.

**Implementation:**
- Single citation format across all content
- Evidence level rating for every source
- Consistent metadata (author, year, publisher)
- Automated link validation

**Example:**
- ✅ `[1] Title, Authors, Year, Publisher, ⭐⭐⭐⭐⭐`
- ❌ Mix of APA, MLA, and informal citation styles

---

## Navigation Principles

### Navigation should never require more than three clicks

**Rationale:** Deep navigation hierarchies frustrate users and make content difficult to discover. Three clicks is the maximum before user patience is tested.

**Implementation:**
- Maximum 3-level hierarchy: Domain → Category → Object
- Breadcrumb navigation for path tracking
- Search as primary discovery method
- Related objects for lateral navigation

**Example:**
- ✅ Home → Biology → Anatomy → Cardiovascular (3 clicks)
- ❌ Home → Biology → Systems → Cardiovascular → Heart → Chambers (5 clicks)

---

### Every article should have related objects

**Rationale:** No knowledge exists in isolation. Showing related objects helps users discover connected concepts and understand the broader context.

**Implementation:**
- Automatic relationship-based suggestions
- Manual editorial curation for key connections
- Categorized related objects (prerequisite, advanced, related)
- Visual relationship indicators

**Example:**
- ✅ "Cardiovascular System" shows related: "Respiratory System", "Blood Composition", "Heart Disease"
- ❌ "Cardiovascular System" has no related content

---

## Quality Principles

### Every important statement should have a source

**Rationale:** Without sources, content cannot be verified, assessed for reliability, or distinguished from opinion. Sources enable evidence-based decision-making.

**Implementation:**
- All factual claims require citations
- Source reliability rated (1-5 stars)
- Consensus status indicated
- Uncertainty acknowledged explicitly

**Example:**
- ✅ "Elephant heart rate is 28-35 bpm [Source #1, ⭐⭐⭐⭐⭐]"
- ❌ "Elephant heart rate is 28-35 bpm" (no source)

---

### Never duplicate information

**Rationale:** Duplication creates maintenance burden, inconsistency, and confusion. When information changes, it must be updated in multiple places.

**Implementation:**
- Link to canonical sources instead of repeating
- Use relationships to connect concepts
- Extract common information into shared objects
- Automated duplicate detection

**Example:**
- ✅ Link to "Musth" glossary entry instead of redefining it
- ❌ Define "Musth" separately in multiple articles

---

### Link instead of repeating

**Rationale:** Links create the knowledge graph. Repetition creates isolated content. Links enable discovery and maintainability.

**Implementation:**
- Internal links for all references to platform content
- External links for supplementary information
- Link text describes destination
- Links validated regularly

**Example:**
- ✅ "See [Musth](../glossary/musth.md) for reproductive behavior"
- ❌ "Musth is a reproductive state characterized by..." (full repetition)

---

### Prefer relationships over repetition

**Rationale:** Relationships enable the knowledge graph. Repetition creates isolated content. Relationships support future features like graph visualization and semantic search.

**Implementation:**
- Define relationships in metadata
- Use relationship types (is-a, part-of, causes, treats)
- Bidirectional relationships where applicable
- Relationship-based navigation

**Example:**
- ✅ Metadata: `related_objects: ["ELE-BEH-REPR-MUST-001"]` with relationship type
- ❌ Text description of relationship without structured metadata

---

### Prefer structure over volume

**Rationale:** More content is not better content. Well-structured, focused content is more valuable than large amounts of unstructured information.

**Implementation:**
- Break large topics into focused objects
- Use progressive disclosure
- Prioritize organization over comprehensiveness
- Quality over quantity

**Example:**
- ✅ Three focused objects: "Heart Anatomy", "Cardiac Physiology", "Circulatory Pathways"
- ❌ One massive object: "Complete Cardiovascular System"

---

### Prefer evidence over opinion

**Rationale:** The platform is a scientific knowledge base, not an opinion forum. Evidence-based content enables reliable decision-making.

**Implementation:**
- All claims sourced
- Opinion clearly labeled as such
- Scientific consensus distinguished from controversy
- Uncertainty acknowledged

**Example:**
- ✅ "Studies show X [Source #1], though some research suggests Y [Source #2]"
- ❌ "In my opinion, X is true"

---

### Prefer clarity over completeness

**Rationale:** Complete but incomprehensible content is useless. Clear, focused content that omits edge cases is more valuable than exhaustive but confusing content.

**Implementation:**
- Focus on core concepts first
- Add complexity in separate, linked objects
- Use progressive disclosure
- Prioritize understanding over exhaustive coverage

**Example:**
- ✅ "Cardiovascular system overview" with links to detailed subtopics
- ❌ "Complete cardiovascular system including rare anomalies and historical theories"

---

## Technical Principles

### Everything should be searchable

**Rationale:** If content cannot be found, it does not exist. Search is the primary discovery mechanism for knowledge platforms.

**Implementation:**
- Full-text search
- Metadata search
- Faceted search
- Semantic search
- Search optimization in content creation

**Example:**
- ✅ Rich metadata, keywords, and descriptions for searchability
- ❌ Content without search metadata or keywords

---

### Everything should be reusable

**Rationale:** Reusable components enable scalability, consistency, and maintainability. Hard-coded content creates technical debt.

**Implementation:**
- Metadata-driven architecture
- Template-based content creation
- Component-based design system
- API-first design
- Export capabilities

**Example:**
- ✅ Content templates with metadata fields
- ❌ Hard-coded content structure

---

## User Experience Principles

### Respect the user's attention

**Rationale:** Users have limited attention. Respect it by being concise, focused, and relevant.

**Implementation:**
- Clear headings and structure
- Progressive disclosure
- Relevant content prioritized
- No unnecessary information

**Example:**
- ✅ Focused article with clear structure
- ❌ Meandering article with irrelevant tangents

---

### Assume the user is intelligent but uninformed

**Rationale:** Users are capable of understanding complex concepts if explained clearly. Condescension and oversimplification are inappropriate for a scientific platform.

**Implementation:**
- Respectful tone
- Clear explanations without oversimplification
- Assume scientific literacy
- Provide context without talking down

**Example:**
- ✅ "The cardiovascular system circulates blood..." (clear, respectful)
- ❌ "Blood goes around in circles..." (condescending)

---

### Design for scanning, not just reading

**Rationale:** Users scan content before reading. Design for scanning to improve discoverability and comprehension.

**Implementation:**
- Clear headings
- Bullet points for lists
- Highlighted key information
- Short paragraphs
- Visual hierarchy

**Example:**
- ✅ Well-structured article with headings and bullet points
- ❌ Wall of text without structure

---

## Accessibility Principles

### Content must be accessible to all users

**Rationale:** Knowledge should be available to everyone, regardless of ability. Accessibility is a requirement, not a feature.

**Implementation:**
- WCAG AA compliance
- Semantic HTML
- Alt text for images
- Keyboard navigation
- Screen reader compatibility
- Color contrast compliance

**Example:**
- ✅ Semantic heading structure, alt text, keyboard navigation
- ❌ Unsemantic markup, missing alt text, mouse-only navigation

---

## Performance Principles

### Fast loading is non-negotiable

**Rationale:** Slow loading frustrates users and reduces engagement. Performance is a feature, not an afterthought.

**Implementation:**
- Optimize images and media
- Minimize JavaScript
- Use caching strategies
- Optimize search indexing
- Monitor performance metrics

**Example:**
- ✅ Optimized images, caching, minimal JavaScript
- ❌ Unoptimized media, excessive JavaScript, no caching

---

## Maintenance Principles

### Design for long-term maintainability

**Rationale:** The platform will exist for decades. Design for maintainability to prevent technical debt and ensure sustainability.

**Implementation:**
- Clear documentation
- Consistent patterns
- Automated testing
- Regular audits
- Deprecation process

**Example:**
- ✅ Well-documented architecture, consistent patterns, automated tests
- ❌ Undocumented hacks, inconsistent patterns, no testing

---

## Scalability Principles

### Design for thousands of objects

**Rationale:** The platform will scale. Design for scalability from the beginning to avoid expensive rewrites.

**Implementation:**
- Metadata-driven architecture
- No hard-coded content assumptions
- Efficient search at scale
- Automated relationship management
- Scalable navigation

**Example:**
- ✅ Metadata-driven content, efficient search, automated relationships
- ❌ Hard-coded content, manual relationship management

---

## AI Agent Principles

### Design for machine readability

**Rationale:** AI agents will consume and process this content. Design for machine readability to enable future AI features.

**Implementation:**
- Structured metadata
- Consistent formatting
- Clear ontology
- Relationship definitions
- API access

**Example:**
- ✅ Structured metadata, consistent formatting, clear ontology
- ❌ Unstructured content, inconsistent formatting, no ontology

---

## Conclusion

These principles are not guidelines—they are requirements. Every design decision, from content structure to user interface, must align with these principles.

When in doubt, return to these principles. They are the foundation upon which the entire platform is built.

Violating a principle requires explicit justification and architectural decision logging. Principles may evolve over time, but changes require careful consideration and documentation.
