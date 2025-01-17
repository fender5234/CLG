import "./Tabs.scss";
import { Link } from "react-router-dom";
function Tabs() {
  return (
    <div className="tabs">
      <Link className="active">Настройка</Link>
      <Link>Тест</Link>
      <Link>Каналы</Link>
    </div>
  );
}

export default Tabs;
