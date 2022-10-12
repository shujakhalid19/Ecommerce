import React from "react";
import {View,Text,TextInput} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import s from '../../../styles/mainStyle';

export default function Header(props){
    return(
        <View style={[s.row,s.rowflStart,s.pdlt10,s.mgbt20,s.pdtp10,s.pdbt10]}>
			<View style={[s.fl3,{backgroundColor:'#FFF',borderWidth:1,borderColor:"#d4d4d4",borderRadius:14,height:40}]}>
				<View style={[s.row,s.pd10]}>
					<Text>
                        <Icon name="ios-search-outline" size={18}/>
                    </Text>
					<TextInput 
						placeholder='Search for products'
						style={[s.fl1,s.pdlt10,s.f14]}
					/>
				</View>
			</View>
			<View style={[s.fl1]}>
				<Text style={[s.textCenter,s.tocnt]}>
                    <Icon name="cart" size={32} />
                </Text>
			</View>
		</View>
    )
}