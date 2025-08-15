import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initial = false) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', initial)

    return [isDarkMode, setIsDarkMode]
}