import {AllowSinglePromiseAtATime} from "./AllowSinglePromiseAtATime";

const s = new AllowSinglePromiseAtATime()

export function onlyYou(key: string, cb: () => Promise<void>) {
    return s.allowSinglePromiseAtATime({key, cb})
}