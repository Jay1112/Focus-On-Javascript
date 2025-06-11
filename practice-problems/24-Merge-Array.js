function mergeData(arr1, arr2) {
    const track = new Map();
    for (const item of arr1) {
        track.set(item.id, { ...item });
    }

    for (const item of arr2) {
        if (track.has(item.id)) {
            track.set(item.id, { ...track.get(item.id), ...item });
        } else {
            track.set(item.id, { ...item });
        }
    }

    return Array.from(track.values());
}

module.exports = mergeData