import "./preloader.scss";
import logo from '../../assets/svg/logo-min.svg';

function Preloader() {
  return (
    <div className="preloader-wrapper">
      <div className="preloader">
        <img className="preloader-image" src={logo} alt="Логотип CloverChat" />
      </div>
    </div>
  );
}

export default Preloader;
