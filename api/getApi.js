//api callling function
const apiData=async (url,type)=>{
    var req=await fetch(url,{method:type})
    var res=await req.json();
    return res;
}

export default apiData;