import "./temporarily-not-working.scss";

function TemporarilyNotWorking() {
  return (
    <div className="not-working-wrapper">
      <h1>Извините сервис временно не доступен. Попробуйте войти позже.</h1>
      <a href="/login">Попробовать снова...</a>
    </div>
  );
}

export default TemporarilyNotWorking;
