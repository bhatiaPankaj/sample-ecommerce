
import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import ShopContext from '../context/data/ShopContext'
import Item from '../components/Item/Item'
import dropdown_icon from '../assets/dropdown_icon.png'
function ShopCategory(props) {
    const { all_products } = useContext(ShopContext);
    const { banner } = props;
    const { category } = props;


    const currentCategoryProducts = all_products.filter(
      (product) => product.category === category
    );
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 of</span> 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {currentCategoryProducts.map((item, id) => {
          return (
            <Item
              key={id}
              image={item.image}
              id={item.id}
              new_price={item.new_price}
              old_price={item.old_price}
              name={item.name}
            />
          );
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory