export function handleClickOutside (clickBar) {
    if (clickBar.current && !clickBar.current.contains(event.target)) {
        return false
    }
}