import React from 'react'
import styled from 'styled-components'

const ModeloCampo = styled.div `
  background: white;
  margin: 5em;
  background-color: rgba(255,255,255,0);
`

const CampoInterno = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`

const Campo = (props) => {
  return <ModeloCampo>
    <CampoInterno>
      {props.children}
    </CampoInterno>
  </ModeloCampo>
}

export default Campo
