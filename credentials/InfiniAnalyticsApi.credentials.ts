import type { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class InfiniAnalyticsApi implements ICredentialType {
	name = 'infiniAnalyticsApi';
	displayName = 'Infini Analytics API';
	icon = 'file:logo_infini.svg' as ICredentialType['icon'];
	documentationUrl = 'https://analytics.infini.es';

	properties: INodeProperties[] = [
		{
			displayName: 'Bearer Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				token: '={{$credentials?.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			method: 'POST',
			url: 'https://api.analytics.infini.es/v1/register/',
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				automation_id: 'credential-test',
				execution_id: 'credential-test',
				event: 'EVENT',
				description: 'n8n credential test',
			},
			json: true,
		},
	};
}
