import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, AllAssignment, TextButton, Row, ClosedAssignment, OpenAssignment } from './styles';

const ButtonsSiderBar: React.FC = () => {
  const dispatch = useDispatch();

  function dispatching (value: number) {
    dispatch({ type: 'UPDATE_SHOW_DISPLAY', value });
  }

  // Apenas para renderizar as tarefas na primeira montagem dos Componentes.
  useEffect(() => {
    dispatching(1);
  }, []);

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
          <TextButton>Expirados</TextButton>
        </ClosedAssignment>
      </Row>
    </Container>
  );
}

export default ButtonsSiderBar;