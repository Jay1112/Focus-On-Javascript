function isAlphaNumeric(ch) {
    const small = (ch >= 'a' && ch <= 'z');
    const capital = (ch >= 'A' && ch <= 'Z');
    const number = (ch >= '0' && ch <= '9');

    return small || capital || number;
}

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++){
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


function validatePalindrome(str) {
    let result = "";
    for (const ch of str) {
        if (isAlphaNumeric(ch)) {
            result = result + ch.toLowerCase();
        }
    }

    return isPalindrome(result);
}