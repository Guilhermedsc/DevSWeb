/* const MeuDados02 = (props) => {
    return (
        <div align="center">
            <h1>Meu nome: {props.nome}</h1>
            <h1>Meu curso: {props.curso}</h1>
            <h1>Minha universidade: {props.universidade}</h1>
        </div>
    )
} */

const MeuDados02 = ({ nome, curso, universidade }) => {
    return (
        <div align="center">
            <h1>Meu nome: {nome}</h1>
            <h1>Meu curso: {curso}</h1>
            <h1>Minha universidade: {universidade}</h1>
        </div>
    )
}

export default MeuDados02