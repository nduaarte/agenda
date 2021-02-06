import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, AllAssignment, TextButton, Row, ClosedAssignment, OpenAssignment } from './styles';

const ButtonsSiderBar: React.FC = () => {
  const dispatch = useDispatch();

  function dispatching (value: number) {
    dispatch({ type: 'UPDATE_SHOW_DISPLAY', value });
  }

  return (
    <Container>
      <AllAssignment onPress={() => dispatching(1)}>
        <TextButton>Todos</TextButton>
      </AllAssignment>

      <Row>
        <OpenAssignment onPress={() => dispatching(2)}>
          <TextButton>Abertos</TextButton>
        </OpenAssignment>

        <ClosedAssignment onPress={() => dispatching(3)}>
          <TextButton>Fechados</TextButton>
        </ClosedAssignment>
      </Row>
    </Container>
  );
}

export default ButtonsSiderBar;