import React from "react";
import "./atividade.css"

//function
/* function MeuDados01() {
    return (
        <div>
            <h1>Guilherme dos Santos Cavalcante</h1>
            <h1>Ciência da Computação</h1>
            <h1>UFC -  Campus Quixadá</h1>
        </div>
    )
} */

//arrow function com return
/* const MeuDados01 = () => {
    return (
        <div>
            <h1>Guilherme dos Santos Cavalcante</h1>
            <h1>Ciência da Computação</h1>
            <h1>UFC -  Campus Quixadá</h1>
        </div>
    )
} */

//arrow function sem return
/* const MeuDados01 = () => <div>
    <h1>Guilherme dos Santos Cavalcante</h1>
    <h1>Ciência da Computação</h1>
    <h1>UFC -  Campus Quixadá</h1>
</div> */


class MeuDados01 extends React.Component {
    render() {
        return (
            <div align="center">
                <h1>Guilherme dos Santos Cavalcante</h1>
                <h1>Ciência da Computação</h1>
                <h1>UFC -  Campus Quixadá</h1>
            </div>
        )
    }
}

export default MeuDados01