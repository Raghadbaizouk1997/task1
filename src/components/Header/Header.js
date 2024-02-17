import React from "react";
import "./Header.css";
import logoheader from "../../assets/logoheader.svg";
import {
  FaRegHeart,
  FaArchive,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import ItemHeader from "./ItemHeader";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-container">
         <div className="dropdown-responsive">
            <img src={logoheader} alt="Logo" className="logo" />
            <div className="dropdown-container">
              <div className="deliver-place">
                <span>Delivered to </span>
                <select className="dropdown box-input">
                  <option value="uae">Abodaubai, UAE</option>
                </select>
              </div>
            </div>
            </div>
        
          <div className="search-box ">
            <FaSearch color="var(--gray-color)" size="15px" style={{marginLeft: '15px'}} />
            <input
              type="text"
              className="input box-input"
              placeholder="Search Your Item Here"
            />
          </div>
        </div>
        <div className="wishlist-container">
          <ItemHeader
            count={5}
            icon={<FaRegHeart color="var(--white-color)" />}
            text="Wishlist"
            className='wishlist-text'
            classNameContainer='wishlist'
            color="var(--primary-color)"
            backgroundColor="var(--white-color)"
          />
          <div className="line"></div>
          <ItemHeader
            count={5}
            icon={<FaArchive color="var(--white-color)" />}
            text="Rewards"
            className='wishlist-text'
            classNameContainer='wishlist'
            color="var(--primary-color)"
            backgroundColor="var(--white-color)"
          />
          <div className="line"></div>
          <ItemHeader
            count={5}
            icon={<FaShoppingCart color="var(--white-color)" />}
            text="My Cart"
            description="100.13 AED"
            className='wishlist-text'
            classNameContainer='wishlist'
            color="var(--primary-color)"
            backgroundColor="var(--white-color)"
          />
        </div>
        <button className="login-btn">Login</button>
      </header>
    </div>
  );
};

export default Header;
