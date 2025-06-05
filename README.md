# ⚖️ solana-show-balance-poc

This is a simple TypeScript proof-of-concept that demonstrates how to **fetch and display a wallet's balance** on a local Solana validator, and then **airdrop SOL to that wallet** using the `@solana/web3.js` SDK.

It’s designed to help you understand how SOL balances work programmatically and how airdrops behave in a local development environment.

---

## 🛠️ What This Project Does

- Connects to a **local Solana validator** at `http://127.0.0.1:8899`
- Shows the current balance for a given public key
- Requests an **airdrop of 5 SOL**
- Re-fetches and displays the updated balance

A practical way to simulate testnet/mainnet wallet operations locally.

---

## 📦 Prerequisites

- Node.js (>= 16)
- TypeScript
- [`solana-cli`](https://docs.solana.com/cli/install-solana-cli-tools) installed
- Local Solana validator running:

```bash
solana-test-validator
