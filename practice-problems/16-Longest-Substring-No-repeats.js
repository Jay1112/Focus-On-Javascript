function lengthOfLongestSubstring(s) {
    let track = {};
    let max_count = 0;
    for (const ch of s) {
        if (track.hasOwnProperty(ch)) {
            max_count = Math.max(max_count, Object.keys(track).length);
            track = {};
        }
        track[ch] = 1;
    }

    max_count = Math.max(max_count, Object.keys(track).length);

    return max_count;
}

module.exports = lengthOfLongestSubstring