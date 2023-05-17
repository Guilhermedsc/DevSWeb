import Filho from "./Filho";

const Pai = () => {
    
    const mensagemFilho = (msg) => {
        alert("Meu filho disse: " + msg)
    }

    return (
        <div>
            <h3>Pai</h3>
            <Filho falarComPai={mensagemFilho}/>
            {/* o pai passa via props uma função para o filho*/}
        </div>
    )
}

export default Pai;

/* Normalmente a comunicação é feita de pai para filha com props,  ou contexto onde todo mundo tem acesso a tudo.
Por exemplo, eu tenho um pai que passa nome do filho via props chamando ele, mas e se o filho precisar chamar o pai? fazer contrário. */