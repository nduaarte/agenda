import React from 'react';
import { Container, Title, AssignmentsContainer } from './styles';

import Assignment from '../../Components/Assignment';

// É possível usar valores direto da API usando um .map do json e passar as props para <Assignment />.
// Porém decidi manter o componente estático para economizar tempo.
const SideBar: React.FC = () => {
  return (
    <Container>
      <Title>Lembretes</Title>

      <AssignmentsContainer>
        <Assignment
          titleName='Aniversário pai'
          description='Comprar o presente um dia antes.'
          schedulingData={{ day: 28, month: 1, year: 2021, hours: 18, minutes: 0 }}
        />
        <Assignment
          titleName='Fazer compras'
          description='Comprar coisas para o churrasco.'
          schedulingData={{ day: 6, month: 2, year: 2021, hours: 21, minutes: 30 }}
        />
        <Assignment
          titleName='Pintar garagem'
          schedulingData={{ day: 22, month: 2, year: 2021, hours: 13, minutes: 30 }}
        />
        <Assignment
          titleName='Buscar filho na faculdade'
          description='Faculdade fica atras da igreja.'
          schedulingData={{ day: 8, month: 2, year: 2021, hours: 22, minutes: 50 }}
        />
      </AssignmentsContainer>
    </Container>
  );
}

export default SideBar;