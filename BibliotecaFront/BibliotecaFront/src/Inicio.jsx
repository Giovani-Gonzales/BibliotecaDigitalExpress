import React, { useState, useEffect } from 'react';
import axios from "axios"

import Campo from './Campo';
import Titulo from './Titulo';
import Conteudo from './Conteudo';


import Imagem from './assets/images.jpg'

const Inicio = () => {

    const [codigos, setCodigos] = useState([])
    const [conteudos, setConteudos] = useState({})

    useEffect(() => {
        axios.get("http://localhost:4000/api")
            .then((resposta) => {
                const dados = reposta.data
                const lista = Object.keys(dados)
                definirCodigos(lista)
                definiConteudos(dados)
            })
            .catch((erro) => {
                console.log(erro)
            })
    })
  return (
    <>
      <Titulo 
        imagem= {Imagem} 
        nome="Testando"
      />
        <Campo>
            {
                codigos.map((codigo) => {
                    return <Conteudo
                    key={codigo}
                    capa={conteudos[codigo].capa}
                    titulo={ conteudos[codigo]}
                    />
                })
            }
        </Campo>
    </>
  );
}

export default Inicio;
