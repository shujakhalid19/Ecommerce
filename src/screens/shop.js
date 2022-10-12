import React from "react";
import {ActivityIndicator,Dimensions,View,Text,ScrollView,SafeAreaView, Image} from 'react-native';
import Header from "../components/universal/header";
import s from '../../styles/mainStyle';
import Tabs from "../components/universal/tab";
import { useEffect, useState } from "react/cjs/react.development";
import Preview from "../components/universal/horizontalPreview";
import ProductMini from "../components/universal/productmini";
import apiData from "../../api/getApi";

const {width,height}=Dimensions.get('window');
export default function Shop(props){
    const [featured,setFeatured]=useState([]);
    const [activeCat,setactiveCat]=useState(10);
    const [isLoading,setisLoading]=useState(true);

    const categorySearch=(data)=>{
        console.log(data);
    }

    const getFeaturedProducts=(url)=>{
        apiData(url,'GET')
        .then(json=>{
            setFeatured(json)
            setisLoading(false)
        }).catch(e=>{
            setisLoading(false)
        })
    }

    useEffect(()=>{
        getFeaturedProducts(`https://fakestoreapi.com/products?limit=5`);
    },[]);
    return(
            <ScrollView>
                <Header/>
                <View style={s.fl1}>
                    <Text style={[s.f18,s.b,s.pdlt10]}>Shop For</Text>
                    <Tabs
                        data={[
                            {id:0,name:"Men"},
                            {id:0,name:"Women"},
                            {id:0,name:"Boys"},
                            {id:0,name:"Girls"},
                            {id:0,name:"Kids Wear"}
                        ]}
                        bgcolor="transparent" 
                        tabVal={activeCat}
                        settabData={categorySearch}
                    />
                </View>
                <Preview title="New Years Deals" 
                    width={width/1.2}
                    productimgheight={150}
                    productimgresizemode="cover"
                    productTitleStyle={[{fontSize:22},s.b]}
                    bigBanner={true} products={[
                    {id:0,title:'Mens Collection',image:'https://images.unsplash.com/photo-1559697242-57863dbfadcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMTA5OTY2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',price:false,discount:'Flat 50% off'},
                    {id:0,title:'Winter Collection',image:'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',price:false,discount:'Flat 60% off'},
                    {id:0,title:'Kids Wear',image:'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',price:false,discount:'30% off'}
                ]} />
            <View style={[s.fl1,s.mgtp20]}>
                <View style={[s.row,s.spacedBw,s.pdlt10,s.pdrt10]}>
                    <Text style={[s.f22,s.b]}>Fresh Arrivals</Text>
                    {isLoading && <ActivityIndicator size={'small'} />}
                </View>
                    
                
                <View style={[s.row,s.wrapper,s.mgtp30,s.pdlt10]}>
                    {isLoading ?
                    <Image source={{uri:'https://res.cloudinary.com/practicaldev/image/fetch/s--93YEl_n0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bj22jajoiosw1vgk92uk.gif'}} style={{width:'100%',height:100}} />
        :

                        featured.map((data,i)=>{
                            return(
                                <ProductMini 
                                key={i} 
                                width={width/2.5}
                                height={250}
                                productTitleStyle={props.productTitleStyle}
                                productimgheight={100}
                                productimgresizemode={"contain"}
                                product={data} />
                            )
                        })
                    }
                </View>
            </View>
            </ScrollView>
    )
}
