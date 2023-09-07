import React, { useState, useEffect } from 'react';

function IMCCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);
    let classify = '';


    const calculateIMC = () => {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100;

        if (!isNaN(weightInKg) && !isNaN(heightInMeters)) {
            const imc = weightInKg / (heightInMeters * heightInMeters);
            setResult(imc.toFixed(2));
        } else {
            setResult(null);
        }


    };

    useEffect(() => {
        
        calculateIMC()

    }, [weight, height])

    function setClassify() {



        if (result <= 18.5) {
            classify = 'abaixo do peso'
        } else if (result >= 18.6 && result <= 24.9) {
            classify = 'Peso ideal'
        } else if (result >= 25.0 && result <= 29.9) {
            classify = 'Levemente acima do peso'
        } else if (result >= 30.0 && result <= 34.9) {
            classify = 'Obesidade grau I'
        } else if (result >= 35.0 && result <= 39.9) {
            classify = 'Obesidade grau II'
        } else if (result >= 40.0) {
            classify = 'Obesidade grau III'
        } else classify = null
            

        return classify;

    }

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <div>
                <label>Peso (kg):</label>
                <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Altura (cm):</label>
                <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            {result !== null && (
                <div>
                    <h2>Seu IMC é:</h2>
                    <p>{result}</p>
                    <p>{setClassify()}</p>
                </div>
            )}
        </div>
    );
}

export default IMCCalculator;