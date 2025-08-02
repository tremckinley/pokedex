export type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) { 
        this.#interval = interval;
        this.#startReapLoop()
    }

    add<T>(key: string, val: T): void {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val
        };
        this.#cache.set(key, entry);
    }


    get<T>(key: string): T {
        const entry = this.#cache.get(key);
        return entry?.val
    }

    #reap(): void {
        for (const entry of this.#cache.keys()) {
            const cacheEntry = this.#cache.get(entry);
            if (!entry.includes("/pokemon/") && cacheEntry && cacheEntry.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(entry)
            }
        }
    }

    #startReapLoop(): void {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
        }
        this.#reapIntervalId = undefined;
    }
    
}