export interface Products {
    version: string,
    devices: Array<Device>,
    amount: number
}

export interface Device {
    icon: Icon,
    line: Line,
    guids: [],
    product: Product,
    shortnames: [],
    triplets: []
}

export interface Icon {
    resolutions: Array<[ number, number]>,
    id: string
}

export interface Product {
    abbrev: string,
    name: string
}

export interface Line {
    name: string,
    id: string
}