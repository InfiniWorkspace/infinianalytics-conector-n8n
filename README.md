# n8n-nodes-infini-analytics

This is an n8n community node. It lets you use [Infini Analytics](https://analytics.infini.es) in your n8n workflows.

Infini Analytics is a monitoring and observability platform for your n8n automations and AI agents. It lets you register lifecycle events (start, checkpoints, warnings, and end) during a workflow execution, giving you a full audit trail of every run directly in your Infini Analytics dashboard.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

In short:

1. Go to **Settings → Community Nodes**.
2. Select **Install**.
3. Enter `n8n-nodes-infini-analytics` and confirm.

## Operations

The node supports a single **Register Event** operation. It sends an event to Infini Analytics for the given automation run.

Supported event types:

| Event Type | When to use |
|---|---|
| **Start** | At the beginning of an automation run |
| **Event** | At key checkpoints during execution |
| **Warning** | When a non-critical issue is detected |
| **End** | At the completion of an automation run |

## Credentials

To use this node you need an active **Infini Analytics** account. Your account provides the three values required to configure the node:

| Value | Description |
|---|---|
| **Bearer Token** | Your API authentication token |
| **Automation ID** | The unique identifier of the automation registered in Infini Analytics |
| **Execution ID** | The unique identifier for the specific execution run |

To set up credentials in n8n:

1. Log in to [analytics.infini.es](https://analytics.infini.es) and retrieve your Bearer Token.
2. In n8n, go to **Credentials → New Credential**.
3. Search for **Infini Analytics API**.
4. Enter your **Bearer Token** and save.

## Compatibility

Tested against n8n **1.x** and above. Minimum recommended version: `1.0.0`.

## Usage

The recommended pattern is to wrap your workflow with **Start** and **End** events, and add **Event** or **Warning** nodes at key steps in between.

**Basic monitoring setup:**

```
[Trigger] → [Infini Analytics: Start] → [...your workflow...] → [Infini Analytics: End]
```

**With intermediate checkpoints and error handling:**

```
[Trigger] → [Infini: Start] → [Step A] → [Infini: Event] → [Step B] → [Infini: End]
                                                 ↓ on error
                                          [Infini: Warning]
```

**Parameter tips:**

- **Automation ID** and **Execution ID** are provided by your Infini Analytics account. Use them as static values or pass them dynamically via n8n expressions.
- **Description** accepts free text and n8n expressions. Use it to include dynamic context, for example: `Processed {{ $json.count }} records`.
- Enable **Continue on Fail** on the node if you want analytics failures to never block your main workflow.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Infini Analytics platform](https://analytics.infini.es)
- [Infini website](https://infini.es)

## Maintenance

This node is developed and maintained by the [Infini](https://infini.es) team. It is not open to external contributions. For support or issues, contact [mantenimiento@infini.es](mailto:mantenimiento@infini.es).
