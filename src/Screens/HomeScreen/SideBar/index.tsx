import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import data from '../../../data';
import { Container, Title, AssignmentsContainer } from './styles';
import { ObjectTypes } from '../../../Components/Assignment';
import { RootState } from '../../../redux/reducers/showDisplayReducer';
import checkAssignment from '../../../utils/checkAsignment';
import ButtonsSideBar from '../../../Components/ButtonsSideBar';
import Assignment from '../../../Components/Assignment';

interface TypesState {
  hasChecked: boolean;
  id: number;
  name: string;
  scheduling_date: ObjectTypes;
}

const SideBar: React.FC = () => {
  const [allAssignments, setAllAssignment] = useState<TypesState[]>([]);
  const [openAssignments, setOpenAssignment] = useState<TypesState[]>([]);
  const [closedAssignments, setClosedAssignment] = useState<TypesState[]>([]);
  const [currentAssignments, setCurrentAssignment] = useState<TypesState[]>([]);

  // Valor despachado do <ButtonsSideBar />.
  const showDisplay = useSelector((state: RootState) => state.showDisplayReducer.showDisplay);
  
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      const { id, name, scheduling_date } = data[i];
      const { year, month, day, hours, minutes } = scheduling_date;
      const hasChecked = checkAssignment(year, month, day, hours, minutes);

      // Isto é um .push no useState().
      // Faz todas as adições e ajustes deixando o array pronto para ser usado.
      if (hasChecked) {
        setClosedAssignment(oldArray => [...oldArray, { id, name, scheduling_date, hasChecked }]);
      } else {
        setOpenAssignment(oldArray => [...oldArray, { id, name, scheduling_date, hasChecked }]);
      }
      setAllAssignment(oldArray => [...oldArray, { id, name, scheduling_date, hasChecked }]);
    }
  }, []);

  // Arrays prontos e configurados para renderizar.
  // Apenas verifica qual valor foi despachado e renderiza o array correto.
  useEffect(() => {
    if(showDisplay === 1)
      setCurrentAssignment(allAssignments);
    else if(showDisplay === 2)
      setCurrentAssignment(openAssignments);
    else if(showDisplay === 3)
      setCurrentAssignment(closedAssignments);
  }, [showDisplay]);

  return (
    <Container>
      <Title>Lembretes</Title>
      <ButtonsSideBar />

      <AssignmentsContainer>
        {
          currentAssignments.map(({ id, name, scheduling_date, hasChecked }) => (
            <Assignment
              key={id}
              id={id}
              expired={hasChecked}
              titleName={name}
              schedulingData={scheduling_date}
            />
          ))
        }
      </AssignmentsContainer>
    </Container>
  );
}

export default SideBar;