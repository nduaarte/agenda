import React from 'react';

import { Container, AllAssignment, TextButton, Row, ClosedAssignment, OpenAssignment } from './styles';

const ButtonsSiderBar: React.FC = () => {
  return (
    <Container>
      <AllAssignment>
        <TextButton>Todos</TextButton>
      </AllAssignment>

      <Row>
        <ClosedAssignment>
          <TextButton>Fechados</TextButton>
        </ClosedAssignment>

        <OpenAssignment>
          <TextButton>Abertos</TextButton>
        </OpenAssignment>
      </Row>
    </Container>
  );
}

export default ButtonsSiderBar;