const PlacaMae = ({ nome, valor }) => {
    return (
        <div align="center">
            <h1>Placa Mãe</h1>
            <h2>Nome: {nome}</h2>
            <h2>Valor: {valor}</h2>
            <br />
        </div>
    )
}

const Memorias = ({ nome, valor }) => {
    return (
        <div align="center">
            <h1>Memorias</h1>
            <h2>Nome: {nome}</h2>
            <h2>Valor: {valor}</h2>
            <br />
        </div>
    )
}

const PlacaDevideo = ({ nome, valor }) => {
    return (
        <div align="center">
            <h1>Placa de Video</h1>
            <h2>Nome: {nome}</h2>
            <h2>Valor: {valor}</h2>
            <br />
        </div>
    )
}

export { PlacaMae, Memorias, PlacaDevideo }