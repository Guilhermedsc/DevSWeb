const SaveData = () => {
    const saveDate = () => {
        const aluno = {nome:"Guilherme", curso:"CC"}
        localStorage.setItem("aluno01", JSON.stringify(aluno))
        // setItem(key,value) só aceita string, por isso o JSON.stringify que transforma o objeto em string
    }
    return (
        <div>
            <h1>saving data</h1>
            {saveDate()}
            <LoadData /> 
        </div>
    )
}

const LoadData = () => {
    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))
        // getItem(key) retorna o valor da chave, mas em string. Por isso o JSON.parse que transforma a string em objeto
        return (
            <div>
                <p>Nome: {alunoCarregado.nome}</p>
                <p>Curso: {alunoCarregado.curso}</p>
            </div>
        )
    }
    return (
        <div>
            <h1>loading data</h1>
            {loadData()}
        </div>
    )
}

export default SaveData