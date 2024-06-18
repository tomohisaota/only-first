/*
Serialize promise execution by creating promise chain for given string key
 */

export class AllowSinglePromiseAtATime {
    // Hold promise while execution
    private readonly holders: { [key: string]: Promise<void> } = {}

    async allowSinglePromiseAtATime(
        {key, cb}: {
            key: string,
            cb: () => Promise<void>,
        }): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const ref = this.holders[key]
            if (ref !== undefined) {
                // Call resolve without executing cb
                return resolve()
            }
            // Call cb and keep the promise until it finishes
            this.holders[key] = cb().then(resolve).catch(reject)
            await this.holders[key]
            delete this.holders[key]
        })
    }
}