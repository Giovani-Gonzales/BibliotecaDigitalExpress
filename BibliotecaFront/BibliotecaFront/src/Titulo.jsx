import React from 'react';
import styled from 'styled-components';

const ModeloTitulo = styled.div`
  background-image: url(${props => props.imagem});
  background-position: center;
  background-size: cover;
  padding: 32px;
`;

const TituloNome = styled.div`
  color: #ffff;
  font-size: 32pt;
  margin-top: 160px;
  text-align: center;
`;

const Titulo = ({ imagem, nome }) => {
  return (
    <ModeloTitulo imagem={imagem}>
      <TituloNome>{nome}</TituloNome>
    </ModeloTitulo>
  );
}

export default Titulo;
