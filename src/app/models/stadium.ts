import { IMatch } from "./match"

export interface IStadium {
    stadium_id: number
    capacity: number
    city: string
    country: string
    latitude: number
    longitude: number
    name: string
    photo: string
    year_of_built: number
    next_matches: number[]
}