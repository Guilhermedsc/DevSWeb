import React, { useState } from 'react';

const Calculadora = () => {

    const [n1, setNumero1] = useState('');
    const [n2, setNumero2] = useState('');

    const somar = (x, y) => {
        return x + y
    }

    const subtrair = (x, y) => x - y

    function multiplicar(x, y) {
        return x * y
    }

    const dividir = (x, y) => x / y

    const chamarDividir_1 = (x, y) => {             //recebe qualquer x e y
        return dividir(x, y)                        // passar os valores recebidos para a função dividir
    }

    return (
        <div>
            <label>
                Digite o primeiro número:
                <input type="number" value={n1} onChange={evento => setNumero1(evento.target.value)} />
            </label>
            <br />
            <label>
                Digite o segundo número:
                <input type="number" value={n2} onChange={evento => setNumero2(evento.target.value)} />
            </label>
            <br />
            <h1>Resultado da soma entre {n1} e {n2} é: {somar(Number(n1), Number(n2))}</h1>
            <h1>Resultado da subtração de {n1} por {n2} é: {subtrair(Number(n1), Number(n2))}</h1>
            <h1>Resultado da multiplicação de {n1} por {n2} é: {multiplicar(Number(n1), Number(n2))}</h1>
            <h1>Resultado da divisão_1 de {n1} por {n2} é: {chamarDividir_1(Number(n1), Number(n2))}</h1>
        </div>
    );
}

export default Calculadora;
