import React from "react";
import {FlatList,Dimensions,View,Text, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import s from '../../styles/mainStyle';
import { useState } from "react/cjs/react.development";
const {width,height}=Dimensions.get('window');

const TopContent=()=>{
    return(
        <View style={[s.row,s.pd10,s.bdbt1,s.mgbt20]}>
                <View style={[s.fl1,s.textCenter]}>
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}} style={[s.coim,{width:65,height:65}]} />
                </View>
                <View style={[s.fl3,s.textCenter,s.pdlt10]}>
                    <Text style={[s.f18,s.b]}>Shuja Khalid</Text>
                    <Text style={[s.f14,s.pdtp5]}>Lorem ipsum sit amore.</Text>
                    <Text style={[s.f14]}>552211</Text>
                </View>
                <View style={[s.flsemi]}>
                    <Text>
                        <Icon name="chevron-forward-circle-outline" size={22} />
                    </Text>
                </View>
            </View>
    )
}

const Item = ({ title,action }) => (
    <TouchableOpacity onPress={()=>action(title.slug)} style={[s.row,s.spacedBw,s.pdtp10,s.pdbt10,s.pdlt10,s.pdrt10,s.bdbt1,s.mgbt10]}>
        <Text style={[s.f18]}>
        <Icon name={title.icon} size={19} /> {title.name}
        </Text>
        <Text>
            <Icon name="chevron-forward" size={18} />
        </Text>
    </TouchableOpacity>
  );

export default function Profile(props){
    const [menu,setMenu]=useState([
        {id:0,name:'Edit Profile',slug:'EditProfile',icon:'person-circle-outline'},
        {id:1,name:'Track Order',slug:'TrackOrder',icon:'location-outline'},
        {id:2,name:'Wish List',slug:'wishlist',icon:'cart-outline'},
    ])

    const actionHandler=(data)=>{
        props.navigation.navigate(data);
    }

    const renderItem = ({ item }) => (
        <Item title={item} action={actionHandler} />
    );

    return(
        <FlatList
            data={menu}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<TopContent />}
        />
    )
}