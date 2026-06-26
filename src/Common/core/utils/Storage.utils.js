export const readStorage = (key) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    catch {
        return null;
    }
};
export const writeStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
export const removeStorage = (key) => {
    localStorage.removeItem(key);
};
