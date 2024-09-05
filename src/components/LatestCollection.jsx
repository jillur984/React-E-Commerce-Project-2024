import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


const LatestCollection = () => {
    const{products}=useContext(ShopContext)
    console.log(products)
    const[latestProducts,setLatestProducts]=useState([])

   
    useEffect(()=>{
     setLatestProducts(products.slice(0,10))
    },[])

    console.log(latestProducts)

  return (
    <>
    <div className="my-10">
      <div className="text-3xl text-center py-8">
      <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus nihil consequuntur obcaecati qui, quidem dolor quisquam eos aut aspernatur animi ipsum quasi eum tempore, at maxime saepe! Explicabo, voluptate!</p>
      </div>
     {/* Rendering Products */}
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"> 
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
     
    </div>
    </>
  )
}

export default LatestCollection