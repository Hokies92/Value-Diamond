# Agile Program Management Guide

## Purpose
This document outlines the agile program management approach for the **Commercial Value Architecture** interactive visualization. It helps contributors understand the application's intent, the roadmap for evolving it, and how to collaborate on the source code.

## Product Vision
Executives and consultants need a shared view of how investors, customers, employees, and market forces shape organizational health. The visualization makes these tensions visible and allows experimentation with balance points to reveal structural misalignments.

## Stakeholders & Roles
- **Product Owner** – Curates product vision, backlog and prioritization
- **Scrum Master** – Facilitates ceremonies and removes impediments
- **Developers** – Implement features, write tests, and update documentation
- **Design/UX** – Ensure the visualization communicates concepts effectively
- **End Users** – Executives, consultants, and organizational development teams

## Release Roadmap
| Release | Goals |
|---------|------|
| MVP 0.1 | Interactive diamond, slider controls, structural integrity score |
| 0.2 | Force‑field animations, preset scenarios, export images |
| 1.0 | Multi‑layer visualization, historical tracking, report export |

## Product Backlog
### Epics
1. **Diamond Visualization Core** – Render diamond and force fields
2. **Insight & Guidance** – Provide contextual explanations and health scoring
3. **Scenario Tools** – Save, load and compare organizational states
4. **Reporting & Export** – Share snapshots and analysis outside the tool

### Sample User Stories
- *As a CEO, I want to move the VALUE slider so that I can see how investor/customer tension affects structural integrity.*
- *As a consultant, I want to reset the diamond to an ideal form so that I can start new analyses quickly.*
- *As a strategist, I want to save a configuration to compare with future states.*

Backlog items should include clear acceptance criteria and reference the relevant code components, such as `interactive-diamond-visualization (1).tsx` for UI changes or utility modules for calculations.

## Sprint Practices
- **Cadence** – Two‑week sprints
- **Ceremonies** – Backlog refinement, sprint planning, daily stand‑ups, review, retrospective
- **Definition of Done** – Code merged, tests passing, and documentation updated
- **Definition of Ready** – User story has value statement, acceptance criteria, and design references

## Development Workflow
1. Clone the repository and install dependencies (`npm install`)
2. Create a feature branch from `main`
3. Implement the user story with tests and documentation
4. Run programmatic checks (`npm test`, `npm run lint`)
5. Submit a pull request for review and merge once approved

## Code & Documentation Map
- **README.md** – High‑level overview and setup
- **commercial-value-architecture-docs.md** – Detailed implementation guide
- **interactive-diamond-visualization (1).tsx** – Main React component for the visualization
- **docs/** – Program management and additional reference material

Maintaining these resources ensures newcomers can quickly understand the project and contribute effectively.

