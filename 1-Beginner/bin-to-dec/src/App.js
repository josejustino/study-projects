import React, { useState } from 'react';
import './global.css';

function App() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            binary,
        };

        if (!verifyIfIsBinary(data.binary)) {
            return setErrorMessage('Digit must be 0 or 1');
        }

        setErrorMessage('');

        let result = data.binary
            .split('')
            .reverse()
            .map((number) => {
                return Number(number);
            })
            .reduce((acumulator, nextElement, index) => {
                return acumulator + nextElement * Math.pow(2, index);
            });

        setDecimal(result);
    }

    function verifyIfIsBinary(binaryNumber) {
        return /^[0-1]{1,}$/g.test(binaryNumber);
    }

    return (
        <div className="form-container">
            <div className="content">
                <h1>Binary to Decimal Converter</h1>
                {errorMessage && (
                    <span style={{ color: 'red', marginTop: '20px' }}>
                        {errorMessage}
                    </span>
                )}
                <div className="binary-decimal-content">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Digite um nro binário"
                            value={binary}
                            onChange={(e) => setBinary(e.target.value)}
                        />

                        <button type="submit" className="button">
                            Convert to decimal
                        </button>
                    </form>

                    <div className="decimal-content">
                        <span>{decimal}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
