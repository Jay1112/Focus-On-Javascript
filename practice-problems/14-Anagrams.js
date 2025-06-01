function isAlphaBetic(ch) {
    const small = (ch >= 'a' && ch <= 'z');
    const capital = (ch >= 'A' && ch <= 'Z');

    return small || capital;
}

function isAnagram(str1, str2) {
    const track = {};
    for (const ch of str1) {
        if (isAlphaBetic(ch)) {
            const final = ch.toLowerCase();
            if (track.hasOwnProperty(final)) {
                track[final] = track[final] + 1;
            } else {
                track[final] = 1;
            }
        }
    }

    for (const ch of str2) {
        if (isAlphaBetic(ch)) {
            const final = ch.toLowerCase();
            if (track.hasOwnProperty(final) && track[final] > 0) {
                track[final] = track[final] - 1;
            } else {
                return false;
            }
        }
    }

    return true;
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram