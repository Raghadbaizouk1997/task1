import React from "react";
import "./Property.css";
import FreeDelivery from "../../assets/FreeDelivery.svg";
import Brands from "../../assets/Brands.svg";
import Secure from "../../assets/Secure.svg";
import Returns from "../../assets/Returns.svg";
const Property = () => {
  const properties = [
    {
      id: 1,
      title: "1000+ Brands",
      description: "New additions everyday",
      imageUrl: FreeDelivery,
    },
    {
      id: 2,
      title: "Some other title",
      description: "Some other description",
      imageUrl: Brands,
    },
    {
      id: 3,
      title: "Some other title",
      description: "Some other description",
      imageUrl: Secure,
    },
    {
      id: 4,
      title: "Some other title",
      description: "Some other description",
      imageUrl: Returns,
    },
  ];
  return (
    <div className="property-container">
      {properties.map((property) => (
        <div key={property.id} className="property">
          <img src={property.imageUrl} alt="" />
          <div className="property-txt-box">
            <p style={{ margin: "0" }} className="property-txt">{property.title}</p>
            <p style={{ margin: "0" }}>{property.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Property;
