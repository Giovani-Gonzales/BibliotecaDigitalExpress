import React from 'react';
import styled from 'styled-components';

const ModeloTitulo = styled.div`
  background-color: #383838;
  padding: 20px;
`;

const TituloNome = styled.div`
  color: #ffff;
  font-size: 32pt;
  margin-top: 0px;
  text-align: center;
`;

const Titulo = ({ nome }) => {
  return (
    <ModeloTitulo>
      <TituloNome>{nome}</TituloNome>
    </ModeloTitulo>
  );
}

export default Titulo;
