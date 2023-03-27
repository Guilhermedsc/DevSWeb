const Filho = ({ altura, peso }) => {
    let imc = peso / (altura * altura)

    const status = () => {
        if (imc < 18) return <h3>Abaixo do peso</h3>
        else if (imc > 25) return <h3>Acima do peso</h3>
        else return <h3>Peso ideal</h3>
    }
    return (
        <div align="center">
            <h1>Componente Filho</h1>
            <h2>IMC: {imc}</h2>
            {status(imc)}
        </div>
    )
}

export default Filho