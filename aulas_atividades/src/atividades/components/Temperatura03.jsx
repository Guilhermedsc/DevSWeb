const Temperatura03 = () => {
    const celsiusParaFahrenheit = (c) => {
        return (c * 9 / 5) + 32;
    }

    const fahrenheitParaCelsius = (f) => {
        return (f - 32) * 5 / 9;
    }

    const kelvin = (k) => {
        return {
            CC: k - 273.15,
            KK: (k - 273.15) * 9 / 5 + 32
        }

    }

    return (
        <div>
            <h1>Conversor de Temperatura</h1>
            <h2>Temperatura em 100ºC é: {celsiusParaFahrenheit(100)}ºF</h2>
            <h2>Temperatura em 100ºF é: {fahrenheitParaCelsius(100)}ºC</h2>
            <h2>Temperatura em 100ºK é: {kelvin(100).CC}ºC e {kelvin(100).KK}ºF</h2>
        </div>
    );
}

export default Temperatura03;