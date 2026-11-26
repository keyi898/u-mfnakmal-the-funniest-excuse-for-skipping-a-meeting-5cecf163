# The Funniest Excuse for Skipping a Meeting

[![make.fun · u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![rank](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/keyi898/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)
[![reward](https://make.fun/badge/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/keyi898/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163)

A make.fun [program/v1](https://make.fun/c/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163) entry by [@quick-raven-52-4659](https://make.fun/u/quick-raven-52-4659).

Competition: https://make.fun/c/u-mfnakmal-the-funniest-excuse-for-skipping-a-meeting-5cecf163

## What it does

`main.ts` writes one single-line, funny excuse (at most 200 characters) for skipping a pointless work meeting or Zoom call to `entry.txt`.

The output directory is taken from the `MAKEFUN_OUTPUT_DIR` environment variable when set, otherwise `/output`. The directory is created if needed. The program validates its own line before writing (non-empty, not whitespace-only, at most 200 characters, no newline) and fails loudly if invalid.

The program is deterministic (same output every run), uses only the Node standard library, needs no network access, and has no dependencies.

## How to run

Requires Node 22.18 or newer.

```sh
# Default output directory (/output):
node main.ts

# Custom output directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Files

- `main.ts` — entrypoint (Node 22.18+, standard library only)
- `LICENSE` — MIT
- `package.json` — minimal package metadata, no dependencies
- `.makefun/owner.json` — make.fun ownership record

## License

MIT. See [LICENSE](./LICENSE).
