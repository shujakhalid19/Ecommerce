import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import s from '../../../styles/mainStyle';

const Banner=(props)=>{
    return(
        <TouchableOpacity style={[{width:props.width || 'auto',height:props.height || 'auto'},!props.hero && {padding:10}]}>
            <Image source={{uri:props.image}}
                    style={{width:'100%',height:'100%',resizeMode:'cover',borderRadius:14}}
                />
        </TouchableOpacity>

    )
}

export default Banner;