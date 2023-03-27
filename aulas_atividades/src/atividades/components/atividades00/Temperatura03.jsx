import React, { useState } from 'react';

const Temperatura03 = () => {
    const [n1, setNumero1] = useState('');

    const celsiusParaFahrenheit = (c) => (c * 9 / 5) + 32;

    const fahrenheitParaCelsius = (f) => (f - 32) * 5 / 9

    const kelvin = (k) => {
        return {
            CC: k - 273.15,
            KK: (k - 273.15) * 9 / 5 + 32
        }

    }

    return (
        <div>
            <label>
                Digite o uma temperatura em °C:
                <input type="number" value={n1} onChange={evento => setNumero1(evento.target.value)} />
            </label>
            <br />
            <h2>Temperatura em {n1}°C é: {celsiusParaFahrenheit(n1)}ºF</h2>
            <h2>Temperatura em {n1}°F é: {fahrenheitParaCelsius(n1)}ºC</h2>
            <h2>Temperatura em {n1}°K é: {kelvin(n1).CC}ºC e {kelvin(n1).KK}ºF</h2>
        </div>
    );
}

export default Temperatura03;