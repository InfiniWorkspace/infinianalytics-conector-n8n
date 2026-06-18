# Contributing to n8n-nodes-infini-analytics

## Reporting bugs

Open an issue at [GitHub Issues](https://github.com/InfiniWorkspace/infinianalytics-conector-n8n/issues) and include:

- **n8n version** — visible in Settings → About
- **Node package version** — visible in Settings → Community Nodes
- **Steps to reproduce** — the minimal workflow that triggers the bug
- **Expected behaviour** — what you expected to happen
- **Actual behaviour** — what actually happened
- **Error message** — copy the full error from the n8n execution log

## Requesting features

Open a GitHub Issue with the label `enhancement`. Describe your use case and why the current node does not cover it. The more concrete the use case, the easier it is to evaluate.

## Development setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/InfiniWorkspace/infinianalytics-conector-n8n.git
cd infinianalytics-conector-n8n
npm install
```

2. Make your changes in `nodes/` or `credentials/`.

3. Build and lint before testing:

```bash
npm run build
npm run lint
```

4. To test locally against a running n8n instance, follow the [n8n guide for running a node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/).

## Submitting a pull request

- Fork the repository and create a branch from `main`.
- Run `npm run lint` and `npm run build` — both must pass.
- Write a clear PR description: what changes, why, and how to verify it.

## License

By contributing you agree that your contributions will be licensed under the [MIT License](LICENSE.md).
