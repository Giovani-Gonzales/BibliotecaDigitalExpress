import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

import Campo from './Campo';
import Titulo from './Titulo';
import Conteudo from './Conteudo';

const Inicio = () => {
    const [codigos, setCodigos] = useState([]);
    const [conteudos, setConteudos] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/api")
            .then((resposta) => {
                const dados = resposta.data;
                const lista = Object.keys(dados);
                setCodigos(lista);
                setConteudos(dados);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }, []);

    return (
        <>
            <Titulo nome="Biblioteca de Livros" />
            <ContainerItems>
                <Campo className="container">
                    {
                        codigos.map((codigo) => (
                            <Conteudo
                                key={codigo}
                                capa={conteudos[codigo].capa}
                                titulo={conteudos[codigo].titulo}
                                genero={conteudos[codigo].genero}
                                ano={conteudos[codigo].ano}
                                autor={conteudos[codigo].autor}
                            />
                        ))
                    }
                </Campo>
            </ContainerItems>
        </>
    );
};

export default Inicio;
