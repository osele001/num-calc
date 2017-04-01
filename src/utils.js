var utils = (function() {
    /**
     * @description Sum
     */
    function reduceToSingleDigit(numSet) {
        var num = numSet
                .reduce((a, b) => a + b)
                .toString();
        while (num.length > 1 && !isNaN(num)) {
            num = num
                .split('')
                .reduce((a, b) => (+a) + (+b))
                .toString();
        }
        return num;
    }

    function isNotSpace(value) {
        return value === '' ? false : true;
    }

    function splitIntoWords(str) {
        str = str
        .trim()
        .split(/[\/ \:]/)
        .filter(utils.isNotSpace);
        return str;
    }

    function splitIntoCharsets(words) {
        return words.map(utils.splitIntoChars);
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
    function getWordNumbers(charSets, map) {
        return charSets.map((charSet) => {
            var num; //reduced number --- sum of all elements

            //convert every char to an int representation
            var numSet = utils.getNumSet(charSet, map);

            if (numSet.length) {
                num = utils.reduceToSingleDigit(numSet);

                if (isNaN(num)) {
                    throw new 'Wrong input!';
                }
            }
            return num;
        });
    }
    return {
        reduceToSingleDigit     : reduceToSingleDigit,
        isNotSpace              : isNotSpace,
        splitIntoWords          : splitIntoWords,
        splitIntoCharsets       : splitIntoCharsets,
        splitIntoChars          : splitIntoChars,
        getNumSet               : getNumSet,
        getWordNumbers          : getWordNumbers
    };
})();

export default utils;