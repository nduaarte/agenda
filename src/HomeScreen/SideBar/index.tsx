import React, { useState } from 'react';
import { Container, Title, AssignmentsContainer } from './styles';

import ButtonsSideBar from '../../Components/ButtonsSideBar';
import Assignment from '../../Components/Assignment';

const SideBar: React.FC = () => {

  
  return (
    <Container>
      <Title>Lembretes</Title>
      <ButtonsSideBar />

      <AssignmentsContainer>
        <Assignment
          titleName='Aniversário pai'
          description='Comprar o presente um dia antes.'
          schedulingData={{ day: 5, month: 2, year: 2021, hours: 2, minutes: 0 }}
        />
      </AssignmentsContainer>
    </Container>
  );
}

export default SideBar;