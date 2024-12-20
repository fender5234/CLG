import "./preloader.scss";

function Preloader() {
  return (
    <div className="preloader-wrapper">
      <div className="preloader">
        <img className="preloader-image" src="src/assets/svg/logo-min.svg" alt="Логотип CloverChat" />
      </div>
    </div>
  );
}

export default Preloader;
