import { Children } from "react"

//V0
/* const SuperMercado = ({ children, nome }) => { //children normal apenas mostra o conteudo
    return (
        <div>
            <h1>SuperMercado: {nome}</h1>
            {children}
        </div>
    )
} */

const SuperMercado = ({ children, nome }) => { //Children maiusculo permite manipular o conteudo, gambiarra
    return (                                   //Children.map(children, child) array, function
        <div>
            <h1>SuperMercado: {nome}</h1>
            {Children.map(children, filho => {
                return (
                    <div style={{ backgroundColor: "red" }}>
                        {filho}
                    </div>
                )
            })}
        </div>
    )
}

const Legume = ({ nome }) => {
    return (
        <div>
            <h1>Legume: {nome}</h1>
        </div>
    )
}

const Bebida = ({ nome }) => {
    return (
        <div>
            <h1>Bedida: {nome}</h1>
        </div>
    )
}

export { SuperMercado, Legume, Bebida }