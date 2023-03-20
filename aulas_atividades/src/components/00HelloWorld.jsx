//V0
/* function HelloWorld() {
    return <div>
        <h1>Guilherme dos Santos Cavalcante</h1>
    </div>
} */

//import React from "react";
import { Component } from "react";

//V1
/* function HelloWorld() {
    return( 
        <div align="center">
            <h1>Guilherme dos Santos Cavalcante</h1>
        </div>
    );
} */

//V2
/* const HelloWorld = () => {
    let x = 2   //let só pode ser usado dentro no escopo, var pode ser usado em todo lugar
    let y = 3
    let r = x + y
    return( 
        <div align="center">
            <h1>Guilherme dos Santos Cavalcante {r}</h1>
        </div>
    );
} */

//V3
/* const HelloWorld = () =>
    <div align="center">
        <h1>Guilherme dos Santos</h1>
    </div>
 */

//V4
/* class HelloWorld extends React.Component {
    render() {
        return (
            <div align="center">
                <h1>Guilherme dos Santos</h1>
            </div>
        );
    }
} */

//v5
class HelloWorld extends Component {
    render() {
        return (
            <div align="center">
                <h1>Guilherme dos Santos</h1>
            </div>
        );
    }
}

export default HelloWorld;