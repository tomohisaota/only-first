import {onlyFirst} from "../src";

const max = 100
describe("onlyYou", () => {
    test('same key, without exception', async () => {
        let count = 0
        const promises: Promise<void>[] = []
        for (let i = 0; i < max; i++) {
            promises.push(onlyFirst("samekey", async () => {
                count++
            }))
        }
        await Promise.all(promises)
        expect(count).toEqual(1) // only once!!
    });

    test('same key, with exception', async () => {
        let count = 0
        const promises: Promise<void>[] = []
        for (let i = 0; i < max; i++) {
            promises.push(onlyFirst("samekey", async () => {
                count++
                throw new Error("Stop here")
            }).catch(() => {
                // Ignore Error
            }))
        }
        await Promise.all(promises)
        expect(count).toEqual(1) // only once!!
    });


    test('same key, one by one', async () => {
        let count = 0
        for (let i = 0; i < max; i++) {
            await onlyFirst("samekey", async () => {
                count++
            })
        }
        expect(count).toEqual(max) // not at the same time
    });

    test('different key, without exception', async () => {
        let count = 0
        const promises: Promise<void>[] = []
        for (let i = 0; i < max; i++) {
            promises.push(onlyFirst(`${i}`, async () => {
                count++
            }))
        }
        await Promise.all(promises)
        expect(count).toEqual(max) // not with the same key
    });

    test('different key, with exception', async () => {
        let count = 0
        const promises: Promise<void>[] = []
        for (let i = 0; i < max; i++) {
            promises.push(onlyFirst(`${i}`, async () => {
                count++
                throw new Error("Stop here")
            }).catch(() => {
                // Ignore Error
            }))
        }
        await Promise.all(promises)
        expect(count).toEqual(max) // not with the same key
    });

    test('same key, with return value', async () => {
        let count = 0
        const promises: Promise<number | undefined>[] = []
        for (let i = 0; i < max; i++) {
            promises.push(onlyFirst("samekey", async () => {
                count++
                return count
            }))
        }
        const results = await Promise.all(promises)
        expect(count).toEqual(1) // only once!!

        // only first promise return value
        expect(results).toEqual([1, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined,
            undefined, undefined, undefined, undefined
        ])
    });
})