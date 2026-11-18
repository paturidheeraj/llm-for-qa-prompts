# LLM for QA: Prompts & Examples

Copy-paste prompts, checklists and worked examples for using large language models (ChatGPT, Claude, Gemini, Copilot and others) in software testing, from the **[QA Meets LLM](https://www.youtube.com/@QAMeetsLLM)** YouTube channel.

Every prompt here is built to give **structured, reviewable output**: the model asks questions instead of guessing, and a tester stays in control.

## Episodes

| # | Topic | Video | Material |
|---|-------|-------|----------|
| 1 | Generate test cases from user stories (prompt template + 5 pitfalls) | [Watch](https://youtu.be/cYlsxqzfdUM) | [Prompt](prompts/01-test-cases-from-user-stories.md) · [Review checklist](checklists/ai-test-case-review.md) · [Example cases](examples/password-reset/test-cases.json) |
| 2 | Turn LLM-generated test cases into Playwright tests (prompt + guardrails) | [Watch](https://youtu.be/nDKyU3lTP7E) | [Prompt](prompts/02-test-cases-to-playwright.md) · [Example spec](examples/password-reset/tests/password-reset.spec.ts) |

New episodes are added as they're published. Subscribe on [YouTube](https://www.youtube.com/@QAMeetsLLM) to follow along.

## Repo layout

```
prompts/       Copy-paste prompt templates, one per episode
checklists/    Human review checklists for AI-generated output
examples/      Worked example: a password-reset user story, its generated
               test cases (JSON) and the resulting Playwright tests
```

## How to use a prompt

1. Open the prompt file and copy the block under **Prompt**.
2. Replace every `{placeholder}` with your own details.
3. Paste it into your LLM of choice.
4. Review the output with the matching checklist before you use it.

## Important

- LLM output is a **draft**. Always review generated test cases and code before using them.
- Don't paste confidential requirements, credentials or customer data into tools your company hasn't approved.
- The example app (password reset) is illustrative. The Playwright spec shows the pattern and won't run against a real app until you adapt its URL, locators and data setup.

## Contributing

Found a better prompt variation, or a pitfall we missed? Open an issue or a pull request.

## License

[MIT](LICENSE)
