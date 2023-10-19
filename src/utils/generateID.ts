import { nanoid } from "nanoid";

export function generateID(size?: number){
    return nanoid(size)
}