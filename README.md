# One-Liner Marathon — make.fun entry

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/0xrifai/makefun-one-liner-marathon-20261125/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/0xrifai/makefun-one-liner-marathon-20261125/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

## The joke

> My car's check-engine light has been on for so long, I've stopped calling it a warning and started calling it a night-light.

A deadpan one-liner (124 characters, one line). The warning light stops being a
warning and gets a promotion: it becomes household lighting. The joke turns on
a single quiet reclassification — no setup, no shock, just a driver who has
made peace with the dashboard.

## How it works

`main.ts` (Node 22+, TypeScript, stdlib only) writes the line to the absolute
path `/output/entry.txt`, then reads it back and throws on any mismatch. It
checks the gate first: 1–280 characters, a single line, not only whitespace.
No trailing newline is written, so the file is exactly the joke.
