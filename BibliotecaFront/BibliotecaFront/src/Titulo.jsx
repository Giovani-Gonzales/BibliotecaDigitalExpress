import React from 'react';
import styled from 'styled-components';

const ModeloTitulo = styled.div`
  background-color: #5C4132;
  padding: 20px;
  margin-bottom: 100px;
  width:40%;
  margin: 0 auto; 
  margin-bottom: 100px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  padding:40px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
`;

const TituloNome = styled.div`
  color: #ffff;
  font-size: 25pt;
  margin-top: 0px;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Titulo = ({ nome }) => {
  return (
    <ModeloTitulo>
      <TituloNome>{nome}</TituloNome>
    </ModeloTitulo>
  );
}

export default Titulo;
