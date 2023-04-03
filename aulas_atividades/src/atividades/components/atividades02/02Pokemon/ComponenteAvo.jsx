import n from './context'
import ComponenteFilho from './ComponenteFilho'

const ComponenteAvo = () => {
    const num = 3
    return (
        <n.Provider value={num}>
            <div>
                <h3>Componente Avo</h3>
                <h4>Valor: {num}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`} alt="Pokemon" />
                <ComponenteFilho />
            </div>
        </n.Provider>
    )
}

export default ComponenteAvo