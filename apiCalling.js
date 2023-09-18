const axios=require('axios')

const ApiGetFun=async(api)=>{
    
try {
    let res=await axios.get(api)
    console.log(res.data)
    return res.data
} catch (error) {
    console.log(error,"error while fetching the req")
    return
}
}

module.exports={
    ApiGetFun
}