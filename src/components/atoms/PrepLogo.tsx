import React from 'react';
import styled from 'styled-components';

function PrepLogo() {
  return (
    <PrepClassStyled>
        <span className="prepclass">Pc</span>
        <p className="prepclass-text">PrepClass</p>
    </PrepClassStyled>
  )
}

const PrepClassStyled = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10%;

  .prepclass {
  border:2px solid green;
  padding:9px 12px;
  border-radius:10px;
  position: relative;
  font-weight: 800;
  color: green;
  font-size: 1.4rem
}

.prepclass::before {
  content:"";
  background:green;
  position: absolute;
  width: 8px;
  height: 2px;
  top:10px;
  right:12px;
}

.prepclass-text {
  font-weight: 800;
  margin-left: 1rem;
  font-size: 1.375rem;
}

@media(max-width: 1200px) {
  .prepclass {
    font-size: 1.2rem
  }
  .prepclass-text {
    font-size: 1.2rem;
  }
}

@media(max-width: 1000px) {
  .prepclass {
    font-size: 1rem
  }

  .prepclass-text {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
}

@media(max-width: 890px) {
  .prepclass {
    font-size: 0.75rem;
    padding: 9px 9px;
  }

  .prepclass-text {
    font-size: 0.75rem;
  }

  .prepclass::before {
    width: 4px;
    height: 2px;
    top: 8px;
    right:9px;
  }
}
`

export default PrepLogo
