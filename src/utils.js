var utils = (function() {
    /**
     * @description Sum
     */
    function reduceToSingleDigit(str) {
        while (str.length > 1 && !isNaN(str)) {
            str = str
                .split('')
                .reduce((a, b) => (+a) + (+b))
                .toString();
        }
        return str;
    }

    function isNotSpace(value) {
        return value === '' ? false : true;
    }

    function splitIntoWords(str) {
        str = str
        .trim()
        .split(' ')
        .filter(utils.isNotSpace);
        return str;
    }

    function splitIntoChars(str) {
        return str.split('');
    }

    function getNumSet(charSet, map) {
        //convert every char to an int representation
        return charSet.map((char) => {
            var _index;
            map.some((set, index) => {
                if (set.includes(char.toUpperCase())) {
                    _index = index;
                    return true;
                }
            });
            return _index;
        });
    }
    return {
        reduceToSingleDigit     : reduceToSingleDigit,
        isNotSpace              : isNotSpace,
        splitIntoWords          : splitIntoWords,
        splitIntoChars          : splitIntoChars,
        getNumSet               : getNumSet
    };
})();

export default utils;