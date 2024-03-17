import React, { useContext } from 'react'
import {ShopContext}  from '../context/data/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/BreadCrumbs/Breadcrumb'
import DescriptionBox from "../components/DescriptionBox/DescriptionBox"
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";


function Product() {
  const {all_products}  = useContext(ShopContext);
  // console.log("loggin all_products");
  // console.log(all_products);
  const product_id = useParams();
  // console.log(product_id);

  // console.log(product_id.productId);
  const product = all_products.find((e)=>{
   return  e.id == Number(product_id.productId);
  })
  // console.log(product);
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Product