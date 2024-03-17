import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import ShopContext from "../../context/data/ShopContext";
function ProductDisplay(props) {
  const { product } = props;
  const shopContext = useContext(ShopContext);
    console.log(shopContext.cartItems);
  return (
    <div className="productDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main-img">
          <img src={product.image} className="productDisplayMain" alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-prices-old">
            {" "}
            {product.old_price}
          </div>
          <div className="productDisplay-right-prices-new">
            {product.new_price}
          </div>
        </div>

        <div className="producDisplay-right-prices-new">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          consequuntur tempora, nisi beatae nemo blanditiis atque molestias! Nam
          aliquid necessitatibus deleniti similique nobis rerum veniam dolorem!
          Quia vero dolor itaque?
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <div>s</div>
            <div>m</div>
            <div>l</div>
            <div>xl</div>
            <div>xxl</div>
          </div>
        </div>

        <button type="button" onClick={() => shopContext.addToCart(product.id)}>
          Add to cart
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span> Women,T-Shirt , Crop-top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span> Modern,Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
