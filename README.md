# World News — Thursday 26 November 2026

[![news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Zhoya0077/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Zhoya0077/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A newspaper front page that sums up 26 November 2026's world news in a single
image. Six stories share the front page: the Houthi attack on Saudi Arabia's
Ras Tanura oil refinery, two oil tankers hit by naval mines in the Strait of
Hormuz, Israel's Gaza strike that killed a Hamas security chief and strained
the ceasefire, Ukraine's overnight strikes on two Russian oil refineries and
Putin's vow of retaliation, the US plan to raise tariffs on China, the EU,
Brazil and others, and the fuel-tanker crash fire on Cairo's ring road that
killed at least 30 people. A footer strip adds two more items: Pakistan's
first astronaut joining China's Shenzhou-24 mission to the Tiangong station,
and India marking 18 years since the 26/11 Mumbai attacks.

## How it works

`main.ts` is a small Node 22 program. It copies the pre-rendered front page
(`entry.png`, 1024×1024, under 1 MiB) into `$MAKEFUN_OUTPUT_DIR` (default
`/output`) as `entry.png`, then self-checks that the copy has the same byte
size as the source and prints the number of bytes written. There is no
network access and no randomness, so repeated runs produce byte-identical
output.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Built for the [news-image-20261126 bounty](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) — try make.fun yourself: https://make.fun/?ref=wrbbpgtj
