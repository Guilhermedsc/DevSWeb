import axios from 'axios';
import React, { useEffect, useState } from 'react';


const PokemonAxios = () => {

    const [id, setId] = useState(1);
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (resposta) => {
                        setNome(resposta.data.name);
                        setImagem(resposta.data.sprites.front_default);
                    }
                )
                .catch(
                    (erro) => {
                        console.log(erro);
                    }
                )
        }, [id]   //deixar o array vazio para executar apenas uma vez
    )

    return (
        <div>
            <h1>Pokemon</h1>
            <h2>{nome}</h2>
            <button 
                onClick={
                    () => {
                        setId((prev) => prev - 1);
                    }
                }
            > Pokemon anterior</button>
            <img src={imagem} alt={nome} />
            <button 
                onClick={
                    () => {
                        setId((prev) => prev + 1);
                    }
                }
            > Próximo pokemon</button>
        </div>
    )
}

export default PokemonAxios;