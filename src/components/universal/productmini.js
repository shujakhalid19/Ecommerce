import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {Linking,Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import s from '../../../styles/mainStyle.js';

const ProductMini=(props)=>{
    useEffect(()=>{
    },[])
    return(
        <TouchableOpacity style={[{width:props.width || 'auto',minHeight:100,height:props.height || 'auto'},!props.vertical && {marginLeft:10,marginRight:10},props.productStyle]}>
            <View style={{flex:1}}>
                <View style={[s.textCenter]}>
                    <Image source={{uri:props.product.image}}
                            style={{width:'100%',height:props.productimgheight || 120,resizeMode:props.productimgresizemode || 'contain'}}
                        />
                </View>
                
            </View>
            <View style={{flex:1,marginTop:10}}>
                    <Text style={[props.productTitleStyle || s.f15]}>
                        {props.product.title.length > 20 ? props.product.title.substring(0,18)+'..' : props.product.title}
                    </Text>
                    <Text style={[s.f14,s.b,s.mgtp10]}>{props.product.subtitle || props.product.discount}</Text>
                    <TouchableOpacity style={[btnStyle.btn,s.mgtp10]}>
                        <Text style={[s.f14,s.clfff]}>Shop Now</Text>
                    </TouchableOpacity>
            </View>
        </TouchableOpacity>

    )
}

const btnStyle=StyleSheet.create({
    btn:{
        width:'100%',
        height:35,
        backgroundColor:'#aaeebb',
        justifyContent:'center',
        alignItems:'center',
    },

})

export default ProductMini;