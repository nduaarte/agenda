import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 12px;
`;

export const AllAssignment = styled(RectButton)`
  align-items: center;
  background-color: #3d5fd1;
  width: 90%;
  padding: 10px 5px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const Row = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ClosedAssignment = styled(RectButton)`
  align-items: center;
  background-color: #a64038;
  width: 45%;
  padding: 10px 5px;
  border-radius: 8px;
  margin-left: 2px;
`;

export const OpenAssignment = styled(RectButton)`
  align-items: center;
  background-color: #66a34e;
  width: 45%;
  padding: 10px 5px;
  border-radius: 8px;
  margin-right: 2px;
`;