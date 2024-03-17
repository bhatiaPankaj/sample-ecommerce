import React from 'react'
import "./descriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="description-box-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error earum blanditiis quia voluptatem exercitationem, ratione ullam quaerat delectus ducimus harum magnam temporibus voluptatum, voluptate, dolorum vero quis odit provident quisquam?</p>
      </div>

    </div>
  );
}

export default DescriptionBox