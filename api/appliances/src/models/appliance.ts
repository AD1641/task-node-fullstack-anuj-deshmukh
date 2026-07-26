export interface Appliance {
    id: number
    name: string
    type: string
    createdAt: Date
}

export const applianceTypes = [
    'Set top box',
    'Lightbulb',
    'Smoke detector',
]