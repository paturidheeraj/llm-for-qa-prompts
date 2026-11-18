# Prompt: Convert test cases into Playwright tests

**Episode 2:** [Turn LLM-Generated Test Cases into Playwright Tests](https://youtu.be/nDKyU3lTP7E)

Converts structured test cases (from [prompt 01](01-test-cases-from-user-stories.md)) into Playwright Test code in TypeScript, with guardrails against flaky, hallucinated automation.

## Prompt

```text
You are a senior SDET writing Playwright Test in TypeScript.
Convert each test case below into one test() inside a describe block.

Rules:
- Use only locators from the PAGE SNAPSHOT: getByRole, getByLabel, getByTestId
- Never use waitForTimeout or fixed sleeps
- Assert with web-first expect(...).toBeVisible() / toHaveText() / toHaveURL()
- Put the case id at the start of each test title
- If a step needs data or a locator you don't have, add a TODO comment
- For time-based rules, use page.clock instead of waiting, and note if the
  rule is enforced on the server (where the browser clock has no effect)

PAGE SNAPSHOT:
{accessibility_snapshot}

TEST CASES (JSON):
{cases}
```

## Grounding: show the model the real page

The page snapshot is what stops invented selectors. Options:

- **Accessibility snapshot:** paste the page's accessibility tree (for example, from Playwright's `page.accessibility` tooling or your browser's dev tools).
- **Codegen draft:** record a rough flow with `npx playwright codegen <url>` and ask the model to clean it up and add assertions.
- **Playwright MCP:** connect an AI agent to the Playwright MCP server so it can explore the live app in a real browser while writing tests.

## Generate, run, review

1. Generate one `describe` block per story, not the whole suite at once.
2. Run it immediately and paste the **real error output** back to the model.
3. Review every assertion yourself: does it prove the expected result?
4. Treat every `TODO` as a blocker. Don't merge tests with unresolved TODOs.

Example output: [password-reset.spec.ts](../examples/password-reset/tests/password-reset.spec.ts)
