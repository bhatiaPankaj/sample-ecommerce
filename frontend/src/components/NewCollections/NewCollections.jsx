import React from 'react'
import "./Newcollections.css"
import new_collection from "../../assets/new_collections"
import Item from '../Item/Item';
function NewCollections() {
  return (
    <div className="new_collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,id)=>{
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
    </div>
  );
}

export default NewCollections