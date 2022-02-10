import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Page1 from './src/pages/page1';
import Page2 from './src/pages/page2';
import Page3 from './src/pages/page3';
import Routes from './src/pages/routes';
import { ChatRoom } from './src/pages/chatRoom';
import Matches from './src/pages/matches';
import GlobalFont from 'react-native-global-font'

export default function App() {
  
  // useEffect(()=>{

  //   fontName = 'AbrilFatface-Regular'
  //   GlobalFont.applyGlobal(fontName)
  // })
  return (
  <>
   <Routes/>
  </>
  );
}
