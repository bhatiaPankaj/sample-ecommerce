import React from 'react'
import  "./Breadcrumb.css"
import arrowIcon from '../../assets/breadcrum_arrow.png'

function Breadcrumb(props) {
    const {product} = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" />
      {product.name}
    </div>
  );
}

export default Breadcrumb