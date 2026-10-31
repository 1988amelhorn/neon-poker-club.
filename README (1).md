# ♠ Neon Poker Club v2

A colorful, mobile-friendly private Texas Hold'em tournament web app, using **virtual chips only**. No purchases, betting for money, or cash prizes.

## Run locally

1. Install **Node.js 20+**.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm start`.
5. Visit **http://localhost:3000**.
6. Create an account, create a table, and share the invite code with friends. A second account is needed to start a tournament.

Run `npm test` for the poker-engine unit tests.

## Online and mobile

Deploy this Node.js server to a hosting service that supports **persistent Node processes and WebSockets**, with HTTPS enabled. Set `PORT` as required by your host. Set `DATA_FILE` to a path on **persistent storage**, otherwise account and tournament data may be lost when the hosting service redeploys. The same public HTTPS link works on mobile browsers. On Android or iPhone, use the browser's **Add to Home Screen** option for an app-like launcher. This is a PWA-style web app, **not** an Android APK or native iOS app, and not yet an app-store-ready release.

## Features

- Persistent username/password accounts, password hashes using scrypt with random salts.
- Private six-character invite codes and shareable invite links; up to nine players per table.
- Server-authoritative deck shuffling using cryptographic randomness; each player sees only their own hole cards until showdown.
- Hold'em betting rounds, check/call/raise/fold/all-in, flop/turn/river, hand evaluator, ties, main/side pots and odd chips.
- Heads-up blind placement, timed increasing blind levels, tournament winner and chip stacks.
- WebSocket reconnect using an existing login token in the browser, with server-side saved room/hand state.

## Important limits before public release

This is a **working development build, not an audited production poker platform**. The included tests verify selected evaluator and side-pot cases, not every possible betting sequence. More comprehensive integration testing is required before relying on complete rule accuracy. In particular, short all-in betting/reopening edge cases, disconnected-player turn handling, blind schedule customization, and game recovery after interrupted timers need additional work.

Sessions are in memory and require logging in again after a server restart. Data is stored in a local JSON file with atomic writes, not a production database. A public deployment should add PostgreSQL or SQLite with proper migrations, HTTPS, rate limiting, session expiration, email recovery, account protections, administrative moderation, turn timeouts/auto-fold for absent players, monitoring, and abuse prevention. Do not run multiple server instances against the same JSON data file.

The room code is a convenience invitation, **not strong access control**: anyone who has the code and an account can join the lobby before play starts. There is no spectator mode, multi-table tournament, or real-money support.

## Version 3 additions
- `/blackjack.html`: seven-seat online Blackjack with private codes, 10 virtual-chip rounds, hit/stand/double, dealer stands on soft 17, blackjack 3:2 payouts.
- `blackjack.js`: server-authoritative Blackjack game engine.
- `android-wrapper/`: Android WebView wrapper starter, **not a compiled APK**. Requires a real HTTPS deployment and Android Studio to compile.
- `npm test` runs poker and Blackjack unit tests.

**Prototype limitations:** Blackjack split hands, insurance, configurable bets, reconnection during active hands, disconnect timeouts, and persistence of active Blackjack rooms are not yet supported. In-memory sessions and server-side tournament timing require production hardening. Do not deploy as a production public service without testing and security review. No real-money play, purchases, or redeemable prizes.
