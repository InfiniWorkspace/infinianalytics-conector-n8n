# n8n-nodes-infini-analytics

Custom n8n node for [Infini Analytics](https://analytics.infini.es) — monitor and debug the runs of your automations and agents.

## Installation

In your n8n instance go to **Settings → Community Nodes → Install** and enter:

```
n8n-nodes-infini-analytics
```

## Configuration

The node requires an **Infini Analytics API** credential. Create one in n8n with your Bearer Token from [analytics.infini.es](https://analytics.infini.es).

## Maintenance workflow

All changes are made from this VS Code project. The steps to release a new version are:

### 1. Make your changes

Edit the source files:

- `nodes/InfiniAnalytics/InfiniAnalytics.node.ts` — node logic
- `nodes/InfiniAnalytics/InfiniAnalyticsProperties.ts` — node parameters
- `credentials/InfiniAnalyticsApi.credentials.ts` — authentication

### 2. Build

```bash
npm run build
```

Compiles TypeScript to `dist/`.

### 3. Test locally

Restart n8n and verify the changes work as expected.

### 4. Bump the version

In `package.json`, increment the `version` field following [semver](https://semver.org/):

- Bug fix → `0.1.0` → `0.1.1`
- New feature → `0.1.0` → `0.2.0`
- Breaking change → `0.1.0` → `1.0.0`

### 5. Commit and push

```bash
git add .
git commit -m "describe what changed"
git push
```

### 6. Publish to npm

```bash
npm publish --access public
```

Users who already have the node installed will see the update available in **Settings → Community Nodes**.

## Project structure

```
nodes/
  InfiniAnalytics/
    InfiniAnalytics.node.ts     # Main node class
    InfiniAnalyticsProperties.ts # Parameters definition
    logo_infini.png              # Node icon
    index.ts                     # Exports
credentials/
  InfiniAnalyticsApi.credentials.ts  # Credential type
dist/                           # Compiled output (auto-generated)
```

## License

MIT
