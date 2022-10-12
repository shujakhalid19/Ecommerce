import React from 'react'
import {Dimensions,ActivityIndicator,View,Text, ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import s from '../../styles/mainStyle';
import { useEffect, useState } from 'react/cjs/react.development';
import apiData from '../../api/getApi';
import ProductMini from '../components/universal/productmini';

const {width,height}=Dimensions.get('window');
export default function Saved(props){
    const [saved,setSaved]=useState([]);
    const [isLoading,setisLoading]=useState(true);

    const getSavedProducts=(url)=>{
        apiData(url,'GET')
        .then(json=>{
            setSaved(json);
            setisLoading(false);
        }).catch(e=>{setisLoading(false)})
    }

    useEffect(()=>{
        getSavedProducts(`https://fakestoreapi.com/products?limit=5`);
    },[]);
    return(
        <ScrollView>
            <View style={[s.fl1,s.pdlt10,s.pdtp10]}>
                <Text style={[s.f28,s.b]}>Saved</Text>
                <Text style={[s.f18]}>Products you <Icon name="heart" color={'cornflowerblue'} size={18}/></Text>
            </View>
            <View style={[s.row,s.wrapper,s.mgtp30]}>
                {isLoading ?
                    <View style={[s.fl1,s.tocnt,s.mgtp20]}>
                        <ActivityIndicator size={'small'} />
                    </View>

                    :
                    saved.map((data,i)=>{
                        return(
                            <ProductMini 
                            key={i} 
                            width={width/2.3}
                            height={250}
                            productTitleStyle={props.productTitleStyle}
                            productimgheight={100}
                            productimgresizemode={"contain"}
                            product={data} />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}