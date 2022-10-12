
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import Preview from '../components/universal/horizontalPreview.js';
import Tabs from '../components/universal/tab.js';
import s from '../../styles/mainStyle';
import getApi from '../../api/getApi';
import Banner from '../components/universal/banner';
import Header from '../components/universal/header.js';


export default function Home() {
	
	const [product,setProduct]=useState([
		{id:0,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',subtitle:'Visit site'},
		{id:1,title:"Mens Casual Premium Slim Fit T-Shirts",image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',subtitle:'Visit site'}
	]);
	const [allproduct,setAllProduct]=useState([]);
	const [isLoading,setisLoading]=useState(true);
	const [popcat,setpopCat]=useState([
		{"id":0,"name":"All","icon":"building-o","colors":"#155C9E"},
		{"id":6,"name":"Men's clothing","icon":"tshirt","colors":"#155C9E"},
		{"id":6,"name":"Women's clothing","icon":"mobile","colors":"#155C9E"},
		{'id':5,name:'Electronics',Icon:'desktop',colors:"#d4d4d4"},
		{"id":11,"name":"jewelery","icon":"cogs","colors":"#155C9E"},
	  ])
	const [activeCat,setactiveCat]=useState("All");
	
	const getProduct=(url)=>{
		getApi(`https://fakestoreapi.com/products/category/men's clothing?limit=5`,'GET')
		.then(json=>{
			//setProduct(json)
			setisLoading(false);
		}).catch(e=>setisLoading(false));
	}

	const getAllProduct=()=>{
		getApi(`https://fakestoreapi.com/products/?limit=15`,'GET')
		.then(json=>{
			setAllProduct(json)
			setisLoading(false);
		}).catch(e=>setisLoading(false));
	}

    useEffect(()=>{
        getProduct();
		getAllProduct();
    },[])

	const categorySearch=(data)=>{
		console.log(data);
	}
    
  return (
    	<ScrollView >
		
		<Header />
		{isLoading ?
			<View style={[s.fl1,s.tocnt,s.mgtp20]}>
				<ActivityIndicator size={'small'} />
			</View>
			:
			<>
			<Banner  width="100%" height={150} image="https://previews.123rf.com/images/kchung/kchung1909/kchung190900083/130601427-sunscreen-product-banner-ads-on-orange-square-podium-and-paper-art-background-in-3d-illustration.jpg"></Banner>
			<Tabs
				data={popcat}
				bgcolor="transparent" 
				tabVal={activeCat}
				settabData={categorySearch}
			/>
			<Preview title="Flash Sale" products={product} />
			<Banner width="100%" height={150} image='https://image.freepik.com/free-vector/mega-sale-offers-modern-promotional-banner_501916-61.jpg' />
			<Preview title="Recently Viewed" products={product} />
			</>
		}
		
		</ScrollView>
      
  );
}