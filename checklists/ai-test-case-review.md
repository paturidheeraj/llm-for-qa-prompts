# 2-minute review checklist for AI-generated test cases

Use this before importing any LLM-generated test cases into your test management tool.

- [ ] Every acceptance criterion has at least one **positive** and one **negative** case
- [ ] Boundaries are tested on **both sides** (e.g. 7 and 8, 64 and 65 characters)
- [ ] Every case has a valid `criterion` ID; cases without one are removed
- [ ] No case relies on facts that aren't in the story (no invented rules like "locks after 3 attempts")
- [ ] No duplicates (same criterion + same input written differently)
- [ ] Every expected result is **observable**: a message, status code, URL or stored value
- [ ] Open `questions` are sent back to the product owner

> Often the questions list is the most valuable output of the whole exercise.
