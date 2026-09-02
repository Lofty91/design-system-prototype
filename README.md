---
title: Generic Design System
description: A public-safe, stripped-back prototype for exploring design system structure in GitHub.
---

# Generic Design System

> **Prototype**
>
> This is a generic design system example for exploring information architecture, documentation models and GitHub-based publishing.
>
> It contains no organisation-specific brand rules, product information, internal links, proprietary design tokens, commercial data or implementation details.

## What this prototype is for

Use this repository to explore how a design system could bring together:

- foundations
- content guidance
- components
- patterns
- playbooks
- contribution guidance

It is deliberately lightweight. Replace the example guidance with validated standards before using it as a production design system.

---

## Contents

1. [About](#1-about)
2. [Foundations](#2-foundations)
3. [Content](#3-content)
4. [Components](#4-components)
5. [Patterns](#5-patterns)
6. [Playbooks](#6-playbooks)
7. [Contribute](#7-contribute)
8. [Documentation models](#8-documentation-models)
9. [Status and evidence](#9-status-and-evidence)
10. [Measurement](#10-measurement)
11. [Suggested repository structure](#11-suggested-repository-structure)

---

# 1. About

## 1.1 Purpose

A design system helps teams create consistent, accessible and high-quality digital experiences without repeatedly solving the same problems.

A useful system should help practitioners answer:

> **What should I use? Why? How do I use it well?**

A design system is more than a component library. It can connect:

- visual design
- interaction design
- content
- accessibility
- implementation
- evidence
- governance

## 1.2 Principles

### Make the right thing easier to do

Reduce uncertainty and make established approaches easy to find and reuse.

### Design the whole experience

Treat content, interaction, visual design, accessibility and implementation as connected parts of the same experience.

### Start with the user need

Explain the problem something solves before describing the interface solution.

### Be consistent, not uniform

Reuse established approaches where they work. Allow context and evidence to justify different solutions.

### Show the reasoning

Make important requirements, recommendations and evidence visible.

### Build accessibility in

Accessibility should be part of the definition of ready, not a final check.

### Build for change

Expect components, patterns and guidance to evolve.

### Improve through use

Use feedback and evidence to improve the system without creating unnecessary duplication.

## 1.3 Audience

A design system may support:

- product designers
- content designers
- engineers
- researchers
- accessibility specialists
- product teams
- other people creating digital experiences

## 1.4 Information architecture

```text
Design System
│
├── About
├── Foundations
├── Content
├── Components
├── Patterns
├── Playbooks
└── Contribute
```

Useful global utilities might include:

```text
Search
Design library
Code library
Changelog
```

## 1.5 How guidance works

Not every statement should have the same level of authority.

| Level | Meaning |
| --- | --- |
| **Required** | A requirement that should be followed unless a documented exception applies |
| **Recommended** | The established approach in most situations |
| **Context-dependent** | Requires professional judgement |
| **Experimental** | Being explored and not yet established |

Guidance can also have a maturity status:

> **Proposed → Experimental → Supported → Deprecated**

Authority and maturity are different. Experimental guidance can still contain required accessibility or technical requirements.

---

# 2. Foundations

Foundations are the underlying visual and structural decisions used to create interfaces.

```text
Foundations
│
├── Colour
├── Typography
├── Spacing
├── Layout and grid
├── Icons
├── Imagery
├── Motion
└── Design tokens
```

## 2.1 Colour

### Overview

Use colour consistently and intentionally. Colour should support hierarchy, meaning and usability rather than decoration alone.

### Principles

- Use semantic names rather than raw colour values wherever possible.
- Maintain sufficient contrast.
- Do not rely on colour alone to communicate meaning.
- Test colours across relevant states and backgrounds.
- Use a limited, purposeful palette.

### Example semantic roles

```text
Surface
Text
Border
Action
Success
Warning
Error
Information
Focus
Disabled
```

Exact colour values should come from the organisation's approved design tokens.

## 2.2 Typography

### Overview

Typography should create clear hierarchy and support comfortable reading across screen sizes.

### Principles

- Use a small, consistent type scale.
- Make heading levels visually and semantically clear.
- Maintain readable line lengths and line heights.
- Avoid using size or weight alone to create meaning.
- Test text at different zoom levels and viewport sizes.

### Document

For each text style, record:

- purpose
- font family
- size
- weight
- line height
- letter spacing
- responsive behaviour
- token name

Do not add values to this prototype until they have been validated.

## 2.3 Spacing

Use a consistent spacing scale rather than selecting arbitrary values for individual screens.

Spacing documentation should explain:

- the base scale
- relationships between elements
- component padding
- section spacing
- responsive behaviour
- exceptions

## 2.4 Layout and grid

Layout guidance should cover:

- maximum content widths
- columns
- gutters
- margins
- breakpoints
- responsive behaviour
- content density
- alignment

Prefer flexible layouts that adapt to content rather than fixed layouts that assume a particular amount of text.

## 2.5 Icons

Icons should support recognition, not make users decode unfamiliar symbols.

### Principles

- Prefer familiar symbols.
- Pair ambiguous icons with text.
- Provide accessible names for interactive icons.
- Keep sizing and stroke treatment consistent.
- Do not use decorative icons as the only way to communicate important information.

## 2.6 Imagery

Use imagery when it adds information, context or emotional value.

Ask:

1. Does the image add useful meaning?
2. Would the experience still make sense without it?
3. Does it need alternative text?
4. Is the image appropriate for the context?
5. Does it work across screen sizes?

## 2.7 Motion

Motion should help users understand change.

Use it to:

- show cause and effect
- communicate state changes
- preserve spatial context
- support orientation

Avoid unnecessary motion and respect reduced-motion preferences.

## 2.8 Design tokens

Design tokens provide reusable names for design decisions.

A simple token hierarchy might be:

```text
Primitive
↓
Semantic
↓
Component
```

Example:

```text
Primitive: colour-yellow-500
Semantic: action-primary
Component: button-primary-background
```

The names above are illustrative only.

---

# 3. Content

Content guidance defines shared language and writing standards.

```text
Content
│
├── Writing principles
├── Voice and style
│   ├── Voice and tone
│   ├── Writing clearly
│   └── Inclusive language
├── Writing conventions
│   ├── Grammar and punctuation
│   ├── Capitalisation
│   ├── Numbers, dates and times
│   └── Links
├── Terminology
├── Accessibility
└── Search and discovery
    ├── Search optimisation
    └── AI discovery
```

## 3.1 Writing principles

Good product content should be:

- clear
- concise
- useful
- specific
- inclusive
- appropriate to the user's situation

Brand-specific voice principles should be documented separately and linked into this section.

## 3.2 Voice and tone

Voice is the consistent character of an organisation's writing.

Tone changes with context.

For example:

| Situation | Useful characteristics |
| --- | --- |
| Routine task | Direct and concise |
| Error | Calm, specific and helpful |
| Important decision | Clear and transparent |
| Success | Positive without becoming distracting |
| Sensitive situation | Respectful and restrained |

Do not rely on tone to compensate for unclear information or a difficult experience.

## 3.3 Writing clearly

### Use active voice

Prefer:

> We’ll send you a confirmation.

Rather than:

> A confirmation will be sent to you.

Passive voice can still be appropriate when the actor is unknown or unimportant.

### Address users directly

Prefer **you** and **your** where appropriate.

### Use specific verbs

Prefer actions such as:

- add
- choose
- save
- edit
- download
- continue

Avoid vague labels such as **manage**, **proceed** or **submit** when a more precise description is available.

### Frontload useful information

Put the information users need to act near the beginning of sentences, headings and labels.

### Remove unnecessary words

Shorter is not always better, but every word should earn its place.

## 3.4 Inclusive language

- Use familiar language.
- Avoid unexplained jargon.
- Avoid idioms where they may create confusion.
- Avoid assumptions about identity, ability, relationships or circumstances.
- Describe people in ways relevant to the context.
- Prefer respectful, current terminology.
- Research terminology with affected users where appropriate.

## 3.5 Grammar and punctuation

Create organisation-specific rules only where consistency matters.

A basic digital-writing baseline could include:

- use sentence case
- keep punctuation simple
- use lists to improve scanning where appropriate
- avoid excessive brackets
- avoid unnecessary exclamation marks
- keep labels concise
- use punctuation consistently within a list

## 3.6 Capitalisation

Use sentence case for most interface text unless a proper noun or approved product name requires capitals.

Prefer:

> Update your details

Rather than:

> Update Your Details

## 3.7 Numbers, dates and times

Choose formats that are easy to understand and difficult to misinterpret.

Document conventions for:

- dates
- times
- currencies
- percentages
- measurements
- ranges
- phone numbers
- large numbers

Validate these conventions for the audiences and markets your organisation serves.

## 3.8 Links

Link text should describe the destination or action.

Prefer:

> Read the accessibility guidance

Avoid:

> Click here

Where possible:

- keep link wording concise
- make links understandable out of context
- avoid exposing long raw URLs in body content
- do not use the same label for links with different destinations

## 3.9 Terminology

Maintain one shared terminology source for words that require consistency.

Each entry could contain:

| Field | Example |
| --- | --- |
| Preferred term | Example term |
| Avoid | Alternative wording |
| Definition | What the term means |
| Usage | Where to use it |
| Rationale | Why this wording is preferred |
| Owner | Responsible team |
| Last reviewed | Date |

## 3.10 Content accessibility

Content accessibility includes:

- meaningful headings
- descriptive links
- clear labels
- understandable instructions
- useful error messages
- meaningful alternative text
- plain language
- logical reading order
- avoiding instructions based only on colour, shape or position

## 3.11 Search and discovery

### Search optimisation

Write primarily for users while making content easy for search systems to understand.

Useful practices include:

- descriptive page titles
- meaningful headings
- clear topic structure
- concise summaries
- descriptive links
- useful metadata
- consistent terminology

### AI discovery

Content that is well structured for people is generally easier for automated systems to interpret too.

Prefer:

- explicit headings
- self-contained explanations
- clear definitions
- consistent terminology
- structured metadata
- maintained source information

Do not distort content purely to optimise for a particular AI system.

## 3.12 Common interface content

Shared guidance should eventually cover recurring elements such as:

- headings
- buttons
- links
- labels
- helper text
- errors
- confirmations
- empty states
- notifications
- form instructions

Component pages should apply this guidance rather than duplicate it.

---

# 4. Components

A component is a reusable interface element with defined content, appearance and behaviour.

## 4.1 Suggested taxonomy

```text
Components
│
├── Actions and controls
│   └── Button
├── Forms and input
│   ├── Text input
│   ├── Checkbox
│   ├── Radio
│   └── Select
├── Navigation
│   ├── Breadcrumb
│   └── Tabs
├── Feedback and status
│   ├── Alert
│   └── Badge
├── Content and display
│   ├── Accordion
│   └── Card
├── Layout
└── Overlays
    └── Dialog
```

The final taxonomy should reflect the actual component library rather than being decided theoretically.

## 4.2 Supported component definition

A supported component should eventually have:

- a defined purpose
- usage guidance
- content guidance
- anatomy
- variants and states
- behaviour
- accessibility guidance
- design specification
- production implementation
- ownership
- maturity status

## 4.3 Button

### Overview

A button triggers an action.

### When to use

Use a button when the user needs to:

- submit information
- save a change
- start a process
- confirm a decision
- perform another immediate action

### When not to use

Do not use a button simply to navigate to ordinary informational content when a link is more appropriate.

### Content

Button labels should:

- describe the action
- use a clear verb
- be concise
- make the expected outcome understandable

Prefer:

> Save changes

Avoid:

> Continue

when the more specific action is known.

### Accessibility

- Use a native button element where possible.
- Make keyboard focus visible.
- Ensure the accessible name matches the visible purpose.
- Do not communicate state through colour alone.
- Ensure touch targets are large enough for comfortable interaction.

## 4.4 Text input

### Overview

A text input lets users enter short free-text information.

### Guidance

- Provide a visible label.
- Explain the required format only when necessary.
- Use helper text for useful guidance, not essential information that disappears.
- Preserve user input after validation errors.
- Use the correct input type and autocomplete attributes where appropriate.

### Errors

Explain:

1. what went wrong
2. how to fix it

Prefer:

> Enter an email address in the format name@example.com

Avoid:

> Invalid input

## 4.5 Checkbox

Use checkboxes when users can select zero, one or multiple independent options.

Do not use a checkbox when users must choose exactly one option from a set.

Labels should describe the state that will apply when selected.

## 4.6 Radio button

Use radio buttons when users must choose one option from a small set of mutually exclusive choices.

Show the available choices together so users can compare them.

## 4.7 Select

Use a select control when users need to choose one value from a set and displaying every option at once would create unnecessary complexity.

For short lists, consider radio buttons instead.

## 4.8 Alert

An alert communicates important status or contextual information.

Possible intents include:

- information
- success
- warning
- error

Do not communicate the alert type through colour alone.

Give the user an action when one is required.

## 4.9 Badge

A badge is a compact label used to communicate status, category or short metadata.

Keep badge text short and make sure its meaning does not depend only on colour.

## 4.10 Accordion

An accordion progressively reveals sections of content.

Use one when:

- users need only some sections
- headings let users predict what each section contains
- collapsing content genuinely improves scanning

Do not use one to hide information users need to make an important decision.

## 4.11 Card

A card groups related content and, where appropriate, actions.

Avoid making every piece of content a card. Use grouping only when it helps users understand relationships or choose between items.

## 4.12 Breadcrumb

Breadcrumbs show a user's position within a hierarchy.

Use them when:

- the information architecture has meaningful parent levels
- users may arrive deep within a site
- moving to a parent level is useful

They should not replace primary navigation.

## 4.13 Tabs

Tabs switch between related sections within the same context.

Use tabs when:

- sections are peers
- switching does not represent progress through a journey
- labels are short and predictable

Do not use tabs for a sequential process.

## 4.14 Dialog

A dialog places a focused task or message above the current interface.

### When to use

Use a dialog for a short, focused interaction that benefits from preserving the user's current context.

### When not to use

Avoid dialogs for:

- long-form content
- complex forms
- multi-step journeys
- information users may need to revisit frequently

### Accessibility

A modal dialog should:

- have an accessible name
- move focus appropriately when opened
- contain keyboard focus while modal
- return focus when closed
- make every action keyboard accessible
- provide a clearly labelled way to dismiss it where dismissal is allowed

Exact visual specifications belong in the validated design library, not this generic prototype.

---

# 5. Patterns

Patterns are proven approaches to recurring user needs involving multiple components, content and behaviours.

A component answers:

> **How does this element work?**

A pattern answers:

> **How should we solve this recurring problem?**

```text
Patterns
│
├── Forms and data entry
├── Validation and errors
├── Comparison and selection
├── Confirmation and completion
├── Authentication and access
├── Notifications and status
├── Progressive disclosure
└── Help and support
```

## 5.1 Forms and data entry

### User need

> I need to provide information without wondering what is required or how to format it.

### Principles

- Ask only for information that is needed.
- Group related fields.
- Use labels that describe the requested information.
- Explain unusual requirements before users make an error.
- Choose controls based on the nature of the choice.
- Preserve entered information when errors occur.

## 5.2 Validation and errors

### User need

> I need to understand what went wrong and how to recover.

### Principles

- Prevent avoidable errors.
- Validate at an appropriate point.
- Identify the affected field.
- Explain the problem in plain language.
- Explain how to fix it.
- Do not blame the user.
- Preserve valid information.

## 5.3 Comparison and selection

### User need

> I need to understand the meaningful differences between my options.

### Principles

- Make choices mutually understandable.
- Lead with differences that affect the decision.
- Use consistent terminology and information order.
- Avoid making one option visually dominant unless there is a legitimate reason.
- Explain important limitations before commitment.

## 5.4 Confirmation and completion

### User need

> I need to know whether the action worked and what happens next.

A completion experience should answer:

1. Was I successful?
2. What has happened?
3. What happens next?
4. Do I need to do anything else?
5. Where can I find this later?

## 5.5 Authentication and access

Help users understand:

- why authentication is needed
- what information is required
- how to recover access
- what happens after verification

Avoid exposing unnecessary security detail in interface content.

## 5.6 Notifications and status

A notification should make clear:

- what happened
- why it matters
- whether action is required
- what the user should do next
- how urgent it is

Choose the channel and persistence based on importance rather than convenience.

## 5.7 Progressive disclosure

Progressive disclosure reveals complexity when users need it.

Use it when secondary information would otherwise compete with the primary task.

Do not hide information required for an informed decision.

## 5.8 Help and support

Help should be available at the point where users are likely to need it.

Prefer:

1. a self-explanatory interface
2. contextual guidance
3. task-based help
4. broader support content

Do not use FAQs as a substitute for fixing unclear journeys.

---

# 6. Playbooks

Playbooks explain how to approach broader design tasks that span multiple components or patterns.

```text
Playbooks
│
├── Writing FAQs
├── Designing help content
├── Designing forms
├── Errors and recovery
├── Notifications
├── Legal and regulated content
├── Search and discovery
└── Testing and improving content
```

## 6.1 Writing FAQs

Before adding an FAQ, ask:

- Is this genuinely a frequent question?
- Why does the user need to ask it?
- Could the main content answer it earlier?
- Does the answer belong closer to the relevant task?
- Is there evidence users use this wording?

### Write useful questions

Questions should reflect real user needs rather than internal topics.

### Write direct answers

Answer the question first. Add supporting detail afterwards.

### Maintain FAQs

Track:

- owner
- source or evidence
- last reviewed date
- related journey
- whether the question is still needed

## 6.2 Designing help content

Start by understanding why help is required.

Useful help may include:

- a short explanation beside a field
- an example
- a definition
- contextual guidance
- a troubleshooting step
- a dedicated support article

Choose the smallest intervention that solves the problem.

## 6.3 Designing forms

1. Define the user and business need.
2. Remove unnecessary questions.
3. Order fields logically.
4. Choose the correct controls.
5. Write labels and supporting content.
6. Design validation and errors.
7. Test keyboard and assistive technology behaviour.
8. Test with realistic content and data.
9. Review what happens after submission.

## 6.4 Errors and recovery

Design the recovery route as carefully as the ideal route.

For significant errors, document:

- trigger
- message
- location
- recovery action
- persistence
- analytics or monitoring
- edge cases

## 6.5 Notifications

Decide:

- whether a notification is necessary
- how urgent it is
- where it should appear
- how long it should persist
- whether an action is required
- whether the user needs a record later

## 6.6 Legal and regulated content

Where specialist or legal review is required:

- involve the relevant specialist early
- identify what users need to understand and when
- separate mandatory meaning from legacy wording where possible
- preserve accuracy when simplifying language
- make material limitations visible before important decisions
- record the source and owner of required wording

This generic playbook is not legal advice.

## 6.7 Search and discovery

For discoverable content:

1. identify the user need
2. understand the language people use
3. choose a clear page purpose
4. structure content around that purpose
5. use descriptive headings
6. use consistent terminology
7. provide accurate metadata
8. measure whether people find and use the content successfully

## 6.8 Testing and improving content

Test content based on the risk and uncertainty involved.

Possible methods include:

- usability testing
- comprehension testing
- preference testing where appropriate
- analytics
- search data
- support data
- experimentation
- accessibility evaluation
- expert review

Record what changed and what evidence informed the decision.

---

# 7. Contribute

A design system should make contribution possible without allowing parallel, conflicting standards to grow unchecked.

```text
Contribute
│
├── How to contribute
├── Suggest a change
├── Propose a component
├── Propose a pattern
├── Review and approval
├── Governance and ownership
├── Status and maturity
└── Changelog
```

## 7.1 Before proposing something new

Ask:

1. Does an existing component, pattern or guideline already solve the problem?
2. Is the need recurring?
3. Is it useful beyond one screen or team?
4. Is there evidence for the problem?
5. Can the existing system be extended instead?

## 7.2 Proposal template

Include:

- problem
- user need
- evidence
- proposed change
- affected components or guidance
- accessibility implications
- implementation implications
- alternatives considered
- owner

## 7.3 Review

The level of review should match the impact of the change.

A small wording correction should not require the same process as a new foundational standard.

Relevant reviewers may include:

- design
- content
- engineering
- accessibility
- research
- subject-matter specialists

## 7.4 Ownership

Every supported item should have an owner responsible for:

- reviewing it
- responding to issues
- coordinating significant changes
- deprecating it when necessary

## 7.5 Changelog

Record meaningful changes so practitioners can understand what changed and whether they need to update existing work.

A changelog entry might include:

```text
Date
Item
Change
Reason
Impact
Migration action
```

---

# 8. Documentation models

Different kinds of system content need different documentation structures.

## 8.1 Component

```text
# Component name

## Overview

## Usage
### When to use
### When not to use

## Content guidance

## Anatomy

## Properties and variants

## Behaviour

## Accessibility

## Implementation

## Related
```

## 8.2 Content guidance

```text
# Guidance topic

## Guidance

## Examples

## Accessibility

## Related guidance
```

## 8.3 Pattern

```text
# Pattern name

## User need

## When to use

## How it works

## Content

## Components

## Accessibility

## Variations

## Examples

## Evidence

## Related
```

## 8.4 Foundation

```text
# Foundation name

## Overview

## Principles

## Usage

## Specification

## Accessibility

## Examples

## Implementation

## Related
```

## 8.5 Playbook

```text
# Playbook name

## Problem

## Before you start

## Approach

## Checklist

## Examples

## Evidence

## Related
```

---

# 9. Status and evidence

## 9.1 Evidence

Where useful, guidance can record the reason behind a decision.

Possible evidence types:

- user research
- quantitative data
- experiment
- accessibility requirement
- legal or regulatory requirement
- established design convention
- technical constraint
- practitioner judgement

## 9.2 Metadata

Useful metadata can include:

| Field | Purpose |
| --- | --- |
| **Owner** | Who maintains it |
| **Status** | Its maturity |
| **Guidance level** | How authoritative it is |
| **Last reviewed** | When it was checked |
| **Evidence** | What supports it |
| **Implementation** | Where the coded version lives |
| **Design** | Where the visual source lives |

The design system can connect these sources without needing to replace all of them.

---

# 10. Measurement

A design system should define what success means before trying to prove its value.

Possible outcomes include:

| Outcome | Example measure |
| --- | --- |
| **Consistency** | Reduction in unnecessary variants |
| **Reuse** | Adoption of supported components and patterns |
| **Efficiency** | Time required to design and build recurring experiences |
| **Quality** | Accessibility or usability issues found |
| **Confidence** | Practitioner feedback |
| **Onboarding** | Time to become productive with the system |
| **Maintenance** | Stale or duplicated guidance |
| **Customer outcomes** | Relevant task success or usability measures |

Avoid claiming that the design system alone caused a commercial or customer outcome when multiple factors contributed.

Establish baselines before widespread adoption where practical.

---

# 11. Suggested repository structure

A single `README.md` is useful for prototyping.

As the system grows, split it into individual Markdown files:

```text
design-system/
│
├── README.md
│
├── about/
│   ├── purpose.md
│   └── principles.md
│
├── foundations/
│   ├── colour.md
│   ├── typography.md
│   ├── spacing.md
│   └── layout.md
│
├── content/
│   ├── writing-principles.md
│   ├── voice-and-tone.md
│   ├── writing-clearly.md
│   └── terminology.md
│
├── components/
│   ├── button.md
│   ├── text-input.md
│   ├── alert.md
│   └── dialog.md
│
├── patterns/
│   ├── forms.md
│   ├── errors.md
│   └── confirmation.md
│
├── playbooks/
│   ├── faqs.md
│   ├── help-content.md
│   └── testing-content.md
│
└── contribute/
    ├── contributing.md
    └── changelog.md
```

This makes the content:

- easier to maintain
- easier to review through pull requests
- easier to version
- easier to reuse in a documentation website later
- less dependent on a single publishing platform

---

# Public prototype checklist

Before publishing a design system repository publicly, check that it contains no:

- confidential organisation information
- internal URLs
- employee or customer information
- credentials or secrets
- private research
- commercial performance data
- unannounced product plans
- proprietary implementation details that should remain private
- licensed assets that cannot be redistributed
- internal legal or regulatory advice
- brand assets without permission
- organisation-specific design tokens or source code unless approved

For this prototype, all organisation-specific material has intentionally been excluded.

---

# Next steps

This prototype is suitable for testing:

1. the overall information architecture
2. Markdown as an authoring format
3. GitHub navigation and version history
4. contribution through pull requests
5. migration to a documentation site later

Before turning it into a real design system, replace generic examples with reviewed, approved and properly owned guidance.
