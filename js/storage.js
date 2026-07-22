const PREFIX_KEY = 'cf-'
export const Storage = {
    get: (key, fallback) => JSON.parse((localStorage.getItem(PREFIX_KEY + key) || '{}')) ?? fallback,
    set: (key, val) => localStorage.setItem(PREFIX_KEY + key, JSON.stringify(val))
};