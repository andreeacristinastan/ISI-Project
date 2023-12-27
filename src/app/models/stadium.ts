import { IMatch } from "./match"

export interface IStadium {
    stadium_id: Number
    capacity: Number
    city: string
    country: string
    latitude: Number
    longitude: Number
    name: string
    photo: string
    year_of_built: Number
    next_matches: number[]
}