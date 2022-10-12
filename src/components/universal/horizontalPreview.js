import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,Image,TouchableOpacity, View, Text, ScrollView} from 'react-native';
import s from '../../../styles/mainStyle.js';
import ProductMini from './productmini';

const Preview=(props)=>{
    return(
        <View style={[s.fl1,s.pdtp20,s.pdlt10,s.mgbt20]}>
			<Text style={[s.f18,s.b]}>{props.title}</Text>
            <ScrollView horizontal showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop:25,
                }} >
            
            {
                props.products.map((data,i)=>{
                    return(
                        <ProductMini key={i} 
                            width={props.width || 'auto'}
                            height={props.height || 'auto'}
                            productTitleStyle={props.productTitleStyle}
                            productimgheight={props.productimgheight}
                            productimgresizemode={props.productimgresizemode || "contain"}
                        product={data} />
                    )
                })
            }
            </ScrollView>
		</View>
    )
}

export default Preview;