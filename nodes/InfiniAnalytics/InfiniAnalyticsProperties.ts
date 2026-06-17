import { INodeProperties } from 'n8n-workflow';

export const properties: INodeProperties[] = [
    {
        displayName: 'Evento',
        name: 'eventType',
        type: 'options',
        options: [
            { name: 'Inicio (START)', value: 'START' },
            { name: 'Evento (EVENT)', value: 'EVENT' },
            { name: 'Aviso (WARNING)', value: 'WARNING' },
            { name: 'Fin (END)', value: 'END' },
        ],
        default: 'EVENT',
        required: true,
    },
    {
        displayName: 'Automation ID',
        name: 'automationId',
        type: 'string',
        default: '',
        required: true,
    },
    {
        displayName: 'Execution ID',
        name: 'executionId',
        type: 'string',
        default: '',
        required: true,
    },
    {
        displayName: 'Descripción',
        name: 'description',
        type: 'string',
        default: '',
        required: true,
    }
];