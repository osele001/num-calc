import React from 'react';
import engAlpha from '../const/engAlpha.js';
import rusAlpha from '../const/rusAlpha.js';
import utils from '../utils.js';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        var arr = rusAlpha;
        var wrongInput = false;
        var inputText = this.state.value;

        var placeholder = 'Введите имя на русском';
        if (this.props.lang === 1) {
            placeholder = 'Введите имя на английском';
            arr = engAlpha;
        }

        //split string to words
        var words = utils.splitIntoWords(inputText);

        //split each word in set of characters
        var charSets = words.map(utils.splitIntoChars);

        var wordNumbers = charSets.map((charSet) => {
            var num; //reduced number --- sum of all elements

            //convert every char to an int representation
            var numSet = utils.getNumSet(charSet, arr);

            if (numSet.length) {
                try {
                    num = numSet
                        .reduce((a, b) => a + b)
                        .toString();
                    num = utils.reduceToSingleDigit(num);
                } catch (err) { wrongInput = true; }

                if (isNaN(num)) {
                    wrongInput = true;
                }
            }
            return num;
        });

        var error = (
            <div>
                <h2>Ошибка!</h2>
                <p>Скорее всего выбран неправильный язык или используются неподдерживаемые символы.</p>
            </div>
        );
        console.log(wordNumbers);

        return (
            <div>
                <input type="text" placeholder={placeholder} onChange={this.handleChange} />
                <br />
                {wrongInput ? error
                : wordNumbers.map((value, index) => {
                    if (!inputText) {
                        return;
                    }
                    return <p>Число слова №{index + 1}: {value}</p>;
                })}
            </div>
        );
    }
}
export default Input;