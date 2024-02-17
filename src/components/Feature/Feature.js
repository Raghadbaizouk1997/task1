
import "./Feature.css";
import { FaPhone } from 'react-icons/fa';
import Appstore from "../../assets/Appstore.svg";
import Playstore from "../../assets/Playstore.svg";
import ExpandableComponent from "../ExpandableComponent/ExpandableComponent";
import { feature } from "../../data/data";

function Feature() {
  return (
    <>
    <div className="container">
      <div className="feature-container">
        <div style={{display: 'flex', alignItems:'center', margin: "0 30px" }}>
            <p className="txt-color txt-property">Free delivery and returns*</p>
            <div className="divider"></div>
            <p className="txt-color txt-property">24x7 delivery service*</p>
            <div className="divider"></div>   
            <div style={{display: 'flex', alignItems: 'center'}} className="txt-color txt-property">
                  <FaPhone />
                  <p>+971-365-698-13</p>
            </div>
        </div>

        <div style={{display: 'flex', margin: "0 30px"}} className="disable-responsive">
            <p className="txt-color txt-property">Download App</p>
            <img src={Appstore}  alt='' style={{margin: "15px"}}/>
            <img src={Playstore}  alt='' style={{margin: "15px"}}/>
        </div>
      </div>
    </div>
    <div className="expended-component">  
    {feature.map((item, index) => (
        <ExpandableComponent
          key={index} // Make sure to use a unique key for each component
          imageSrc={item.image}
          text={item.title}
          expandedContent={<div>Expanded content for {item.title}</div>}
        />
      ))}
      </div>
    </>
  );
}
export default Feature;
