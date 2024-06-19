import {AllowSinglePromiseAtATime} from "./AllowSinglePromiseAtATime";

const s = new AllowSinglePromiseAtATime()

export function onlyFirst<T = void>(key: string, cb: () => Promise<T>): Promise<T | undefined> {
    return s.allowSinglePromiseAtATime<T>({key, cb})
}