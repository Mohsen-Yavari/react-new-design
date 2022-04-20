import "./logo.scss";
import Logos from "../../../assets/images/logo-s.png";


const Logo = () => {
    return (
        <div className="logo-container">
            <img className="solid-logo" src={Logos} alt="logo" />
        </div>
    );
};

export default Logo;