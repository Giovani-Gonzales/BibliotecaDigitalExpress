import React from 'react';
import styled from 'styled-components';

const ModeloTitulo = styled.div`
  background-color: #B05727;
  padding: 20px;
  margin-bottom: 100px;
`;

const TituloNome = styled.div`
  color: #ffff;
  font-size: 40pt;
  margin-top: 0px;
  text-align: center;
  font-weight: bold;
`;

const Titulo = ({ nome }) => {
  return (
    <ModeloTitulo>
      <TituloNome>{nome}</TituloNome>
    </ModeloTitulo>
  );
}

export default Titulo;
