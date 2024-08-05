import React from 'react'
import styled from 'styled-components'

const ModeloConteudo = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
`

const ConteudoCapa = styled.img`
    height: 280px;
    transition: 0.2s;
    &:hover {
        transfor,: scale(120%);
        transition: 0.5s;
    }
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
  return <ModeloConteudo>
    <ConteudoCapa src={capa} alt="capa do livro"/>
    <ConteudoTitulo>{titulo}</ConteudoTitulo>
    <ConteudoInfo>{genero.join(", ")}</ConteudoInfo>
    <ConteudoInfo>{ano}</ConteudoInfo>
    <ConteudoInfo>{autor}</ConteudoInfo>
  </ModeloConteudo>
}

export default Conteudo
