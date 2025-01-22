import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Fragment } from "react"

const SocialIcons = () => {
  return (
    <Fragment>
         <FaGoogle className="social-icon" />
         <FaFacebook className="social-icon" />
         <FaTwitter className="social-icon" />
    </Fragment>
  );
};

const Footer = (props) => {
    return (
      <div className="text-center p-3">
        <a
          href="http://localhost:3001/"
          style={{ textDecoration: 'none', color: '#0056b3', fontSize: '18px' }}
        >
          Back to Shopping Cart
        </a>
        <div style={{ fontSize: '12px', marginTop: '5px', color: '#666' }}>
          We are open from 9:00 AM to 6:00 PM
        </div>
        <div className="social-link">
          <SocialIcons />
        </div>
      </div>
    );
  };
   

export default Footer;
