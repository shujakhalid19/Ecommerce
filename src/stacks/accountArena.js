import React from 'react'
import {View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import EditProfile from './account/editprofile';
import TrackOrder from './account/trackorder';
const Stack=createNativeStackNavigator();


const AccountStacks=({navigation,route})=>{
    const hideTabBar = (screen) => {
        if(screen===true){
            navigation.setOptions({
                tabBarStyle: { display: 'none' },
              });
        }else{
            navigation.setOptions({
                tabBarStyle: { display: 'flex' },
              });
        }
      };
    return(
        <Stack.Navigator initialRouteName='Account'>
            <Stack.Screen name="Account">
                {(props)=><Profile {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="TrackOrder">
                {(props)=><TrackOrder {...props} hideTabBar={hideTabBar}/>}
            </Stack.Screen>
            <Stack.Screen name="EditProfile">
                {(props)=><EditProfile {...props} hideTabBar={hideTabBar}/> }
            </Stack.Screen>
        </Stack.Navigator>
    )
}


export default AccountStacks;