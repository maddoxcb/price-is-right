import type { Item } from './types';

const getData = async (): Promise<Item[]> => {
    const response = await fetch('http://localhost:5173/api/items')
    const allItems = await response.json()
    // Returns empty array if for some reason items is undefined
    return allItems?.items || []
}

export { getData }