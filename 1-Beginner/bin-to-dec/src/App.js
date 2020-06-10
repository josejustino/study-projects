import React, { useState } from 'react';
import './global.css';

function App() {
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            binary,
        };

        if (
            verifyIfHaveUpToEightDigits(data.binary) &&
            verifyIfIsBinary(data.binary)
        ) {
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

            console.log(result);
        }
    }

    function verifyIfHaveUpToEightDigits(binaryNumber) {
        return binaryNumber.length < 9 ? true : false;
    }

    function verifyIfIsBinary(binaryNumber) {
        return /^[0-1]{1,}$/g.test(binaryNumber);
    }

    return (
        <div className="form-container">
            <div className="content">
                <h1>Conversão de Binário para Decimal</h1>
                <div className="binary-decimal-content">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Digite um nro binário"
                            value={binary}
                            onChange={(e) => setBinary(e.target.value)}
                        />

                        <button type="submit" className="button">
                            Converter
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

// 10
// 0*2^0 + 1*2^1 = 0 + 2 = 2
