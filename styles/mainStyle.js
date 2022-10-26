//main styling
import React,{useState} from "react";
import {Dimensions,StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window')


module.exports =StyleSheet.create({
    flsemi:{
        flex:0.5
    },
    fl1:{
        flex:1
    },
    fl2:{
        flex:2
    },
    fl3:{
        flex:3
    },
    product_title:{
        fontWeight:'bold',fontSize:18
    }
    ,
    bd:{
        borderWidth:1,
        borderColor:'#d4d4d4'
    },
    bdrd14:{
        borderRadius:14,
    },
    bdbt1:{
        borderBottomWidth:1,
        borderBottomColor:'#d4d4d4'
    },
    header:{
        paddingTop:30,
    },
    
    title:{
        fontSize:32,
        
    },
    rightLocation:{
        color:'cornflowerblue',
        marginTop:10,
        fontSize:16,
    },
    divider:{
        width:'100%',
        height:30,
        backgroundColor:'#d9deea90',
        marginTop:30
    },
    search:{
        width:'90%',
        height:50,
        backgroundColor:'#d9deea90',
        marginTop:20,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#A9A9A9',
        paddingLeft:10
    },
    searchTxt:{
        fontSize:18,
        marginTop:'auto',
        marginBottom:'auto',
        color:'#A9A9A9'
    },
    dividerGrey:{
        width:'100%',
        height:30,
        backgroundColor:'#d9deea90',
        marginTop:30
    },
    row:{
        flex:1,
        flexDirection:'row',
    },
    rowflStart:{
        justifyContent:"flex-start"
    },
    toCenter:{
        justifyContent:"center"
    },
    wrapper:{
        flexWrap:'wrap'
    },
    clm:{
        flexDirection:'column'
    },
    evenlySpaced:{
        justifyContent:'space-evenly'
    },
    spacedBw:{
        justifyContent:'space-between'
    },
    products:{
        width:width,
        flexDirection:'column-reverse'
        
    },
    flatItem:{
        flex:1,
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'#d4d4d4',
        marginBottom:10
    },
    gridItem:{
        width:200,
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'#d4d4d4',
        
        marginRight:20
    },
    catItem:{
        backgroundColor:'#d4d4d466',
        padding:6,
        borderRadius:12,
        borderWidth:1,
        borderColor:'	rgba(211,211,211,0.5)',
        marginRight:10,
        marginBottom:20
    },
    itemActive:{
        paddingBottom:10,
        
    },
    serviceItem:{
        width:200
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
    bgInfo:{
        backgroundColor:'#aaeedd'
    },
    bgdefault:{
        backgroundColor:'#fff'
    },
    bglightGrey:{
        backgroundColor:'rgba(211,211,211,0.2)'
    },
    tocnt:{
        justifyContent:'center'
    },
    alItsCnt:{
        alignItems:'center'
    },
    mgtp10:{
        marginTop:10
    },
    mgtp20:{
        marginTop:20
    },
    mgtp30:{
        marginTop:30
    },
    mgbt10:{
        marginBottom:10
    },
    mgbt20:{
        marginBottom:20
    },
    mgbt30:{
        marginBottom:30
    },
    mgrt10:{
        marginRight:10
    },
    mgrt20:{
        marginRight:20
    },
    mglt0:{
        marginLeft:0
    },
    pd10:{
        padding:10
    },
    pdtp5:{
        paddingTop:5
    },
    pdtp10:{
        paddingTop:10
    },
    pdtp20:{
        paddingTop:20
    },
    pdbt10:{
        paddingBottom:10
    },
    pdbt20: {
        paddingBottom: 20
    },
    pdbt30:{
        paddingBottom:30
    },
    pdlt0:{
        paddingLeft:0
    },
    pdlt10:{
        paddingLeft:10
    },
    pdlt20:{
        paddingLeft:20
    },
    pdlt30:{
        paddingLeft:30
    },
    pdrt10:{
        paddingRight:10
    },
    pdrt20:{
        paddingRight:20
    }
    ,
    b:{
        fontWeight:'bold'
    },
    clBl:{
        color:'cornflowerblue'
    },
    f15:{
        fontSize:16
    },
    f18:{
        fontSize:18
    },
    f22:{
        fontSize:22
    },
    f24:{
        fontSize:24
    },
    f28:{
        fontSize:28
    },
    textCenter:{
        textAlign:'center'
    },
    indicatorContainer:{marginTop:140},
    fullImage200h:{
        width:'100%',height:200
    },
    coim:{
        width:60,height:60,borderRadius:60/2,borderWidth:1,borderColor:'cornflowerblue'
    },
    
})


