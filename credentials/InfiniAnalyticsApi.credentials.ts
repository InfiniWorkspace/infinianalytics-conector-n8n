import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class InfiniAnalyticsApi implements ICredentialType {
	name = 'infiniAnalyticsApi';
	displayName = 'Infini Analytics API';

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
}
