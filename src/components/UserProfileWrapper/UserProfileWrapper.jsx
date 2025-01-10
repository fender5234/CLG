import './user-profile-wrapper.scss';
import avatar from '/src/assets/images/userava.jpg';
import iconDropDown from '/src/assets/svg/dropdown.svg';

function UserProfileWrapper({ userName, isMobile }) {
  return (
    <div className="user-profile-wrapper">
      <img src={avatar} alt="Аватар пользователя" />
      <h4>{userName}</h4>
      {isMobile ? '' :
        <button>
          <img src={iconDropDown} alt="иконка раскрывающиеся меню" />
        </button>
      }
    </div>
  )
}

export default UserProfileWrapper;