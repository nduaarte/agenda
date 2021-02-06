import React from 'react';
import { View } from 'react-native';

import SideBar from './SideBar';
import MoreInfo from './MoreInfo';

const HomeScreen: React.FC = () => {
  return(
    <View style={{flex: 1, flexDirection: 'row'}}>
      <SideBar />
      <MoreInfo />
    </View>
  );
}

export default HomeScreen;