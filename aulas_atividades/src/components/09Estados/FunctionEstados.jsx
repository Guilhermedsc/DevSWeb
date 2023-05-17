import React, { useState, useEffect } from 'react';

const FunctionEstados = () => {
    //let contador = 10
    const [contador, setContador] = useState(10)
    //usando hook para alterar o valor da variavel contador
    //isso obriga o componente a ser renderizado novamente
    const [par, setPar] = useState(false)

    useEffect( //useEffect é um hook que é disparado quando o uma variavel de estado é alterada
        () => {
            if (contador % 2 === 0) setPar(true)
            else setPar(false)
        }, [contador]
    )

    const btn = () => {
        setContador(contador + 1)
        setPar(contador % 2 === 0)
    }
    /* temos uma variavel que é alterada devido a um evento disparado pelo usuário
    e essa variavel interfere na interfaze gráfica. Pra isso usamos hooks */
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <h1>Par: {par}</h1>
            <button onClick={btn}>Aumentar Contador</button>
        </div>
    )
}

export default FunctionEstados;