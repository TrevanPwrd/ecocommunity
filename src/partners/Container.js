import React from 'react'
import styled from 'styled-components'
import Header from '../main/Header'
import Board from './Board'

const Screen = styled.div`
  padding-left:10%;
  
  wight: 1440px;
  height: 900px;
`;

const Container = ({}) => (
    <Screen>
        <Header/>
        <Board/>
    </Screen>
);

export default Container
