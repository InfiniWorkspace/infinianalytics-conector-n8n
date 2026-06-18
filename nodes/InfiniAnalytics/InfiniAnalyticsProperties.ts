import { INodeProperties } from 'n8n-workflow';

export const properties: INodeProperties[] = [
	{
		displayName: 'Event Type',
		name: 'eventType',
		type: 'options',
		options: [
			{ name: 'Start', value: 'START', description: 'Register the start of an automation run' },
			{ name: 'Event', value: 'EVENT', description: 'Register an intermediate event during execution' },
			{ name: 'Warning', value: 'WARNING', description: 'Register a warning during execution' },
			{ name: 'End', value: 'END', description: 'Register the end of an automation run' },
		],
		default: 'EVENT',
		required: true,
		description: 'The type of event to register in Infini Analytics',
	},
	{
		displayName: 'Automation ID',
		name: 'automationId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. auto_abc123',
		description: 'The unique identifier of the automation, provided by Infini Analytics',
	},
	{
		displayName: 'Execution ID',
		name: 'executionId',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. exec_xyz789',
		description: 'The unique identifier of the current execution run, provided by Infini Analytics',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'e.g. Processing completed successfully',
		description: 'A human-readable description of the event being registered',
	},
];