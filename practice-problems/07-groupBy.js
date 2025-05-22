function groupBy(arr, key) {
    if (arr.length === 0) return {};

    let group = {};
    for (const item of arr) {
        if (item.hasOwnProperty(key)) {
            if (group.hasOwnProperty(item[key])) {
                group[item[key]] = [...group[item[key]], item]
            } else {
                group[item[key]] = [item]
            }
        }
    }

    return group;
}