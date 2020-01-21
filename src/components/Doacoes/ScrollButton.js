import React from 'react';
import styled from 'styled-components'
export default function Scroll() {

  function AutoScroll() {
      window.scrollBy({
          top: 700,
          left:0,
          behavior:'smooth'
      })
  }
  
  return (
    <Button onClick={AutoScroll}>
        Próximo
    </Button>
  );
}

const Button = styled.button`
    width: 100px;
    height: 40px;
    color: whitesmoke;
    background-color: #51B981;
    font-family:'Catamaran', sans-serif;
    font-weight:bolder;

    &:hover{
        background-color: #289C72;
    }
`
