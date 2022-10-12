import React, { useState } from "react";
import {TouchableOpacity,Text, View,StyleSheet,ScrollView, TabBarIOSItem} from 'react-native'

const Tabs=(props)=>{

    const tab=(a)=>{
        console.log('OK')
    }

    return(
        
            <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',paddingTop:5}}>

        <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor:props.bgcolor,
          height:60
        }}>
                {props.data.map((data,i)=>{
                    return(
                        <TouchableOpacity key={i} onPress={()=>props.settabData(data.title ? data.title : data.id ?  data.id : data.name)} style={[styles.item,props.tabVal===data.id && styles.itemActive]} >
                            <Text style={styles.tab}>{data.title ? data.title : data.name}</Text>
                        </TouchableOpacity>
                    )
                })

                }
           
        </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    tab:{
        color:"#000",
    },container:{
        flex:1,flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item:{
        backgroundColor:'#d9deea90',
        paddingLeft:15,
        paddingRight:15,
        padding:7,
        borderRadius:14,
        borderWidth:1,
        borderColor:'	rgba(211,211,211,0.5)',
        marginLeft:10,
        marginRight:8,
        marginTop:'auto',
        marginBottom:'auto'
    },
    itemActive:{
        paddingBottom:10,
        borderWidth:1.4,
        borderColor:"red"
        
    }
})

export default Tabs;