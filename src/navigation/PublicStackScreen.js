import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';

const PublicStack = createStackNavigator();

const PublicStackScreen = ({navigation}) => (
    <PublicStack.Navigator 
    screenOptions={{
        headerShown: false
      }}
        initialRouteName="SignInScreen">        
        <PublicStack.Screen name="SignInScreen" component={SignInScreen} />        
    </PublicStack.Navigator>
);

export default PublicStackScreen;