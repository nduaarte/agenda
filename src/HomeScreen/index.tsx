import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import data from '../data';
import SideBar from './SideBar';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'UPDATE_ALL_ASSIGNMENTS', value: data });
  }, []);

  return(
    <View>
      <SideBar />
    </View>
  );
}

export default HomeScreen;