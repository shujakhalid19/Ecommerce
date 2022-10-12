import react, { useLayoutEffect } from "react";
import {View,Text, ScrollView} from 'react-native'
import Icon from "@expo/vector-icons/Ionicons"
import s from '../../../styles/mainStyle'
import { useEffect } from "react/cjs/react.development";
export default function TrackOrder(props){
    useLayoutEffect(()=>{
        props.hideTabBar(true)
        return () => {
            props.hideTabBar(false);
        }
    },[])
    return(
        <ScrollView>
            <View style={[s.fl1,s.pdlt10,s.mgtp20]}>
                <Text style={[s.f15,s.b,s.mgbt10]}>Shipment Details</Text>
                <Text style={s.f15}>
                    Your Order <Text style={s.clBl}>Mens Casual Tshirt</Text> has been confirmed by seller,Seller Name.
                </Text>
                <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>Estimated Delivery</Text>
                <Text style={s.f18}>Today 5:30 pm</Text>
            </View>
            <View style={[s.row,s.spacedBw,s.pdlt10,s.pdrt10,s.bdbt1]}>
                <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>Track Order</Text>
                <Text style={[s.mgtp20,s.mgbt10,{color:'#a3a3a3',fontSize:12,paddingTop:4}]}>Order Id #34b34u334b</Text>
            </View>
            <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                <View style={s.flsemi}>
                    <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                        <Icon name="checkmark-circle-outline" size={32} color={'green'} />
                    </Text>
                </View>
                <View style={[s.fl3,s.pdbt10]}>
                    <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#000000"}]}>Order Request Confirmed</Text>
                    <Text style={[s.f14,{color:'#00000099'}]}>
                        <Icon name="time-outline" /> 8:10 PM, 19 July,2021
                    </Text>
                </View>
            </View>
            <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                <View style={s.flsemi}>
                    <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                        <Icon name="checkmark-circle-outline" size={32} color={'cornflowerblue'} />
                    </Text>
                </View>
                <View style={[s.fl3,s.pdbt10]}>
                    <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#00000099"}]}>Order dispatched to delivery</Text>
                    <Text style={[s.f14,{color:'#00000088'}]}>
                        <Icon name="time-outline" /> 8:10 AM, 20 July,2021
                    </Text>
                </View>
            </View>
            <View style={[s.row,s.rowflStart,s.pdlt10,s.pdrt10,s.bdbt1]}>
                <View style={s.flsemi}>
                    <Text style={[s.f15,s.b,s.mgtp20,s.mgbt10]}>
                        <Icon name="checkmark-circle-outline" size={32} color={'#00000088'} />
                    </Text>
                </View>
                <View style={[s.fl3,s.pdbt10]}>
                    <Text style={[s.mgtp20,s.mgbt10,s.f18,s.b,{color:"#00000088"}]}>Arriving Today</Text>
                    <Text style={[s.f14,{color:'#00000088'}]}>
                        <Icon name="time-outline" /> 8:10 AM, 20 July,2021
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

