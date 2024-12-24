import "./user-profile.scss";

function UserProfile({ userName }) {
  return (
    <div className="user-profile">
      <button type="button" className="user-profile-notice">
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
  );
}

export default UserProfile;
