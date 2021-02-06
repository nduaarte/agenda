import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import data from '../../../data';
import { Container, Title, Description, SubContainer, TextName, DateValue } from './styles';
import { RootState } from '../../../redux/reducers/currentAssignmentIdReducer';

const MoreInfo: React.FC = () => {
  const currentID = useSelector((state: RootState) => state.currentAssignmentIdReducer.currentId);
  const index = data.map(item => item.id).indexOf(currentID);
  const { name, description, scheduling_date, update_date, creation_date } = data[index];
  // Impossível usar destruturação em cascata pois os nomes dos objetos são o mesmo.

  return (
    <Container>
      <Title>{name}</Title>

      <SubContainer>
        <TextName>NOTA: </TextName>
        <Description>{description}</Description>
      </SubContainer>

      <SubContainer>
        <TextName>Data marcada: </TextName>
        <DateValue>{`${scheduling_date.day}/${scheduling_date.month}/${scheduling_date.year} - ${scheduling_date.hours}h${scheduling_date.minutes}min`}</DateValue>
      </SubContainer>

      <SubContainer>
        <TextName>Criado em:</TextName>
        <DateValue>{`${creation_date.day}/${creation_date.month}/${creation_date.year} - ${creation_date.hours}h${creation_date.minutes}min`}</DateValue>
      </SubContainer>

      <SubContainer>
        <TextName>Editado em:</TextName>
        <DateValue>{`${update_date.day}/${update_date.month}/${update_date.year} - ${update_date.hours}h${update_date.minutes}min`}</DateValue>
      </SubContainer>
    </Container>
  );
}

export default MoreInfo;