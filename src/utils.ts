export const inBrowser = typeof window !== 'undefined'

const conn = inBrowser && (navigator as any).connection
export const canPrefetch =
    inBrowser && (!conn || ((conn.effectiveType || '').indexOf('2g') === -1 && !conn.saveData))

export const supportIntersectionObserver = inBrowser && window.IntersectionObserver

export const requestIdleCallback =
    (inBrowser && window.requestIdleCallback) ||
    function (execute, { timeout = 1 }: { timeout: number }) {
        const start = Date.now()
        return setTimeout(() => {
            execute({
                didTimeout: false,
                timeRemaining() {
                    return Math.max(0, 50 - (Date.now() - start))
                }
            })
        }, timeout)
    }
