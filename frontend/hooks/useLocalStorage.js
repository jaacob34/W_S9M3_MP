import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const resolve = (v) => (typeof v === 'function' ? v() : v)

    const [value, setValue] = useState(() => {
        try {
            if (typeof window === 'undefined') return resolve(initialValue)

            const item = window.localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : resolve(initialValue)
        } catch {
            return resolve(initialValue)
        }
    })

    useEffect(() => {
        try {
            if (typeof window === 'undefined') return
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch {
            console.log('something went wrong')
        }
    }, [key, value])

    return [value, setValue]
}