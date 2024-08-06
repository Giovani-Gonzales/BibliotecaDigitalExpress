import React from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 20px;
    transition: transform 0.25s, background-color 0.25s, margin 0.25s;
    height: 25rem;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;

    transition: transform 0.2s;
    &:hover {
        transform: scale(105%);
        background-color: #e4e2e2; 
        transition: transform 0.5s, background-color 0.5s, margin 0.5s;
    }
`

const ConteudoCapa = styled.img`
    height: 280px;
    width: 200px;
`

const ConteudoTitulo = styled.div`
    margin: 16px 0;
    text-align: center;
`

const ConteudoInfo = styled.div `
    color: #555;
    font-size:12pt;
    text-align: center;
` 


const Conteudo = ({capa, titulo, genero, ano, autor}) => {
    return (
        <div> 
            <ModeloConteudo>
                <ConteudoCapa src={capa} alt="capa do livro" />
                <ConteudoTitulo>{titulo}</ConteudoTitulo>
                <ConteudoInfo>{genero.join(", ")}</ConteudoInfo>
                <ConteudoInfo>{ano}</ConteudoInfo>
                <ConteudoInfo>{autor}</ConteudoInfo>
            </ModeloConteudo>
        </div>
    );
}

export default Conteudo
