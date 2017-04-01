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
        var inputText = this.state.value;
        var map = rusAlpha;
        var wrongInput = false;
        

        var placeholder = 'Введите имя на русском';
        if (this.props.lang === 1) {
            placeholder = 'Введите имя на английском';
            map = engAlpha;
        }

        var words = utils.splitIntoWords(inputText);
        var charSets = utils.splitIntoCharsets(words);
        try {
            var wordNumbers = utils.getWordNumbers(charSets, map);
        } catch (err) {
            console.log(charSets);
            wrongInput = true;
        }
        var finalScore = [];
        if (!wrongInput && wordNumbers.length) {
            finalScore = utils.reduceToSingleDigit(wordNumbers);
        }

        var error = (
            <div>
                <h2>Ошибка!</h2>
                <p>Скорее всего выбран неправильный язык или используются неподдерживаемые символы.</p>
            </div>
        );

        return (
            <div>
                <input type="text" placeholder={placeholder} onChange={this.handleChange} />
                <br />
                {isNaN(finalScore) ? null
                : <h1>{finalScore}</h1>
                }
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