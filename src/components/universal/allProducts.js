import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Image,TouchableOpacity, View, Text, ScrollView} from 'react-native';
import s from '../../../styles/mainStyle.js';
import ProductMini from './productmini';

const AllProducts=(props)=>{
    return(
        <View style={[s.fl1,s.pd0,s.mgbt20]}>
			<Text style={[s.f22,s.b,s.pdlt10,s.pdtp10]}>{props.title}</Text>
            <View style={[s.row,s.rowflStart,s.wrapper,s.mgtp20]}>
            {
                props.products.map((data,i)=>{
                    return(
                        <ProductMini width="45%" vertical={true} productStyle={[
                            {marginBottom:30},
                            i%2 ? {marginLeft:10} : {marginLeft:5}]} key={i} product={data} />
                    )
                })
            }
            </View>
            
		</View>
    )
}

export default AllProducts;