const imageModules = import.meta.glob ('../assets/webP/Product/*', { eager: true, query: '?url', import: 'default' });

export function getProductionImageMap(): Record<string, string> {
    const map: Record<string, string> = {};

    for (const [path, url] of Object.entries(imageModules)) {
        const parts = path.split('/');
        const filename = parts[parts.length - 1];

        if (filename && typeof url === 'string') {
            map[filename] = url;
        }
    }

    return map;
}