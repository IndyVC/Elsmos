export function distinct(value, index, self) {
    return self.indexOf(value) === index;
}

export function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
