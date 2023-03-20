//V0
/* const MyProps = (props) => {
    const rendezirarMeuNome = () => {
        return(
            <span> Guilherme </span>
        )
    }

    return(
        <div>
            <h1>Meu nome: {rendezirarMeuNome()}</h1>
            <h1>Meu nome, com props: {props.nome}</h1>
        </div>
    )
} */

//V1
/* const MyProps = (props) => {   
    const {nome, idade, curso} = props  //quebra e passa para as variaveis
    
    return(
        <div>
            <h1>Meu nome: {nome}</h1>
            <h1>Minha idade : {idade}</h1>
            <h1>Meu curso: {curso}</h1>
        </div>
    )
}  */

const MyProps = ({nome, idade, curso}) => {       
    return(
        <div>
            <h1>Meu nome: {nome}</h1>
            <h1>Minha idade : {idade}</h1>
            <h1>Meu curso: {curso}</h1>
        </div>
    )
} 

export default MyProps;