import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
	NodeApiError,
} from 'n8n-workflow';
import { properties } from './InfiniAnalyticsProperties';

export class InfiniAnalytics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Infini Analytics',
		name: 'infiniAnalytics',
		icon: 'file:logo_infini.png',
		group: ['transform'],
		version: 1,
		description: 'Connector for monitoring and debugging the runs of your automations and agents in analytics.infini.es',
		defaults: { name: 'Infini Analytics' },
		inputs: ['main'],
		outputs: ['main'],
		properties: properties,
		credentials: [
			{
				name: 'infiniAnalyticsApi',
				required: true,
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('infiniAnalyticsApi');
		const token = credentials.token as string;

		for (let i = 0; i < items.length; i++) {
			const body = {
				automation_id: this.getNodeParameter('automationId', i),
				execution_id: this.getNodeParameter('executionId', i),
				event: this.getNodeParameter('eventType', i),
				description: this.getNodeParameter('description', i),
			};

			try {
				const response = await this.helpers.httpRequest({
					method: 'POST',
					url: 'https://api.analytics.infini.es/v1/register/',
					headers: {
						token,
						'Content-Type': 'application/json',
					},
					body,
					json: true,
				});

				returnData.push({ json: (response as JsonObject) ?? {} });
			} catch (error) {
				throw new NodeApiError(this.getNode(), error as JsonObject);
			}
		}

		return [returnData];
	}
}
