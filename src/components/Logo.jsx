import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import '../stylesheets/Logo.css';

function Logo() {
    return(
        <div className="logo-container">
            <img className="logo" src={freeCodeCampLogo} alt="FreeCodeCamp Logo" />
        </div>
    );
}

export default Logo;