import './chat-bot-card.scss';
import { useState } from 'react';

function ChatBotCard() {
  const [showOptions, setShowOptions] = useState(false);
  
  return (
    <div className="chat-bot-card-item" onClick={() => {
      setShowOptions(() => !showOptions);
    }}>
      <img src="src/assets/images/image-bot.jpeg" alt="Аватар чатбота" />
      <h3>Lunaskin</h3>
      <p>Created: 12.08.2021</p>
      <button type="button" onClick={() => {
        setShowOptions(() => !showOptions);
      }}>
        <svg width="8.000000" height="16.000000" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs>
            <clipPath id="clip2001_617">
              <rect id="more_vertical_16" rx="0.000000" width="7.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fillOpacity="0" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip2001_617)">
            <path id="↳ Icon Color" d="M4 4.5C4.82 4.5 5.5 3.82 5.5 3C5.5 2.17 4.82 1.5 4 1.5C3.17 1.5 2.5 2.17 2.5 3C2.5 3.82 3.17 4.5 4 4.5ZM4 6.5C3.17 6.5 2.5 7.17 2.5 8C2.5 8.82 3.17 9.5 4 9.5C4.82 9.5 5.5 8.82 5.5 8C5.5 7.17 4.82 6.5 4 6.5ZM4 11.5C3.17 11.5 2.5 12.17 2.5 13C2.5 13.82 3.17 14.5 4 14.5C4.82 14.5 5.5 13.82 5.5 13C5.5 12.17 4.82 11.5 4 11.5Z" fill="#B8C1CC" fillOpacity="1.000000" fillRule="nonzero" />
          </g>
        </svg>
      </button>
      <div className={showOptions ? "chat-bot-card-functions-wrapper chat-bot-card-functions-wrapper--active" : "chat-bot-card-functions-wrapper"}>
        <div className="chat-bot-card-item-functions">
          <button type="button">
            <svg width="16.960266" height="16.960266" viewBox="0 0 16.9603 16.9603" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <path id="↳ Icon Color" d="M15.02 0.69L16.26 1.93C17.19 2.85 17.19 4.34 16.26 5.26L14.14 7.39L5.61 15.92C4.95 16.58 4.05 16.96 3.11 16.96L1.61 16.96C0.72 16.96 0 16.23 0 15.34L0 13.84C0 12.9 0.37 12 1.03 11.34L9.56 2.81L9.56 2.81L11.69 0.69C12.61 -0.24 14.1 -0.24 15.02 0.69ZM10.6 3.99L2.14 12.45C1.77 12.82 1.57 13.32 1.57 13.84L1.57 15.34C1.57 15.37 1.58 15.38 1.61 15.38L3.11 15.38C3.63 15.38 4.13 15.18 4.5 14.81L12.96 6.35L10.6 3.99ZM12.8 1.8L11.78 2.81L14.14 5.17L15.15 4.15C15.46 3.85 15.46 3.35 15.15 3.04L13.91 1.8C13.6 1.49 13.1 1.49 12.8 1.8Z" fill="currentColor" fillOpacity="1.000000" fillRule="nonzero" />
            </svg>
            Настройка</button>
          <button type="button">
            <svg width="18.071442" height="18.464294" viewBox="0 0 18.0714 18.4643" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <path id="↳ Icon Color" d="M9.03 0C10.9 0 12.11 0.96 12.5 2.74L17.28 2.75C17.71 2.75 18.07 3.1 18.07 3.53C18.07 3.96 17.71 4.32 17.28 4.32L16.41 4.32L15.15 16.35C15.02 17.55 14.01 18.46 12.8 18.46L5.26 18.46C4.05 18.46 3.04 17.55 2.92 16.35L1.65 4.32L0.78 4.32C0.35 4.32 0 3.96 0 3.53C0 3.1 0.35 2.75 0.78 2.75L5.56 2.74C5.95 0.96 7.16 0 9.03 0ZM14.83 4.32L3.23 4.32L4.48 16.18C4.52 16.58 4.86 16.89 5.26 16.89L12.8 16.89C13.2 16.89 13.54 16.58 13.58 16.18L14.83 4.32ZM9.03 5.89C9.46 5.89 9.82 6.24 9.82 6.67L9.82 14.53C9.82 14.96 9.46 15.32 9.03 15.32C8.6 15.32 8.25 14.96 8.25 14.53L8.25 6.67C8.25 6.24 8.6 5.89 9.03 5.89ZM12.21 5.89C12.65 5.91 12.98 6.28 12.96 6.71L12.57 14.57C12.54 15 12.17 15.34 11.74 15.32C11.31 15.29 10.97 14.92 11 14.49L11.39 6.63C11.41 6.2 11.78 5.87 12.21 5.89ZM5.85 5.89C6.28 5.87 6.65 6.2 6.67 6.63L7.07 14.49C7.09 14.92 6.75 15.29 6.32 15.32C5.89 15.34 5.52 15 5.5 14.57L5.1 6.71C5.08 6.28 5.42 5.91 5.85 5.89ZM9.03 1.57C8.04 1.57 7.46 1.92 7.18 2.74L10.88 2.74C10.6 1.92 10.03 1.57 9.03 1.57Z" fill="currentColor" fillOpacity="1.000000" fillRule="nonzero" />
            </svg>
            Удаление</button>
        </div>
      </div>
    </div>
  )
}

export default ChatBotCard