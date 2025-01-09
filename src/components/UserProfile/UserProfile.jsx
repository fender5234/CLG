import "./user-profile.scss";

import useDeviceDetect from "../../customHooks/useDeviceDetect";

function UserProfile({ userName, setOpenMenu }) {
  const isMobile = useDeviceDetect();
  return (
    <>
      {
        isMobile ?
          <div className="user-profile">
            <button type="button" className="user-profile__button">
              <img src="src/assets/svg/notification.svg" alt="иконка уведомления" />
              <span>99</span>
            </button>
            <button onClick={() => {
              setOpenMenu((menu) => !menu);
            }} type="button" className="user-profile__button">
              <svg width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>
                  Created with Pixso.
                </desc>
                <defs />
                <path id="↳ Icon Color" d="M2.75 10.08L19.25 10.08C19.75 10.08 20.16 10.49 20.16 11C20.16 11.5 19.75 11.91 19.25 11.91L2.75 11.91C2.24 11.91 1.83 11.5 1.83 11C1.83 10.49 2.24 10.08 2.75 10.08ZM2.75 3.66L19.25 3.66C19.75 3.66 20.16 4.07 20.16 4.58C20.16 5.08 19.75 5.5 19.25 5.5L2.75 5.5C2.24 5.5 1.83 5.08 1.83 4.58C1.83 4.07 2.24 3.66 2.75 3.66ZM19.25 18.33L10.08 18.33C9.57 18.33 9.16 17.92 9.16 17.41C9.16 16.91 9.57 16.5 10.08 16.5L19.25 16.5C19.75 16.5 20.16 16.91 20.16 17.41C20.16 17.92 19.75 18.33 19.25 18.33Z" fill="#219436" fillOpacity="1.000000" fillRule="nonzero" />
              </svg>
            </button>
          </div>
          :
          <div className="user-profile">
            <button type="button" className="user-profile__button">
              <img src="src/assets/svg/notification.svg" alt="иконка уведомления" />
              <span>99</span>
            </button>
            <span></span>
            <div className="user-profile-wrapper">
              <img src="src/assets/images/userava.jpg" alt="Аватар пользователя" />
              <h4>{userName}</h4>
              <button>
                <img src="src/assets/svg/dropdown.svg" alt="иконка раскрывающиеся меню" />
              </button>
            </div>
          </div>
      }
    </>
  );
}

export default UserProfile;
