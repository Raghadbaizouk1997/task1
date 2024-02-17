import React, { useState } from "react";
import "./Navigation.css";
import ItemHeader from "../Header/ItemHeader";
import { FaRegHeart, FaShoppingCart, FaHome  } from "react-icons/fa";

const Navigation = () => {
    const [activeItemHome, setActiveItemHome] = useState('Home'); 
    const [activeItem, setActiveItem] = useState('Home'); 

    const handleItemClick = (itemName) => {
        setActiveItemHome(itemName);
    };

  return (
    <nav className="navigation">
      <ul className="align-navigate">
        <li>
          <a href="#" className={`txt-navigate ${activeItemHome === 'Home' ? 'active-navigate' : ''}`} onClick={() => handleItemClick('Home')}>
          <ItemHeader
              icon={<FaHome  />}
              text="Home"
              className="txt-navigate"
              classNameContainer="icon-navigate"
            />
          </a>
        </li>
        <li>
          <div></div>
          <a href="#" className={`txt-navigate ${activeItemHome === 'Wishlist' ? 'active-navigate' : ''}`} onClick={() => handleItemClick('Wishlist')}>
            {" "}
            <ItemHeader
              count={5}
              icon={<FaRegHeart />}
              text="Wishlist"
              className="txt-navigate"
              color="var(--white-color)"
              backgroundColor="var(--primary-color)"
              classNameContainer="icon-navigate"
            />
          </a>
        </li>
        <li>
          <a href="#" className={`txt-navigate ${activeItemHome === 'MyCart' ? 'active-navigate' : ''}`} onClick={() => handleItemClick('MyCart')}>
          <ItemHeader
              count={5}
              icon={<FaShoppingCart />}
              text="MyCart"
              className="txt-navigate"
              color="var(--white-color)"
              backgroundColor="var(--primary-color)"
              classNameContainer="icon-navigate"
            />
          </a>
        </li>
        <li>
          <a href="#" className={`txt-navigate ${activeItemHome === 'Profile' ? 'active-navigate' : ''}`} onClick={() => handleItemClick('Profile')}>
          <ItemHeader
              icon={<FaHome  />}
              text="Profile"
              className="txt-navigate"
              classNameContainer="icon-navigate"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
