# Prompt: Generate test cases from a user story

**Episode 1:** [Generate Test Cases from User Stories with an LLM](https://youtu.be/cYlsxqzfdUM)

Turns a user story and its acceptance criteria into structured, reviewable test cases as JSON.

## The 4 inputs a good prompt needs

1. **Role and context:** the product, its users and the platform.
2. **The story and acceptance criteria**, pasted verbatim.
3. **The test design techniques** you expect: boundary values, equivalence partitioning, negative tests.
4. **An output schema** the model must follow.

## Prompt

```text
You are a senior QA engineer testing {product}, used by {users} on {platform}.

User story:
{story}

Acceptance criteria:
{criteria}

Design test cases using boundary value analysis, equivalence partitioning
and negative testing. Only use facts from the story. If something is
ambiguous, list it under "questions" instead of guessing.
At least 40% of the cases must be negative tests.
Every expected result must be observable (a message, status code, URL or stored value).

Return JSON only:
{"cases": [{"id", "title", "technique", "criterion", "preconditions",
            "steps", "expected", "priority"}],
 "questions": []}
```

## Why these lines matter

| Line | Prevents |
|------|----------|
| "Only use facts from the story" + `questions` list | Hallucinated requirements |
| `criterion` field on every case | Lost traceability |
| "At least 40% negative" | Happy-path-only suites |
| "Every expected result must be observable" | Untestable steps like "verify it works" |
| Fixed JSON schema | Free text you can't review or import |

## The 5 pitfalls

1. **Hallucinated requirements**: reject any case without a valid `criterion`.
2. **Duplicates**: ask for one case per technique per criterion, then dedupe on criterion + input.
3. **Missing negatives**: set a minimum share of negative cases.
4. **Untestable steps**: require observable expected results.
5. **No traceability**: keep the acceptance-criterion ID in every case.

Before using the output, run through the [review checklist](../checklists/ai-test-case-review.md).

See a full worked example in [examples/password-reset](../examples/password-reset/).
