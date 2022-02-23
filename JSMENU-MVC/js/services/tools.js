function fixNan (x) {
    var num = parseInt(x);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}

function fixEmail (x) {
    return x.toLowerCase();
}

export {fixNan, fixEmail};