export interface Layout {
    list: boolean,
    grid: boolean,
    page: number,
    filter: boolean
} 

export interface Products {
    devices: Array<Device>,
    device: Device,
    error: boolean,
    loading: boolean,
    search: string,
    amount: number,
    line: string
}

export interface Device {
    unifi: Unifi,
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

export interface Search {
    value: string,
    page: number,
    line: string
}

export interface Unifi {
    adoptability: string,
    network: Network,
    chipset: string,
    type: string,
    minimumFirmwareRequired : number,
    deviceCapabilities: Array<string>
} 

export interface Network {
    radios: {
        ng: {
            maxPower: number,
            maxSpeedMegabitsPerSecond: number,
        }
    },
    numberOfPorts: number,
    ethernetMaxSpeedMegabitsPerSecond: number,
    systemIdHexadecimal: string,
    features: {
        bandsteer: boolean,
        ac: boolean,
        gen: number
    }
}