
export interface Api {
    rockets: Rocket[]
}


export interface Rocket {
    id: string
    active: boolean
    name: string
    description: string
    success_rate_pct: number
    wikipedia: string
}