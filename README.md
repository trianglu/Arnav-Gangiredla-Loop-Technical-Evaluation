# Playwright Asana Test Suite

A data-driven end-to-end test suite built with Playwright and TypeScript that automates task verification on a demo Asana-like application.

## Overview

This project demonstrates data-driven testing by running 6 test cases from a single parameterized test. Each test logs into the demo app, navigates to a project, and verifies that a task appears in the correct column with the correct tags.

## Tech Stack

- **Language:** TypeScript
- **Framework:** Playwright
- **Runtime:** Node.js

## Project Structure

```
playwright-asana/
│
├── tests/
│   ├── fixtures/
│   │   └── testData.json       # All test case data in one place
│   └── asana.spec.ts           # Single parameterized test covering all 6 cases
│
├── package.json
└── playwright.config.ts
```

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/trianglu/Arnav-Gangiredla-Loop-Technical-Evaluation
   cd playwright-asana
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running the Tests

```bash
npx playwright test --reporter=list
```

## Test Cases

All test cases follow the same pattern: login → navigate to project → verify task column → verify tags.

| # | Project | Task | Column | Tags |
|---|---------|------|--------|------|
| 1 | Web Application | Implement user authentication | To Do | Feature, High Priority |
| 2 | Web Application | Fix navigation bug | To Do | Bug |
| 3 | Web Application | Design system updates | In Progress | Design |
| 4 | Mobile Application | Push notification system | To Do | Feature |
| 5 | Mobile Application | Offline mode | In Progress | Feature, High Priority |
| 6 | Mobile Application | App icon design | Done | Design |

## Demo App Credentials

- **URL:** https://animated-gingersnap-8cf7f2.netlify.app/
- **Username:** admin
- **Password:** password123

## Key Design Decisions

- **Data-driven approach:** All test scenarios live in `testData.json`. Adding a new test case requires no code changes — just a new JSON entry.
- **Single test template:** One parameterized `for` loop handles all 6 cases, minimizing code duplication.
- **Flexible selectors:** Login and navigation selectors use fallback strategies to handle varying HTML attributes gracefully.# Arnav-Gangiredla-Loop-Technical-Evaluation
