import React from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    background-color: #5C4132;
    border-radius: 20px;
    transition: transform 0.25s, background-color 0.25s, margin 0.25s;
    height: 25rem;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 140px;

    transition: transform 0.2s;
    &:hover {
        transform: scale(105%);
        background-color: #B05727; 
        transition: transform 0.5s, background-color 0.5s, margin 0.5s;
    }
`

const ConteudoCapa = styled.img`
    height: 280px;
    width: 200px;
    margin-top: -10em;
    border-radius: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
`

const ConteudoTitulo = styled.div`
    margin: 16px 0;
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
`

const ConteudoInfo = styled.div `
    font-size:12pt;
    text-align: center;
    font-weight: normal;
    color: white;
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
