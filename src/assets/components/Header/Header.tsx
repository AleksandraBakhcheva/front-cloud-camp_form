import "./Header.scss";
import { Link } from "react-router-dom";
import folder from "../../images/folder.svg";

export default function Header() {
  return (
    <header className="header__container">
      <div className="header__container_box">
        <div className="header__container_avatar">АИ</div>
        <div className="header__container_info">
          <h1>Иван Иванов</h1>
          <div className="header__container_contacts">
            <Link to="...">
              <div>
                <img src={folder} alt="folder_icon_telegram" />
                <p>Telegram</p>
              </div>
            </Link>
            <Link to="...">
              <div>
                <img src={folder} alt="folder_icon_github" />
                <p>GitHub</p>
              </div>
            </Link>
            <Link to="...">
              <div>
                <img src={folder} alt="folder_icon_resume" />
                <p>Resume</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
