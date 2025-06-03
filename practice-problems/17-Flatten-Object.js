function flattenObject(obj, parentKey = '', result = {}) {
    for(const key in obj){
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if(value !== null && typeof value === 'object' && !Array.isArray(value)){
            flattenObject(value, fullKey, result);
        }else{
            result[fullKey] = value;
        }
    }
    return result;
}