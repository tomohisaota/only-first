/*
Serialize promise execution by creating promise chain for given string key
 */

export class AllowSinglePromiseAtATime {
    // Hold promise while execution
    private readonly holders: { [key: string]: Promise<void> } = {}

    async allowSinglePromiseAtATime<T>(
        {key, cb}: {
            key: string,
            cb: () => Promise<T>,
        }): Promise<T | undefined> {
        return new Promise<T | undefined>(async (resolve, reject) => {
            const ref = this.holders[key]
            if (ref !== undefined) {
                // Call resolve without executing cb
                return resolve(undefined)
            }
            // Call cb and keep the promise until it finishes
            this.holders[key] = cb().then(resolve).catch(reject)
            await this.holders[key]
            delete this.holders[key]
        })
    }
}