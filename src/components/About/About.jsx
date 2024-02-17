import React from "react";
import "./About.css";
import Appstore from "../../assets/Appstore.svg";
import Playstore from "../../assets/Playstore.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            paddingTop: '15px'
          }}
        >
          <div>
            <p className="txt-footer">
              <a>Medical Essentials</a>
            </p>
            <p className="txt-footer">
              <a>Nutrition</a>
            </p>
            <p className="txt-footer">
              <a>Mom & Baby Care</a>
            </p>
            <p className="txt-footer">
              <a>Home Care Eqiupments</a>
            </p>
          </div>
          <div>
            <p className="txt-footer">
              <a>Personal Care</a>
            </p>
            <p className="txt-footer">
              <a>Beauty</a>
            </p>
            <p className="txt-footer">
              <a>Lifestyle</a>
            </p>
          </div>
          <div>
            <p className="txt-footer">
              <a>Track Orders</a>
            </p>
            <p className="txt-footer">
              <a>Shipping</a>
            </p>
            <p className="txt-footer">
              <a>Returns & Exchange</a>
            </p>
            <p className="txt-footer">
              <a>Cancellation</a>
            </p>
          </div>
          <div>
            <p className="txt-footer">
              <a>About us</a>
            </p>
            <p className="txt-footer">
              <a>Contact us</a>
            </p>
            <p className="txt-footer">
              <a>FAQ</a>
            </p>
            <p className="txt-footer">
              <a>Carrers</a>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="txt-footer">
              <a>Talk to us</a>
              <h3 style={{ margin: "0" }}>+971-365-698-13</h3>
            </p>
            <p className="txt-footer">
              <a>Help Center</a>
              <h3 style={{ margin: "0" }}>support@gogopharma.com</h3>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="txt-footer">
              <a>Follow us on</a>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FaFacebook color="var(--white-color)" size="20px" />
              <FaInstagram color="var(--white-color)" size="20px" />
            </div>
          </div>
        </div>
        <div className="item-footer">
          <div style={{ width: "50%" }}>
            <p className="txt-footer"> Gets latest deals and more :</p>
            <div style={{ display: "flex", gap: "15px" }}>
              <input
                placeholder="Enter your email here"
                className="input-footer"
              />
              <button className="send-button">send</button>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <p className="txt-footer">Downlaod the app</p>
            <div style={{ display: "flex" }}>
              <a href="#">
                <img src={Appstore} alt="" style={{ width: "100px" }} />
              </a>
              <a href="#">
                <img src={Playstore} alt="" style={{ width: "100px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>

        <div className="item-footer">
          <p className="txt-footer">Terms and conditions - Privacy Policy</p>
          <p className="txt-footer">
            All right recived by GoGo pharama, UAE. Copyright@www.gogopharma.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
