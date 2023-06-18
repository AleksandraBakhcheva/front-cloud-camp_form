import "./Header.scss";
import folder from "../../images/folder.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header__container">
      <div className="header__container_box">
        <div className="header__container_avatar">АБ</div>
        <div className="header__container_info">
          <h1>Александра Бахчева</h1>
          <div className="header__container_contacts">
            <Link to="https://t.me/fromorningtonight" target="_blank">
              <div>
                <img src={folder} alt="folder_icon_telegram" />
                <p>Telegram</p>
              </div>
            </Link>
            <Link to="https://github.com/AleksandraBakhcheva" target="_blank">
              <div>
                <img src={folder} alt="folder_icon_github" />
                <p>GitHub</p>
              </div>
            </Link>
            <Link
              to="https://hh.ru/resume/f07c2b80ff0b6607950039ed1f784b30557455"
              target="_blank"
            >
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
