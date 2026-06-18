import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
} from 'n8n-workflow';
import { properties } from './InfiniAnalyticsProperties';

export class InfiniAnalytics implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Infini Analytics',
		name: 'infiniAnalytics',
		icon: 'file:logo_infini.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["eventType"]}}',
		description: 'Monitor and debug your automation runs in Infini Analytics',
		defaults: { name: 'Infini Analytics' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		properties,
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

		for (let i = 0; i < items.length; i++) {
			const body = {
				automation_id: this.getNodeParameter('automationId', i),
				execution_id: this.getNodeParameter('executionId', i),
				event: this.getNodeParameter('eventType', i),
				description: this.getNodeParameter('description', i),
			};

			try {
				const response = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'infiniAnalyticsApi',
					{
						method: 'POST',
						url: 'https://api.analytics.infini.es/v1/register/',
						headers: {
							'Content-Type': 'application/json',
						},
						body,
						json: true,
					},
				);

				returnData.push({ json: (response as JsonObject) ?? {}, pairedItem: i });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message }, pairedItem: i });
					continue;
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
			}
		}

		return [returnData];
	}
}
