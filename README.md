# Funniest Autocorrect Fail

[![Bounty](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/putriwindiasty22/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/putriwindiasty22/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/c/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

## The line

> Mom, I can't come home yet — I still have three hours of homewrecker to finish before tomorrow's test.

## Why this line

The slip is instantly clear: the kid meant *homework*, and the phone turned it into *homewrecker*. The wrong word is specific and surprising — homework is the most innocent school word there is, and "homewrecker" flips a dull evening of studying into a confession that the kid has been demolishing marriages for three hours. It reads as a real text a real kid would send, the joke lands on the first read with no explanation, and there is nothing in the line but the fail itself.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the line to `entry.txt` in `process.env.OUTPUT_DIR ?? "/output"` (falling back to `./output` if `/output` is not writable), with no trailing newline. It validates the line first — one line, 1–199 characters, not only whitespace, no leading or trailing whitespace — then reads the file back and verifies an exact match before reporting the character count.

Run it:

```sh
OUTPUT_DIR=./output node main.ts
```

This writes `./output/entry.txt` holding exactly the line above (102 characters, no trailing newline).

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty — enter free bounties and earn rewards: https://make.fun/?ref=j9d1a2d9
